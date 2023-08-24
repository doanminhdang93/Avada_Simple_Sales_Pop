import React, { useCallback, useState } from "react";
import {
  HorizontalStack,
  LegacyCard,
  LegacyTabs,
  Page,
} from "@shopify/polaris";
import NotificationPopup from "../notifications/NotificationPopup";
import DisplaySettings from "./DisplaySettings";
import TriggersSettings from "./TriggersSettings";

const Settings = () => {
  const item = {
    id: "112",
    productImage:
      "https://newphone15.com/wp-content/uploads/2023/04/apple-iphone-15-pro-max-1-500x429.png",
    productName: "Iphone 15 pro",
    author: "Avada",
  };
  const primaryAction = {
    content: "Save",
    onAction: () => {},
  };
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  const tabs = [
    {
      id: "display-settings",
      content: "Display",
    },
    {
      id: "triggers-settings",
      content: "Triggers",
    },
  ];
  return (
    <Page
      fullWidth
      title="Settings"
      subtitle="Decide how your notifications will display"
      primaryAction={primaryAction}
    >
      <div style={{ marginTop: "20px" }}>
        <HorizontalStack gap={6}>
          <NotificationPopup
            id={item.id}
            productImage={item.productImage}
            productName={item.productName}
            author={item.author}
          ></NotificationPopup>
          <div style={{ width: "65%" }}>
            <LegacyCard>
              <LegacyTabs
                tabs={tabs}
                selected={selected}
                onSelect={handleTabChange}
              >
                <LegacyCard.Section>
                  {selected === 0 && <DisplaySettings />}
                  {selected === 1 && <TriggersSettings />}
                </LegacyCard.Section>
              </LegacyTabs>
            </LegacyCard>
          </div>
        </HorizontalStack>
      </div>
    </Page>
  );
};

export default Settings;
