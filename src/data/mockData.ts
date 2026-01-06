import { Patient, Appointment, Provider, LabResult, Medication, RadiologyOrder } from '@/types/healthcare';

export const mockPatients: Patient[] = [
  {
    id: '1',
    mrn: 'MRN-2024-001',
    firstName: 'John',
    lastName: 'Anderson',
    dateOfBirth: '1985-03-15',
    gender: 'male',
    email: 'john.anderson@email.com',
    phone: '(555) 123-4567',
    address: {
      street: '123 Main Street',
      city: 'Boston',
      state: 'MA',
      zipCode: '02101'
    },
    emergencyContact: {
      name: 'Mary Anderson',
      relationship: 'Spouse',
      phone: '(555) 123-4568'
    },
    insurance: {
      provider: 'Blue Cross Blue Shield',
      policyNumber: 'BCBS-123456789',
      groupNumber: 'GRP-001'
    },
    allergies: ['Penicillin', 'Sulfa drugs'],
    bloodType: 'A+',
    status: 'active',
    registeredAt: '2023-01-15',
    lastVisit: '2024-01-05'
  },
  {
    id: '2',
    mrn: 'MRN-2024-002',
    firstName: 'Emily',
    lastName: 'Chen',
    dateOfBirth: '1992-07-22',
    gender: 'female',
    email: 'emily.chen@email.com',
    phone: '(555) 234-5678',
    address: {
      street: '456 Oak Avenue',
      city: 'Cambridge',
      state: 'MA',
      zipCode: '02139'
    },
    emergencyContact: {
      name: 'David Chen',
      relationship: 'Brother',
      phone: '(555) 234-5679'
    },
    insurance: {
      provider: 'Aetna',
      policyNumber: 'AET-987654321'
    },
    allergies: [],
    bloodType: 'O-',
    status: 'active',
    registeredAt: '2023-06-20',
    lastVisit: '2024-01-03'
  },
  {
    id: '3',
    mrn: 'MRN-2024-003',
    firstName: 'Michael',
    lastName: 'Williams',
    dateOfBirth: '1978-11-08',
    gender: 'male',
    email: 'michael.w@email.com',
    phone: '(555) 345-6789',
    address: {
      street: '789 Elm Road',
      city: 'Somerville',
      state: 'MA',
      zipCode: '02144'
    },
    emergencyContact: {
      name: 'Susan Williams',
      relationship: 'Wife',
      phone: '(555) 345-6790'
    },
    insurance: {
      provider: 'United Healthcare',
      policyNumber: 'UHC-456789012'
    },
    allergies: ['Aspirin', 'Ibuprofen', 'Codeine'],
    bloodType: 'B+',
    status: 'active',
    registeredAt: '2022-09-10',
    lastVisit: '2024-01-06'
  },
  {
    id: '4',
    mrn: 'MRN-2024-004',
    firstName: 'Sarah',
    lastName: 'Johnson',
    dateOfBirth: '1990-04-30',
    gender: 'female',
    email: 'sarah.j@email.com',
    phone: '(555) 456-7890',
    address: {
      street: '321 Pine Street',
      city: 'Boston',
      state: 'MA',
      zipCode: '02102'
    },
    emergencyContact: {
      name: 'Robert Johnson',
      relationship: 'Father',
      phone: '(555) 456-7891'
    },
    insurance: {
      provider: 'Cigna',
      policyNumber: 'CIG-789012345'
    },
    allergies: ['Latex'],
    bloodType: 'AB+',
    status: 'active',
    registeredAt: '2023-11-01',
    lastVisit: '2024-01-04'
  },
  {
    id: '5',
    mrn: 'MRN-2024-005',
    firstName: 'Robert',
    lastName: 'Martinez',
    dateOfBirth: '1965-09-12',
    gender: 'male',
    email: 'robert.m@email.com',
    phone: '(555) 567-8901',
    address: {
      street: '654 Cedar Lane',
      city: 'Brookline',
      state: 'MA',
      zipCode: '02445'
    },
    emergencyContact: {
      name: 'Maria Martinez',
      relationship: 'Wife',
      phone: '(555) 567-8902'
    },
    insurance: {
      provider: 'Medicare',
      policyNumber: 'MCR-012345678'
    },
    allergies: ['Morphine'],
    bloodType: 'O+',
    status: 'active',
    registeredAt: '2021-03-15',
    lastVisit: '2024-01-02'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'John Anderson',
    providerId: 'doc-1',
    providerName: 'Dr. Sarah Chen',
    department: 'Cardiology',
    type: 'consultation',
    status: 'scheduled',
    date: '2024-01-08',
    startTime: '09:00',
    endTime: '09:30',
    reason: 'Annual cardiac checkup',
    isTelemedicine: false
  },
  {
    id: '2',
    patientId: '2',
    patientName: 'Emily Chen',
    providerId: 'doc-2',
    providerName: 'Dr. James Wilson',
    department: 'Internal Medicine',
    type: 'follow-up',
    status: 'confirmed',
    date: '2024-01-08',
    startTime: '10:00',
    endTime: '10:30',
    reason: 'Diabetes follow-up',
    isTelemedicine: false
  },
  {
    id: '3',
    patientId: '3',
    patientName: 'Michael Williams',
    providerId: 'doc-1',
    providerName: 'Dr. Sarah Chen',
    department: 'Cardiology',
    type: 'telemedicine',
    status: 'scheduled',
    date: '2024-01-08',
    startTime: '11:00',
    endTime: '11:30',
    reason: 'Blood pressure monitoring',
    isTelemedicine: true
  },
  {
    id: '4',
    patientId: '4',
    patientName: 'Sarah Johnson',
    providerId: 'doc-3',
    providerName: 'Dr. Maria Garcia',
    department: 'Orthopedics',
    type: 'procedure',
    status: 'checked-in',
    date: '2024-01-08',
    startTime: '14:00',
    endTime: '15:00',
    reason: 'Knee injection',
    isTelemedicine: false
  },
  {
    id: '5',
    patientId: '5',
    patientName: 'Robert Martinez',
    providerId: 'doc-4',
    providerName: 'Dr. David Kim',
    department: 'Pulmonology',
    type: 'consultation',
    status: 'in-progress',
    date: '2024-01-08',
    startTime: '15:30',
    endTime: '16:00',
    reason: 'COPD management',
    isTelemedicine: false
  }
];

