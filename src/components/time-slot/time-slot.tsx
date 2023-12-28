import { memo } from 'react';
import { BookingDate } from '../../const';
import { TSlot } from '../../types/slot';

type TimeSlotProps = {
  day: BookingDate;
  slot: TSlot;
  onChange: () => void;
  onClick: (value: string) => void;
}

function TimeSlot({slot, day, onChange, onClick}: TimeSlotProps) {
  return (
    <label key={slot.time} className="custom-radio booking-form__date">
      <input
        type="radio"
        id={`${day}${slot.time.slice(0, 2)}h${slot.time.slice(3,5)}m`}
        name="date"
        required
        disabled={!slot.isAvailable}
        value={day}
        onChange={onChange}
      />
      <span
        className="custom-radio__label"
        onClick={() => onClick(slot.time)}
      >
        {slot.time}
      </span>
    </label>
  );
}

const MemoizedComponent = memo(TimeSlot);
export default MemoizedComponent;
