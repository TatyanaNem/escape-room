import { TBookingFormInputs } from '../types/booking-form-inputs';
import { TNewQuestData } from '../types/new-quest-data';

export function adaptToServer (data: TBookingFormInputs, id: string): TNewQuestData {
  const adaptedData = {
    'date': data.date,
    'time': data.time,
    'contactPerson': data.name,
    'phone': data.tel,
    'withChildren': data.children,
    'peopleCount': Number(data.person),
    'placeId': id,
  };

  return adaptedData;
}