export const mockProviders: Provider[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Chen',
    specialty: 'Cardiology',
    department: 'Cardiology',
    email: 'sarah.chen@hospital.com',
    phone: '(555) 100-0001',
    rating: 4.9,
    availableSlots: 5
  },
  {
    id: 'doc-2',
    name: 'Dr. James Wilson',
    specialty: 'Internal Medicine',
    department: 'Internal Medicine',
    email: 'james.wilson@hospital.com',
    phone: '(555) 100-0002',
    rating: 4.7,
    availableSlots: 8
  },
  {
    id: 'doc-3',
    name: 'Dr. Maria Garcia',
    specialty: 'Orthopedics',
    department: 'Orthopedics',
    email: 'maria.garcia@hospital.com',
    phone: '(555) 100-0003',
    rating: 4.8,
    availableSlots: 3
  },
  {
    id: 'doc-4',
    name: 'Dr. David Kim',
    specialty: 'Pulmonology',
    department: 'Pulmonology',
    email: 'david.kim@hospital.com',
    phone: '(555) 100-0004',
    rating: 4.6,
    availableSlots: 6
  },
  {
    id: 'doc-5',
    name: 'Dr. Lisa Thompson',
    specialty: 'Neurology',
    department: 'Neurology',
    email: 'lisa.thompson@hospital.com',
    phone: '(555) 100-0005',
    rating: 4.9,
    availableSlots: 4
  }
];

