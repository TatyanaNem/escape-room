import { AuthorizationStatus } from "../../const";
import MainNavigation from "../main-navigation/main-navigation";
import SideNavigation from "../side-navigation/side-navigation";

export default function Header() {
  const authStatus = AuthorizationStatus.NoAuth;

  return (
    <header className="header">
        <div className="container container--size-l">
          <a className="logo header__logo" href="index.html" aria-label="Перейти на Главную">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </a>
          <MainNavigation authStatus={authStatus}/>
          <SideNavigation authStatus={authStatus}/>
        </div>
      </header>
  );
}
