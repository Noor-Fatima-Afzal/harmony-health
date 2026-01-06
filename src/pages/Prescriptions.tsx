import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter,
  Pill,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MoreHorizontal,
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

const prescriptions = [
  { id: 'RX001', patient: 'John Smith', medication: 'Amoxicillin 500mg', dosage: '3x daily', status: 'active', prescribedBy: 'Dr. Johnson', date: '2024-01-15' },
  { id: 'RX002', patient: 'Sarah Davis', medication: 'Lisinopril 10mg', dosage: '1x daily', status: 'active', prescribedBy: 'Dr. Chen', date: '2024-01-14' },
  { id: 'RX003', patient: 'Michael Brown', medication: 'Metformin 850mg', dosage: '2x daily', status: 'pending', prescribedBy: 'Dr. Davis', date: '2024-01-14' },
  { id: 'RX004', patient: 'Emily Wilson', medication: 'Omeprazole 20mg', dosage: '1x daily', status: 'completed', prescribedBy: 'Dr. Johnson', date: '2024-01-13' },
  { id: 'RX005', patient: 'Robert Taylor', medication: 'Atorvastatin 40mg', dosage: '1x daily', status: 'active', prescribedBy: 'Dr. Roberts', date: '2024-01-12' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
    case 'pending':
      return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
    case 'completed':
      return <Badge className="bg-muted text-muted-foreground">Completed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const Prescriptions = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
          <p className="text-muted-foreground mt-1">Manage and track patient prescriptions</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Prescription
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Prescriptions"
          value="1,284"
          change={12}
          changeLabel="this month"
          icon={<Pill className="h-6 w-6" />}
          variant="primary"
        />
        <StatCard
          title="Active"
          value="856"
          icon={<CheckCircle2 className="h-6 w-6" />}
          variant="success"
        />
        <StatCard
          title="Pending Review"
          value="45"
          icon={<Clock className="h-6 w-6" />}
          variant="warning"
        />
        <StatCard
          title="Alerts"
          value="3"
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
              <Input placeholder="Search prescriptions..." className="pl-10" />
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
                <TableHead>ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Prescribed By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prescriptions.map((rx) => (
                <TableRow key={rx.id}>
                  <TableCell className="font-medium">{rx.id}</TableCell>
                  <TableCell>{rx.patient}</TableCell>
                  <TableCell>{rx.medication}</TableCell>
                  <TableCell>{rx.dosage}</TableCell>
                  <TableCell>{rx.prescribedBy}</TableCell>
                  <TableCell>{rx.date}</TableCell>
                  <TableCell>{getStatusBadge(rx.status)}</TableCell>
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

export default Prescriptions;
