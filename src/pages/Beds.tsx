import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bed,
  User,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  RefreshCw,
} from 'lucide-react';
import { StatCard } from '@/components/common/StatCard';
import { cn } from '@/lib/utils';

const wards = [
  {
    name: 'ICU',
    beds: [
      { id: 'ICU-01', status: 'occupied', patient: 'John Smith', admitDate: '2024-01-10' },
      { id: 'ICU-02', status: 'occupied', patient: 'Sarah Davis', admitDate: '2024-01-12' },
      { id: 'ICU-03', status: 'available' },
      { id: 'ICU-04', status: 'occupied', patient: 'Michael Brown', admitDate: '2024-01-14' },
      { id: 'ICU-05', status: 'maintenance' },
      { id: 'ICU-06', status: 'cleaning' },
    ],
  },
  {
    name: 'General Ward A',
    beds: [
      { id: 'GWA-01', status: 'occupied', patient: 'Emily Wilson', admitDate: '2024-01-08' },
      { id: 'GWA-02', status: 'available' },
      { id: 'GWA-03', status: 'available' },
      { id: 'GWA-04', status: 'occupied', patient: 'Robert Taylor', admitDate: '2024-01-11' },
      { id: 'GWA-05', status: 'occupied', patient: 'Lisa Anderson', admitDate: '2024-01-13' },
      { id: 'GWA-06', status: 'available' },
      { id: 'GWA-07', status: 'cleaning' },
      { id: 'GWA-08', status: 'available' },
    ],
  },
  {
    name: 'Emergency',
    beds: [
      { id: 'ER-01', status: 'occupied', patient: 'James Martin', admitDate: '2024-01-15' },
      { id: 'ER-02', status: 'occupied', patient: 'Anna White', admitDate: '2024-01-15' },
      { id: 'ER-03', status: 'available' },
      { id: 'ER-04', status: 'available' },
    ],
  },
];

const getBedColor = (status: string) => {
  switch (status) {
    case 'occupied':
      return 'bg-destructive/10 border-destructive/30 text-destructive';
    case 'available':
      return 'bg-success/10 border-success/30 text-success';
    case 'cleaning':
      return 'bg-warning/10 border-warning/30 text-warning';
    case 'maintenance':
      return 'bg-muted border-muted-foreground/30 text-muted-foreground';
    default:
      return 'bg-muted';
  }
};

const getBedIcon = (status: string) => {
  switch (status) {
    case 'occupied':
      return <User className="h-4 w-4" />;
    case 'available':
      return <CheckCircle2 className="h-4 w-4" />;
    case 'cleaning':
      return <RefreshCw className="h-4 w-4" />;
    case 'maintenance':
      return <Wrench className="h-4 w-4" />;
    default:
      return <Bed className="h-4 w-4" />;
  }
};

const Beds = () => {
  const totalBeds = wards.reduce((acc, ward) => acc + ward.beds.length, 0);
  const occupiedBeds = wards.reduce((acc, ward) => acc + ward.beds.filter(b => b.status === 'occupied').length, 0);
  const availableBeds = wards.reduce((acc, ward) => acc + ward.beds.filter(b => b.status === 'available').length, 0);

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bed Management</h1>
          <p className="text-muted-foreground mt-1">Monitor and manage bed availability across wards</p>
        </div>
        <Button className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Status
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Beds"
          value={totalBeds.toString()}
          icon={<Bed className="h-6 w-6" />}
          variant="primary"
        />
        <StatCard
          title="Occupied"
          value={occupiedBeds.toString()}
          icon={<User className="h-6 w-6" />}
          variant="destructive"
        />
        <StatCard
          title="Available"
          value={availableBeds.toString()}
          icon={<CheckCircle2 className="h-6 w-6" />}
          variant="success"
        />
        <StatCard
          title="Occupancy Rate"
          value={`${Math.round((occupiedBeds / totalBeds) * 100)}%`}
          icon={<Clock className="h-6 w-6" />}
          variant="info"
        />
      </div>

      {/* Legend */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-success/20 border border-success/30" />
              <span className="text-sm text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-destructive/20 border border-destructive/30" />
              <span className="text-sm text-muted-foreground">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-warning/20 border border-warning/30" />
              <span className="text-sm text-muted-foreground">Cleaning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted border border-muted-foreground/30" />
              <span className="text-sm text-muted-foreground">Maintenance</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wards */}
      <div className="space-y-6">
        {wards.map((ward) => (
          <Card key={ward.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" />
                {ward.name}
              </CardTitle>
              <CardDescription>
                {ward.beds.filter(b => b.status === 'available').length} of {ward.beds.length} beds available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {ward.beds.map((bed) => (
                  <div
                    key={bed.id}
                    className={cn(
                      'p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md',
                      getBedColor(bed.status)
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{bed.id}</span>
                      {getBedIcon(bed.status)}
                    </div>
                    {bed.patient && (
                      <p className="text-xs truncate">{bed.patient}</p>
                    )}
                    {bed.status === 'available' && (
                      <p className="text-xs">Ready</p>
                    )}
                    {bed.status === 'cleaning' && (
                      <p className="text-xs">In Progress</p>
                    )}
                    {bed.status === 'maintenance' && (
                      <p className="text-xs">Under Repair</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Beds;
