import { Frame } from "@shopify/polaris";
import TopBarMarkup from "./TopBar";
import NavBar from "./NavBar";
import { logo } from "../config/theme";

const AppLayout = ({ children }) => {
  const logoTopBar = {
    width: 124,
    topBarSource: logo,
    contextualSaveBarSource: logo,
    url: "",
    accessibilityLabel: "Logo",
  };
  return (
    <Frame
      topBar={<TopBarMarkup />}
      logo={logoTopBar}
      navigation={<NavBar></NavBar>}
    >
      {children}
    </Frame>
  );
};

export default AppLayout;
