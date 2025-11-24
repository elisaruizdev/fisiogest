export interface DashboardStats {
  sessionsToday: {
    total: number;
    completed: number;
  };
  sessionsNextWeek: number;
  activePatients: number;
  todayAppointments: TodayAppointment[];
}

export interface TodayAppointment {
  id: string;
  appointment_date: Date | string;
  duration: number;
  session_number: number;
  status: string;
  notes: string | null;
  patient: {
    id: string;
    name: string;
    surname: string;
    second_surname: string | null;
  };
  physio: {
    id_physio: number;
    name: string;
    surname: string;
    second_surname: string | null;
  };
}
