import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Patients from "./pages/Patients";
import PatientRegister from "./pages/PatientRegister";
import Appointments from "./pages/Appointments";
import Staff from "./pages/Staff";
import EMR from "./pages/EMR";
import Prescriptions from "./pages/Prescriptions";
import LabOrders from "./pages/LabOrders";
import Radiology from "./pages/Radiology";
import Beds from "./pages/Beds";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/register" element={<PatientRegister />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/scheduling" element={<Staff />} />
          <Route path="/staff/performance" element={<Staff />} />
          <Route path="/emr" element={<EMR />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/lab-orders" element={<LabOrders />} />
          <Route path="/radiology" element={<Radiology />} />
          <Route path="/radiology/orders" element={<Radiology />} />
          <Route path="/radiology/worklist" element={<Radiology />} />
          <Route path="/radiology/viewer" element={<Radiology />} />
          <Route path="/radiology/reports" element={<Radiology />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analytics/reports" element={<Analytics />} />
          <Route path="/analytics/predictions" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pharmacy/dispensing" element={<Prescriptions />} />
          <Route path="/pharmacy/inventory" element={<Prescriptions />} />
          <Route path="/pharmacy/billing" element={<Prescriptions />} />
          <Route path="/lab/orders" element={<LabOrders />} />
          <Route path="/lab/results" element={<LabOrders />} />
          <Route path="/lab/inventory" element={<LabOrders />} />
          <Route path="/emergency" element={<Beds />} />
          <Route path="/emergency-dashboard" element={<Beds />} />
          <Route path="/procedures" element={<Radiology />} />
          <Route path="/surgery/schedule" element={<Radiology />} />
          <Route path="/surgery/checklist" element={<Radiology />} />
          <Route path="/therapy/physio" element={<Settings />} />
          <Route path="/therapy/nutrition" element={<Settings />} />
          <Route path="/therapy/fitness" element={<Settings />} />
          <Route path="/finance/billing" element={<Analytics />} />
          <Route path="/finance/insurance" element={<Analytics />} />
          <Route path="/finance/reports" element={<Analytics />} />
          <Route path="/admin/users" element={<Settings />} />
          <Route path="/admin/compliance" element={<Settings />} />
          <Route path="/admin/audit" element={<Settings />} />
          <Route path="/help" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
