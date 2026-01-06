import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter,
  Scan,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MoreHorizontal,
  Eye,
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

const radiologyOrders = [
  { id: 'RAD001', patient: 'John Smith', modality: 'X-Ray', bodyPart: 'Chest', priority: 'routine', status: 'completed', orderedBy: 'Dr. Johnson', date: '2024-01-15' },
  { id: 'RAD002', patient: 'Sarah Davis', modality: 'MRI', bodyPart: 'Brain', priority: 'urgent', status: 'in-progress', orderedBy: 'Dr. Chen', date: '2024-01-14' },
  { id: 'RAD003', patient: 'Michael Brown', modality: 'CT Scan', bodyPart: 'Abdomen', priority: 'routine', status: 'scheduled', orderedBy: 'Dr. Davis', date: '2024-01-14' },
  { id: 'RAD004', patient: 'Emily Wilson', modality: 'Ultrasound', bodyPart: 'Thyroid', priority: 'routine', status: 'completed', orderedBy: 'Dr. Johnson', date: '2024-01-13' },
  { id: 'RAD005', patient: 'Robert Taylor', modality: 'X-Ray', bodyPart: 'Spine', priority: 'stat', status: 'pending-report', orderedBy: 'Dr. Roberts', date: '2024-01-12' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
    case 'in-progress':
      return <Badge className="bg-info/10 text-info border-info/20">In Progress</Badge>;
    case 'scheduled':
      return <Badge className="bg-primary/10 text-primary border-primary/20">Scheduled</Badge>;
    case 'pending-report':
      return <Badge className="bg-warning/10 text-warning border-warning/20">Pending Report</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getModalityBadge = (modality: string) => {
  const colors: Record<string, string> = {
    'X-Ray': 'bg-blue-100 text-blue-700',
    'MRI': 'bg-purple-100 text-purple-700',
    'CT Scan': 'bg-green-100 text-green-700',
    'Ultrasound': 'bg-cyan-100 text-cyan-700',
  };
  return <Badge className={colors[modality] || 'bg-muted'}>{modality}</Badge>;
};

const Radiology = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Radiology</h1>
          <p className="text-muted-foreground mt-1">Manage imaging orders and view results</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Eye className="h-4 w-4" />
            PACS Viewer
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Order
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Today's Studies"
          value="48"
          change={12}
          changeLabel="vs yesterday"
          icon={<Scan className="h-6 w-6" />}
          variant="primary"
        />
        <StatCard
          title="Completed"
          value="32"
          icon={<CheckCircle2 className="h-6 w-6" />}
          variant="success"
        />
        <StatCard
          title="Pending Reports"
          value="11"
          icon={<FileText className="h-6 w-6" />}
          variant="warning"
        />
        <StatCard
          title="Critical Findings"
          value="2"
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
              <Input placeholder="Search radiology orders..." className="pl-10" />
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
                <TableHead>Modality</TableHead>
                <TableHead>Body Part</TableHead>
                <TableHead>Ordered By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {radiologyOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.patient}</TableCell>
                  <TableCell>{getModalityBadge(order.modality)}</TableCell>
                  <TableCell>{order.bodyPart}</TableCell>
                  <TableCell>{order.orderedBy}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" title="View Images">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
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

export default Radiology;
