import { BookingDate } from '../const';

export type TBookingFormInputs = {
  date: BookingDate;
  time: string;
  name: string;
  tel: string;
  person: string;
  children: boolean;
}
