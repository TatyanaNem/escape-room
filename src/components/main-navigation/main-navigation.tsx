import { NavLink } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type MainNavigationProps = {
  authStatus: AuthorizationStatus;
}

export default function MainNavigation({authStatus}: MainNavigationProps): JSX.Element {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={AppRoute.Root}>Квесты</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={AppRoute.Contacts}>Контакты</NavLink>
        </li>
        {
          authStatus === AuthorizationStatus.Auth
            ? (
              <li className="main-nav__item">
                <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={AppRoute.MyQuests}>Мои бронирования</NavLink>
              </li>
            )
            : null
        }
      </ul>
    </nav>
  );
}
