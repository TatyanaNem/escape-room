import { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { selectAuthStatus} from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus} from '../../const';
import { login } from '../../store/api-actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TLoginData } from '../../types/login-data';

type TFormInput = {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid}, reset } = useForm<TFormInput>({
    mode: 'onChange'
  });

  // const checkPassword = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).+$/.test(password);
  // const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // const isValid = checkEmail && checkPassword;

  const authStatus = useAppSelector(selectAuthStatus);
  // const loginSendingStatus = useAppSelector(selectLoginSendingStatus);

  // function onEmailChangeHandler (evt: React.ChangeEvent<HTMLInputElement>) {
  //   setEmail(evt.currentTarget.value);
  // }

  // function onPasswordChangeHandler (evt: React.ChangeEvent<HTMLInputElement>) {
  //   setPassword(evt.currentTarget.value);
  // }

  const onSubmit: SubmitHandler<TFormInput> = (data: TLoginData, event?: React.BaseSyntheticEvent) => {
    const {email, password} = data;
    event?.preventDefault();
    dispatch(login({email, password}));
    reset();
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp"
            srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
          />
          <img src="img/content/maniac/maniac-size-m.jpg"
            srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <form
            className="login-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={(event) =>
              void handleSubmit(onSubmit)(event)}
          >
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                  <input
                    {...register('email', {
                      required: 'Введите e-mail',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Введите валидный e-mail'
                      }
                    })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Адрес электронной почты"
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">
                      Пароль
                  </label>
                  <input
                    {...register('password', {
                      required: 'Введите пароль',
                      pattern: {
                        value: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).+$/,
                        message: 'Введите валидный e-mail'
                      },
                      minLength: {
                        value: 3,
                        message: 'Пароль должен быть минимум 3 символа'
                      },
                      maxLength: {
                        value: 15,
                        message: 'Пароль не может быть длиннее 15 символов'
                      }
                    })}
                    aria-invalid={errors.password ? 'true' : 'false'}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Пароль"
                  />
                  <div>{errors?.password && <span>{errors?.password?.message}</span>}</div>
                </div>
              </div>
              <button
                className="btn btn--accent btn--general login-form__submit"
                type="submit"
                disabled={!isValid}
              >
                Войти
              </button>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required
              />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">
                  правилами обработки персональных данных
                </a>
                &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}
