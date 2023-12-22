import { NavLink } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import classNames from "classnames";

type SideNavigationProps = {
  authStatus: AuthorizationStatus;
}

export default function SideNavigation({authStatus}: SideNavigationProps): JSX.Element {
  return (
    <div className="header__side-nav">
      {
        authStatus === AuthorizationStatus.Auth
        ? <NavLink
          className={({isActive}) => classNames('btn', 'header__side-item', {
            'btn--accent': isActive
          })}
          to={AppRoute.Root}
          onClick={() => console.log('logout')}>
            Выйти
        </NavLink>
        : <NavLink
          className={({isActive}) => classNames('btn', 'header__side-item', {
            'btn--accent': isActive
          })}
          to={AppRoute.Login}>
            Вход
      </NavLink>
      }
      <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
    </div>
  );
}
