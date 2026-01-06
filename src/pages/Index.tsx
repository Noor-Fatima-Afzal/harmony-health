import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/common/StatCard';
import { StatusBadge } from '@/components/common/StatusBadge';
import {
  Users,
  Calendar,
  FlaskConical,
  AlertTriangle,
  Bed,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  ArrowRight,
  Video,
  MoreHorizontal,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { dashboardStats, mockAppointments, mockPatients } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const patientFlowData = [
  { name: 'Mon', inpatient: 120, outpatient: 240, emergency: 35 },
  { name: 'Tue', inpatient: 132, outpatient: 221, emergency: 42 },
  { name: 'Wed', inpatient: 101, outpatient: 229, emergency: 28 },
  { name: 'Thu', inpatient: 134, outpatient: 255, emergency: 38 },
  { name: 'Fri', inpatient: 90, outpatient: 198, emergency: 45 },
  { name: 'Sat', inpatient: 65, outpatient: 142, emergency: 52 },
  { name: 'Sun', inpatient: 58, outpatient: 98, emergency: 48 },
];

const departmentData = [
  { name: 'Cardiology', value: 28, color: 'hsl(210, 100%, 50%)' },
  { name: 'Orthopedics', value: 22, color: 'hsl(168, 76%, 42%)' },
  { name: 'Neurology', value: 18, color: 'hsl(38, 92%, 50%)' },
  { name: 'Pediatrics', value: 15, color: 'hsl(280, 65%, 60%)' },
  { name: 'Others', value: 17, color: 'hsl(215, 15%, 60%)' },
];

const revenueData = [
  { month: 'Jan', revenue: 42500 },
  { month: 'Feb', revenue: 45200 },
  { month: 'Mar', revenue: 48900 },
  { month: 'Apr', revenue: 46300 },
  { month: 'May', revenue: 52100 },
  { month: 'Jun', revenue: 55800 },
];

const Index = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">{today}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Patients"
          value={dashboardStats.totalPatients.toLocaleString()}
          change={12}
          changeLabel="vs last month"
          icon={<Users className="h-6 w-6" />}
          variant="primary"
        />
        <StatCard
          title="Today's Appointments"
          value={dashboardStats.todayAppointments}
          change={8}
          changeLabel="vs yesterday"
          icon={<Calendar className="h-6 w-6" />}
          variant="info"
        />
        <StatCard
          title="Pending Lab Results"
          value={dashboardStats.pendingLabResults}
          change={-5}
          changeLabel="vs yesterday"
          icon={<FlaskConical className="h-6 w-6" />}
          variant="warning"
        />
        <StatCard
          title="Critical Alerts"
          value={dashboardStats.criticalAlerts}
          icon={<AlertTriangle className="h-6 w-6" />}
          variant="destructive"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Bed Occupancy"
          value={`${dashboardStats.bedOccupancy}%`}
          icon={<Bed className="h-6 w-6" />}
        />
        <StatCard
          title="Avg Wait Time"
          value={`${dashboardStats.averageWaitTime} min`}
          change={-15}
          changeLabel="improved"
          icon={<Clock className="h-6 w-6" />}
          variant="success"
        />
        <StatCard
          title="Revenue Today"
          value={`$${(dashboardStats.revenueToday / 1000).toFixed(1)}K`}
          change={18}
          changeLabel="vs avg"
          icon={<DollarSign className="h-6 w-6" />}
          variant="success"
        />
        <StatCard
          title="Patient Satisfaction"
          value={dashboardStats.patientSatisfaction}
          icon={<Star className="h-6 w-6" />}
          variant="info"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Patient Flow Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-semibold">Patient Flow</CardTitle>
              <CardDescription>Weekly patient visits by type</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              View Report <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={patientFlowData}>
                  <defs>
                    <linearGradient id="colorInpatient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(210, 100%, 50%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(210, 100%, 50%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorOutpatient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(168, 76%, 42%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(168, 76%, 42%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="outpatient"
                    stroke="hsl(168, 76%, 42%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorOutpatient)"
                  />
                  <Area
                    type="monotone"
                    dataKey="inpatient"
                    stroke="hsl(210, 100%, 50%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorInpatient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Inpatient</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Outpatient</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Departments</CardTitle>
            <CardDescription>Patient distribution by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`${value}%`, 'Patients']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {departmentData.map((dept) => (
                <div key={dept.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: dept.color }}
                    />
                    <span className="text-sm text-muted-foreground">{dept.name}</span>
                  </div>
                  <span className="text-sm font-medium">{dept.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-lg font-semibold">Today's Appointments</CardTitle>
              <CardDescription>Upcoming patient visits</CardDescription>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/appointments">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
              <div className="space-y-3">
                {mockAppointments.map((apt) => {
                  const patient = mockPatients.find((p) => p.id === apt.patientId);
                  return (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-11 w-11">
                          <AvatarImage src={patient?.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                            {apt.patientName.split(' ').map((n) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{apt.patientName}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{apt.startTime} - {apt.endTime}</span>
                            <span>•</span>
                            <span>{apt.department}</span>
                            {apt.isTelemedicine && (
                              <>
                                <span>•</span>
                                <Video className="h-3.5 w-3.5 text-info" />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <StatusBadge status={apt.status} pulse={apt.status === 'in-progress'} />
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Check In</DropdownMenuItem>
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Quick Actions & Revenue */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                <Link to="/patients/register">
                  <Users className="h-5 w-5" />
                  <span className="text-xs">New Patient</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                <Link to="/appointments">
                  <Calendar className="h-5 w-5" />
                  <span className="text-xs">Book Appointment</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                <Link to="/prescriptions">
                  <FlaskConical className="h-5 w-5" />
                  <span className="text-xs">Lab Order</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                <Link to="/radiology">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-xs">View Reports</span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Revenue Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Revenue Trend</CardTitle>
              <CardDescription>Last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={(v) => `$${v/1000}K`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                    />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bed Occupancy */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Bed Occupancy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ICU</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">General Ward</span>
                  <span className="font-medium">76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Emergency</span>
                  <span className="font-medium">58%</span>
                </div>
                <Progress value={58} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