export const mockLabResults: LabResult[] = [
  {
    id: 'lab-1',
    patientId: '1',
    testName: 'Complete Blood Count (CBC)',
    category: 'Hematology',
    value: '14.5',
    unit: 'g/dL',
    referenceRange: '12.0-17.5',
    status: 'completed',
    orderedBy: 'Dr. Sarah Chen',
    orderedAt: '2024-01-05',
    resultedAt: '2024-01-06',
    isAbnormal: false
  },
  {
    id: 'lab-2',
    patientId: '1',
    testName: 'Glucose, Fasting',
    category: 'Chemistry',
    value: '128',
    unit: 'mg/dL',
    referenceRange: '70-100',
    status: 'completed',
    orderedBy: 'Dr. James Wilson',
    orderedAt: '2024-01-05',
    resultedAt: '2024-01-06',
    isAbnormal: true
  },
  {
    id: 'lab-3',
    patientId: '2',
    testName: 'HbA1c',
    category: 'Chemistry',
    value: '7.2',
    unit: '%',
    referenceRange: '<5.7',
    status: 'completed',
    orderedBy: 'Dr. James Wilson',
    orderedAt: '2024-01-03',
    resultedAt: '2024-01-04',
    isAbnormal: true
  },
  {
    id: 'lab-4',
    patientId: '3',
    testName: 'Lipid Panel',
    category: 'Chemistry',
    value: '245',
    unit: 'mg/dL',
    referenceRange: '<200',
    status: 'critical',
    orderedBy: 'Dr. Sarah Chen',
    orderedAt: '2024-01-06',
    resultedAt: '2024-01-06',
    isAbnormal: true
  }
];

export const mockMedications: Medication[] = [
  {
    id: 'med-1',
    name: 'Lisinopril',
    genericName: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    route: 'Oral',
    startDate: '2023-06-15',
    prescribedBy: 'Dr. Sarah Chen',
    status: 'active',
    refillsRemaining: 3
  },
  {
    id: 'med-2',
    name: 'Metformin',
    genericName: 'Metformin HCl',
    dosage: '500mg',
    frequency: 'Twice daily',
    route: 'Oral',
    startDate: '2023-08-01',
    prescribedBy: 'Dr. James Wilson',
    status: 'active',
    refillsRemaining: 2
  },
  {
    id: 'med-3',
    name: 'Atorvastatin',
    genericName: 'Atorvastatin Calcium',
    dosage: '20mg',
    frequency: 'Once daily at bedtime',
    route: 'Oral',
    startDate: '2023-09-10',
    prescribedBy: 'Dr. Sarah Chen',
    status: 'active',
    refillsRemaining: 5
  }
];

export const mockRadiologyOrders: RadiologyOrder[] = [
  {
    id: 'rad-1',
    patientId: '1',
    patientName: 'John Anderson',
    modality: 'CT',
    bodyPart: 'Chest',
    indication: 'Evaluate for pulmonary nodules',
    priority: 'routine',
    status: 'completed',
    orderedBy: 'Dr. David Kim',
    orderedAt: '2024-01-02',
    scheduledAt: '2024-01-04',
    completedAt: '2024-01-04',
    findings: 'No acute pulmonary abnormality. Small benign-appearing granuloma in the right lower lobe.',
    impression: 'Negative for malignancy. Recommend follow-up CT in 12 months.'
  },
  {
    id: 'rad-2',
    patientId: '4',
    patientName: 'Sarah Johnson',
    modality: 'MRI',
    bodyPart: 'Right Knee',
    indication: 'Evaluate for meniscal tear',
    priority: 'urgent',
    status: 'scheduled',
    orderedBy: 'Dr. Maria Garcia',
    orderedAt: '2024-01-05',
    scheduledAt: '2024-01-08'
  },
  {
    id: 'rad-3',
    patientId: '5',
    patientName: 'Robert Martinez',
    modality: 'X-Ray',
    bodyPart: 'Chest',
    indication: 'Shortness of breath, rule out pneumonia',
    priority: 'stat',
    status: 'in-progress',
    orderedBy: 'Dr. David Kim',
    orderedAt: '2024-01-06'
  }
];

export const dashboardStats = {
  totalPatients: 1247,
  todayAppointments: 42,
  pendingLabResults: 18,
  criticalAlerts: 3,
  bedOccupancy: 78,
  averageWaitTime: 12,
  revenueToday: 45678,
  patientSatisfaction: 4.7
};
