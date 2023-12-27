import { BookingDate } from '../const';

export type TNewQuestData = {
  date: BookingDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
  }
