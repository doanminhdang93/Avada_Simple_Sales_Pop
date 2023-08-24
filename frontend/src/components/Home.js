import { Button, Card, HorizontalStack, Page, Text } from "@shopify/polaris";
import React, { useState } from "react";

const Home = () => {
  const [status, setStatus] = useState(false);
  return (
    <Page fullWidth title="Home">
      <Card>
        <HorizontalStack align="space-between" blockAlign="center">
          <Text>
            App status is{" "}
            <span style={{ fontWeight: "bold" }}>
              {status ? "disabled" : "enabled"}
            </span>
          </Text>
          <Button
            primary
            onClick={() => {
              setStatus((prev) => !prev);
            }}
          >
            {status ? "Enable" : "Disable"}
          </Button>
        </HorizontalStack>
      </Card>
    </Page>
  );
};

export default Home;
