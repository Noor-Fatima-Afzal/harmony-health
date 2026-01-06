import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Star,
  Calendar,
  Clock,
  Users,
  UserCheck,
  UserX,
  Briefcase,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { StatCard } from '@/components/common/StatCard';

const staffMembers = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    department: 'Cardiology',
    email: 'sarah.johnson@medcore.com',
    phone: '+1 (555) 123-4567',
    status: 'on-duty',
    avatar: '',
    rating: 4.9,
    patients: 45,
    experience: '12 years',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Neurologist',
    department: 'Neurology',
    email: 'michael.chen@medcore.com',
    phone: '+1 (555) 234-5678',
    status: 'on-duty',
    avatar: '',
    rating: 4.8,
    patients: 38,
    experience: '8 years',
  },
  {
    id: '3',
    name: 'Dr. Emily Davis',
    role: 'Pediatrician',
    department: 'Pediatrics',
    email: 'emily.davis@medcore.com',
    phone: '+1 (555) 345-6789',
    status: 'off-duty',
    avatar: '',
    rating: 4.95,
    patients: 62,
    experience: '15 years',
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Head Nurse',
    department: 'Emergency',
    email: 'james.wilson@medcore.com',
    phone: '+1 (555) 456-7890',
    status: 'on-duty',
    avatar: '',
    rating: 4.7,
    patients: 28,
    experience: '10 years',
  },
  {
    id: '5',
    name: 'Dr. Amanda Roberts',
    role: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    email: 'amanda.roberts@medcore.com',
    phone: '+1 (555) 567-8901',
    status: 'on-leave',
    avatar: '',
    rating: 4.85,
    patients: 34,
    experience: '11 years',
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    role: 'Radiologist',
    department: 'Radiology',
    email: 'lisa.thompson@medcore.com',
    phone: '+1 (555) 678-9012',
    status: 'on-duty',
    avatar: '',
    rating: 4.6,
    patients: 52,
    experience: '7 years',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'on-duty':
      return 'bg-success/10 text-success border-success/20';
    case 'off-duty':
      return 'bg-muted text-muted-foreground border-muted';
    case 'on-leave':
      return 'bg-warning/10 text-warning border-warning/20';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'on-duty':
      return 'On Duty';
    case 'off-duty':
      return 'Off Duty';
    case 'on-leave':
      return 'On Leave';
    default:
      return status;
  }
};

const Staff = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff Directory</h1>
          <p className="text-muted-foreground mt-1">Manage and view all staff members</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Staff Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Staff"
          value="248"
          change={5}
          changeLabel="this month"
          icon={<Users className="h-6 w-6" />}
          variant="primary"
        />
        <StatCard
          title="On Duty"
          value="186"
          icon={<UserCheck className="h-6 w-6" />}
          variant="success"
        />
        <StatCard
          title="Off Duty"
          value="42"
          icon={<UserX className="h-6 w-6" />}
        />
        <StatCard
          title="On Leave"
          value="20"
          icon={<Briefcase className="h-6 w-6" />}
          variant="warning"
        />
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search staff by name, role, or department..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {staffMembers.map((staff) => (
          <Card key={staff.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={staff.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{staff.name}</h3>
                    <p className="text-sm text-muted-foreground">{staff.role}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuItem>View Schedule</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className={getStatusColor(staff.status)}>
                  {getStatusLabel(staff.status)}
                </Badge>
                <Badge variant="secondary">{staff.department}</Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{staff.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{staff.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{staff.experience} experience</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-warning fill-warning" />
                  <span className="font-medium">{staff.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {staff.patients} patients
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Staff;
