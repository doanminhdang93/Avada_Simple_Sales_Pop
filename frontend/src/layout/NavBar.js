import { Navigation } from "@shopify/polaris";
import React from "react";
import {
  HomeFilledMinor,
  NotificationFilledMajor,
  SettingsFilledMinor,
} from "@shopify/polaris-icons";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Home",
            selected: location.pathname === "/",
            icon: HomeFilledMinor,
            onClick: () => {
              navigate("/");
            },
          },
          {
            label: "Notifications",
            selected: location.pathname === "/notifications",
            icon: NotificationFilledMajor,
            onClick: () => {
              navigate("/notifications");
            },
          },
          {
            label: "Settings",
            icon: SettingsFilledMinor,
            selected: location.pathname === "/settings",
            onClick: () => {
              navigate("/settings");
            },
          },
        ]}
      >
        <Navigation.Item label="Home" url="/" selected={true} />
        <Navigation.Item
          label="Notifications"
          url="/notifications"
          selected={true}
        />
      </Navigation.Section>
    </Navigation>
  );
};

export default NavBar;
