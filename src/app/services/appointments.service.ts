import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IAppointment } from 'src/types/appointment.interface';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  appointments$ = new BehaviorSubject<IAppointment[]>([]);

  addAppointment(appointment: IAppointment): void {
    this.appointments$.next([...this.appointments$.getValue(), appointment]);
  }

  updateAppointment(appointment: IAppointment): void {
    const newAppoinments = this.appointments$.getValue().map((item) => {
      if (item.id === appointment.id) return appointment;

      return item;
    });

    this.appointments$.next(newAppoinments);
  }

  deleteAppointment(id: number): void {
    this.appointments$.next(
      this.appointments$
        .getValue()
        .filter((appointment) => appointment.id !== id)
    );
  }  

  getAppointment(id: number) {
    return this.appointments$
      .getValue()
      .find((appointment) => appointment.id !== id);
  }

  getAppointments() {
    return this.appointments$.getValue();
  }  
}
