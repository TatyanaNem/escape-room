import { BookingDate } from '../../const';
import { TSlot } from '../../types/slot';

type TimeSlotProps = {
  day: BookingDate;
  slot: TSlot;
}

export default function TimeSlot({slot, day}: TimeSlotProps) {
  return (
    <label key={slot.time} className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${day}${slot.time.slice(0, 2)}h${slot.time.slice(3,5)}m`}
        name="date"
        required
        disabled={slot.isAvailable}
        value={`${day}${slot.time.slice(0, 2)}h${slot.time.slice(3,5)}m`}
      />
      <span className="custom-radio__label">{slot.time}</span>
    </label>
  );
}
