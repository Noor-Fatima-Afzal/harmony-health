import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter,
  FlaskConical,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MoreHorizontal,
  FileText,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { StatCard } from '@/components/common/StatCard';

const labOrders = [
  { id: 'LAB001', patient: 'John Smith', test: 'Complete Blood Count', priority: 'routine', status: 'completed', orderedBy: 'Dr. Johnson', date: '2024-01-15' },
  { id: 'LAB002', patient: 'Sarah Davis', test: 'Lipid Panel', priority: 'urgent', status: 'in-progress', orderedBy: 'Dr. Chen', date: '2024-01-14' },
  { id: 'LAB003', patient: 'Michael Brown', test: 'HbA1c', priority: 'routine', status: 'pending', orderedBy: 'Dr. Davis', date: '2024-01-14' },
  { id: 'LAB004', patient: 'Emily Wilson', test: 'Thyroid Panel', priority: 'routine', status: 'completed', orderedBy: 'Dr. Johnson', date: '2024-01-13' },
  { id: 'LAB005', patient: 'Robert Taylor', test: 'Basic Metabolic Panel', priority: 'stat', status: 'in-progress', orderedBy: 'Dr. Roberts', date: '2024-01-12' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
    case 'in-progress':
      return <Badge className="bg-info/10 text-info border-info/20">In Progress</Badge>;
    case 'pending':
      return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case 'stat':
      return <Badge variant="destructive">STAT</Badge>;
    case 'urgent':
      return <Badge className="bg-warning/10 text-warning border-warning/20">Urgent</Badge>;
    default:
      return <Badge variant="secondary">Routine</Badge>;
  }
};

const LabOrders = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Lab Orders</h1>
          <p className="text-muted-foreground mt-1">Manage laboratory test orders and results</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Lab Order
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Orders"
          value="542"
          change={8}
          changeLabel="today"
          icon={<FlaskConical className="h-6 w-6" />}
          variant="primary"
        />
        <StatCard
          title="Completed"
          value="398"
          icon={<CheckCircle2 className="h-6 w-6" />}
          variant="success"
        />
        <StatCard
          title="In Progress"
          value="89"
          icon={<Clock className="h-6 w-6" />}
          variant="info"
        />
        <StatCard
          title="Critical Results"
          value="5"
          icon={<AlertTriangle className="h-6 w-6" />}
          variant="destructive"
        />
      </div>

      {/* Search */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search lab orders..." className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Ordered By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {labOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.patient}</TableCell>
                  <TableCell>{order.test}</TableCell>
                  <TableCell>{getPriorityBadge(order.priority)}</TableCell>
                  <TableCell>{order.orderedBy}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default LabOrders;
