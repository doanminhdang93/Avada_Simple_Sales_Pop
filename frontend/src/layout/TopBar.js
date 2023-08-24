import React from "react";
import { TopBar } from "@shopify/polaris";

const TopBarMarkup = () => {
  const userMenuMarkup = <TopBar.UserMenu name="Avada" initials="A" />;

  return <TopBar userMenu={userMenuMarkup} />;
};

export default TopBarMarkup;
