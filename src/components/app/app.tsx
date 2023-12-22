import { HelmetProvider } from "react-helmet-async";
import HistoryRouter from "../history-router/history-router";
import browserHistory from "../../browser-history";
import { Routes, Route } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import MainScreen from "../../pages/main-screen/main-screen";
import ContactsScreen from "../../pages/contacts-screen/contacts-screen";
import LoginScreen from "../../pages/login-screen/login-screen";
import PrivateRoute from "../private-route/private-route";
import BookingScreen from "../../pages/private-pages/booking-screen/booking-screen";
import MyBookingsScreen from "../../pages/private-pages/my-bookings-screen/my-bookings-screen";

export default function App() {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
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
            path={AppRoute.Booking}
            element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <BookingScreen />
            </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.MyBookings}
            element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyBookingsScreen />
            </PrivateRoute>
            }
          />
          <Route
            path={'*'}
            element={<h1>404. Page not found</h1>}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
