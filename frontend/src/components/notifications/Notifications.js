import { LegacyCard, Page, Pagination, ResourceList } from "@shopify/polaris";
import React, { useState } from "react";
import NotificationsItem from "./NotificationsItem";

const Notifications = () => {
  const [sortValue, setSortValue] = useState("DATE_MODIFIED_DESC");
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: "notification",
    plural: "notifications",
  };
  const items = [
    {
      id: "112",
      productImage:
        "https://newphone15.com/wp-content/uploads/2023/04/apple-iphone-15-pro-max-1-500x429.png",
      productName: "Iphone 15 pro",
      author: "Avada",
    },
    {
      id: "113",
      productImage:
        "https://newphone15.com/wp-content/uploads/2023/04/apple-iphone-15-pro-max-1-500x429.png",
      productName: "Iphone 15 pro",
      author: "Avada",
    },
    {
      id: "114",
      productImage:
        "https://newphone15.com/wp-content/uploads/2023/04/apple-iphone-15-pro-max-1-500x429.png",
      productName: "Iphone 15 pro",
      author: "Avada",
    },
    {
      id: "115",
      productImage:
        "https://newphone15.com/wp-content/uploads/2023/04/apple-iphone-15-pro-max-1-500x429.png",
      productName: "Iphone 15 pro",
      author: "Avada",
    },
    {
      id: "116",
      productImage:
        "https://newphone15.com/wp-content/uploads/2023/04/apple-iphone-15-pro-max-1-500x429.png",
      productName: "Iphone 15 pro",
      author: "Avada",
    },
  ];

  return (
    <Page
      fullWidth
      title="Notifications"
      subtitle="List of sales notification from Shopify"
    >
      <LegacyCard>
        <ResourceList
          resourceName={resourceName}
          items={items}
          selectable
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          sortValue={sortValue}
          renderItem={(item) => <NotificationsItem item={item} />}
          promotedBulkActions={[
            {
              content: "Delete",
            },
          ]}
          sortOptions={[
            { label: "Newest update", value: "DATE_MODIFIED_DESC" },
            { label: "Oldest update", value: "DATE_MODIFIED_ASC" },
          ]}
          onSortChange={(selected) => {
            setSortValue(selected);
            // console.log(`Sort option changed to ${selected}.`);
          }}
        ></ResourceList>
      </LegacyCard>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
          marginBottom: "100px",
          justifyContent: "center",
        }}
      >
        <Pagination
          hasPrevious
          onPrevious={() => {
            //   console.log("Previous");
          }}
          hasNext
          onNext={() => {
            //   console.log("Next");
          }}
        />
      </div>
    </Page>
  );
};

export default Notifications;
