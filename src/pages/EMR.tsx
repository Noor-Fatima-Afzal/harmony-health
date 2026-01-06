import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  FileText, 
  Activity, 
  Pill, 
  AlertCircle,
  Syringe,
  ClipboardList,
  Calendar,
  User,
} from 'lucide-react';

const EMR = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Electronic Medical Records</h1>
        <p className="text-muted-foreground mt-1">Access and manage patient medical records</p>
      </div>

      {/* Search */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search patient by name, ID, or phone number..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="flex items-center gap-4 pt-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Medical History</h3>
              <p className="text-sm text-muted-foreground">View records</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="flex items-center gap-4 pt-6">
            <div className="p-3 rounded-xl bg-success/10">
              <Activity className="h-6 w-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold">Vital Signs</h3>
              <p className="text-sm text-muted-foreground">Latest readings</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="flex items-center gap-4 pt-6">
            <div className="p-3 rounded-xl bg-info/10">
              <Pill className="h-6 w-6 text-info" />
            </div>
            <div>
              <h3 className="font-semibold">Medications</h3>
              <p className="text-sm text-muted-foreground">Active prescriptions</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="flex items-center gap-4 pt-6">
            <div className="p-3 rounded-xl bg-destructive/10">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-semibold">Allergies</h3>
              <p className="text-sm text-muted-foreground">View alerts</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Records */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Patient Records</CardTitle>
          <CardDescription>Recently accessed patient files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Patient #{1000 + i}</p>
                    <p className="text-sm text-muted-foreground">Last accessed: Today</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">View Record</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default EMR;
