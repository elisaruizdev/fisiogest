interface TabItem {
  label: string;
  id: 'clinical' | 'treatments' | 'sessions';
  icon: string;
}

export interface Patient {
  id: string;
  name: string;
  surname: string;
  second_surname: string | null;
  phone: string;
  email: string;
  address: string | null;
  city: string | null;
  zip: string | null;
  identifier: string;
  birthdate: Date | string;
  gender: string;
  medical_history: string | null;
  consultation_reason: string | null;
  health_insurance: string | null;
  emergency_contact: string | null;
  status: string;
  discharge_reason: string | null;
  discharge_date: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface CreatePatient {
  name: string;
  surname: string;
  second_surname?: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  zip?: string;
  identifier: string;
  birthdate: string;
  gender: string;
  medical_history?: string;
  consultation_reason?: string;
  health_insurance?: string;
  emergency_contact?: string;
}