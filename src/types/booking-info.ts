import { TLocation } from './location';
import { TSlot } from './slot';

export type TBookingInfo = {
  id: string;
  location: TLocation;
  slots?: {
    today: TSlot[];
    tomorrow: TSlot[];
  };
}
