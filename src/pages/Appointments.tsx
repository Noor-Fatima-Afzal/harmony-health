import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatusBadge } from '@/components/common/StatusBadge';
import { Calendar, Clock, Video, User, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockAppointments, mockProviders } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">Schedule and manage patient appointments</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">January 2024</CardTitle>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                <div key={d} className="text-muted-foreground font-medium py-1">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 31 }, (_, i) => (
                <button
                  key={i}
                  className={cn(
                    'h-8 w-8 rounded-lg text-sm transition-colors',
                    i + 1 === 8 ? 'bg-primary text-primary-foreground font-medium' : 'hover:bg-muted',
                    [6, 7, 13, 14, 20, 21, 27, 28].includes(i + 1) && 'text-muted-foreground'
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle>Today's Schedule</CardTitle>
            <Tabs defaultValue="list">
              <TabsList className="h-8">
                <TabsTrigger value="list" className="text-xs">List</TabsTrigger>
                <TabsTrigger value="timeline" className="text-xs">Timeline</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className={cn(
                    'flex items-center justify-between p-4 rounded-xl border transition-all hover:shadow-md',
                    apt.status === 'in-progress' && 'border-primary/50 bg-primary-light'
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center min-w-[60px]">
                      <p className="text-lg font-semibold">{apt.startTime}</p>
                      <p className="text-xs text-muted-foreground">{apt.endTime}</p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {apt.patientName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium flex items-center gap-2">
                        {apt.patientName}
                        {apt.isTelemedicine && <Video className="h-4 w-4 text-info" />}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {apt.department} • {apt.reason}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={apt.status} pulse={apt.status === 'in-progress'} />
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Appointments;
