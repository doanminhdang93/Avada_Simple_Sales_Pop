import { LegacyStack, ResourceItem, Text } from "@shopify/polaris";
import React from "react";
import NotificationPopup from "./NotificationPopup";

const NotificationsItem = ({ item }) => {
  const { id, productImage, productName, author } = item;
  //   console.log(item);
  return (
    <ResourceItem
      id={id}
      accessibilityLabel={`View details for ${productName}`}
      persistActions
    >
      <LegacyStack>
        <LegacyStack.Item fill>
          <NotificationPopup
            id={id}
            productName={productName}
            productImage={productImage}
            author={author}
          ></NotificationPopup>
        </LegacyStack.Item>

        <LegacyStack.Item>
          <Text fontWeight="semibold" breakWord>
            From March 8, 2021
          </Text>
        </LegacyStack.Item>
      </LegacyStack>
    </ResourceItem>
  );
};

export default NotificationsItem;
