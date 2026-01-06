export interface Patient {
  id: string;
  mrn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  insurance: {
    provider: string;
    policyNumber: string;
    groupNumber?: string;
  };
  allergies: string[];
  bloodType?: string;
  status: 'active' | 'inactive' | 'deceased';
  registeredAt: string;
  lastVisit?: string;
  avatar?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  providerId: string;
  providerName: string;
  department: string;
  type: 'consultation' | 'follow-up' | 'procedure' | 'telemedicine' | 'emergency';
  status: 'scheduled' | 'confirmed' | 'checked-in' | 'in-progress' | 'completed' | 'cancelled' | 'no-show';
  date: string;
  startTime: string;
  endTime: string;
  reason: string;
  notes?: string;
  isTelemedicine: boolean;
}

export interface Provider {
  id: string;
  name: string;
  specialty: string;
  department: string;
  email: string;
  phone: string;
  avatar?: string;
  rating: number;
  availableSlots: number;
}

export interface VitalSigns {
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  heartRate: number;
  temperature: number;
  respiratoryRate: number;
  oxygenSaturation: number;
  weight?: number;
  height?: number;
  painLevel?: number;
  recordedAt: string;
}

export interface LabResult {
  id: string;
  patientId: string;
  testName: string;
  category: string;
  value: string;
  unit: string;
  referenceRange: string;
  status: 'pending' | 'in-progress' | 'completed' | 'critical';
  orderedBy: string;
  orderedAt: string;
  resultedAt?: string;
  isAbnormal: boolean;
}

export interface Medication {
  id: string;
  name: string;
  genericName: string;
  dosage: string;
  frequency: string;
  route: string;
  startDate: string;
  endDate?: string;
  prescribedBy: string;
  status: 'active' | 'discontinued' | 'completed';
  refillsRemaining: number;
}

export interface RadiologyOrder {
  id: string;
  patientId: string;
  patientName: string;
  modality: 'X-Ray' | 'CT' | 'MRI' | 'Ultrasound' | 'PET' | 'Mammography' | 'DEXA';
  bodyPart: string;
  indication: string;
  priority: 'routine' | 'urgent' | 'stat';
  status: 'ordered' | 'scheduled' | 'in-progress' | 'completed' | 'reported';
  orderedBy: string;
  orderedAt: string;
  scheduledAt?: string;
  completedAt?: string;
  findings?: string;
  impression?: string;
}
