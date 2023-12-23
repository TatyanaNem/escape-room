import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainNavigation from '../main-navigation/main-navigation';
import SideNavigation from '../side-navigation/side-navigation';
import { useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/user-process/selectors';

export default function Header() {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link className="logo header__logo" to={AppRoute.Root} aria-label="Перейти на Главную">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <MainNavigation authStatus={authStatus}/>
        <SideNavigation authStatus={authStatus}/>
      </div>
    </header>
  );
}
