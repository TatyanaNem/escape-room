import { HelmetProvider } from "react-helmet-async";
import HistoryRouter from "../history-router/history-router";
import browserHistory from "../../browser-history";
import { Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainScreen from "../../pages/main-screen/main-screen";
import ContactsScreen from "../../pages/contacts-screen/contacts-screen";
import LoginScreen from "../../pages/login-screen/login-screen";
import PrivateRoute from "../private-route/private-route";
import BookingScreen from "../../pages/private-pages/booking-screen/booking-screen";
import MyQuestsScreen from "../../pages/private-pages/my-quests-screen/my-quests-screen";
import Layout from "../layout/layout";
import { useAppSelector } from "../../hooks";
import { selectAuthStatus } from "../../store/user-process/selectors";
import QuestScreen from "../../pages/quest-screen/quest-screen";

export default function App() {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
        <Route path={AppRoute.Root} element={<Layout/>}>
          <Route
            index
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Contacts}
            element={<ContactsScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Quest}
            element={<QuestScreen />}
          />
          <Route
            path={AppRoute.Booking}
            element={<PrivateRoute authorizationStatus={authStatus}>
              <BookingScreen />
            </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.MyQuests}
            element={<PrivateRoute authorizationStatus={authStatus}>
              <MyQuestsScreen />
            </PrivateRoute>
            }
          />
          <Route
            path={'*'}
            element={<h1>404. Page not found</h1>}
          />
        </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
