import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { BookingDate } from '../../const';
import { TBookingInfo } from '../../types/booking-info';
import TimeSlot from '../time-slot/time-slot';
import styles from './booking-form.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postNewBooking } from '../../store/api-actions';
import { TBookingFormInputs } from '../../types/booking-form-inputs';
import { selectActiveQuest } from '../../store/data-process/selectors';
import { useEffect } from 'react';
import { adaptToServer } from '../../utils/quest';

type BookingFormProps = {
  currentPlace: TBookingInfo;
  questId: string;
}

export default function BookingForm ({currentPlace, questId}: BookingFormProps) {
  const dispatch = useAppDispatch();
  const activeQuest = useAppSelector(selectActiveQuest);
  const { register, handleSubmit, control, formState: { errors, isValid}, reset, setValue} = useForm<TBookingFormInputs>({
    mode: 'onChange',
    defaultValues: {
      'date': BookingDate.Today,
      'time': '',
      name: '',
      tel: '',
      person: '',
      children: false
    }
  });

  const onSubmit: SubmitHandler<TBookingFormInputs> = (data: TBookingFormInputs, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    const newQuestForBooking = adaptToServer(data, currentPlace.id);
    dispatch(postNewBooking({newQuestForBooking, id: questId}));
    reset();
  };

  function onClickHandler(value: string) {
    setValue('time', value);
  }

  useEffect(() => {
    register('time');
  }, [register]);

  if(!activeQuest) {
    return null;
  }

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={(event) =>
        void handleSubmit(onSubmit)(event)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {currentPlace?.slots?.today.map((item) => (
              <Controller
                key={item.time}
                name='date'
                control={control}
                render={({ field: { onChange } }) => (
                  <TimeSlot
                    day={BookingDate.Today}
                    key={item.time}
                    slot={item}
                    onChange={onChange}
                    onClick={onClickHandler}
                  />
                )}
              />
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {currentPlace?.slots?.tomorrow.map((item) => (
              <Controller
                key={item.time}
                name='date'
                control={control}
                render={({ field: { onChange } }) => (
                  <TimeSlot
                    day={BookingDate.Tomorrow}
                    key={item.time}
                    slot={item}
                    onChange={onChange}
                    onClick={onClickHandler}
                  />
                )}
              />
            ))}
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input
            {...register('name', {
              required: 'Введите Ваше имя',
              pattern: {
                value: /^[a-zA-Zа-яА-Я]+$/i,
                message: 'Имя должно седержать только буквы'
              },
              maxLength: {
                value: 15,
                message: 'Имя не должно быть более 15 символов'
              }
            })}
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            className={errors?.name ? styles.isInvalid : ''}
          />
          <div>{errors?.name && <span className={styles.error}>{errors?.name?.message}</span>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            {...register('tel', {
              required: 'Введите Ваш номер телефона',
              pattern: {
                value: /^[0-9]{10,}/,
                message: 'Введите номер телефона в верном формате'
              }
            })}
            type="tel"
            id="tel"
            name="tel"
            placeholder="+7 (000) 000-00-00"
            className={errors?.name ? styles.isInvalid : ''}
          />
          <div>{errors?.tel && <span className={styles.error}>{errors?.tel?.message}</span>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            {...register('person', {
              required: 'Введите количество участников',
              min: {
                value: activeQuest.peopleMinMax[0],
                message: `Не менее ${activeQuest.peopleMinMax[0]} участников`
              },
              max: {
                value: activeQuest.peopleMinMax[1],
                message: `Не более ${activeQuest.peopleMinMax[1]} участников`
              }
            })}
            type="number"
            id="person"
            name="person"
            placeholder="Количество участников"
          />
          <div>{errors?.person && <span className={styles.error}>{errors?.person?.message}</span>}</div>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            {...register('children')}
            type="checkbox"
            id="children"
            name="children"
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span><span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
        disabled={!isValid}
      >
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}
