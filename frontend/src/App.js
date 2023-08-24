import { AppProvider } from "@shopify/polaris";
import AppLayout from "./layout/AppLayout";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <AppProvider
        i18n={{
          Polaris: {
            ResourceList: {
              sortingLabel: "Sort by",
              showing: "Showing {itemsCount} {resource}",
              defaultItemPlural: "notifications",
              defaultItemSingular: "notification",
            },
            Common: {
              checkbox: "checkbox",
            },
          },
        }}
      >
        <Routes>
          <Route
            element={
              <AppLayout>
                <Outlet></Outlet>
              </AppLayout>
            }
          >
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/notifications"
              element={<NotificationsPage />}
            ></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
