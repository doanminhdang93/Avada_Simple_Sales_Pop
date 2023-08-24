import { Checkbox, Text, VerticalStack } from "@shopify/polaris";
import React, { useState } from "react";
import DesktopPositionInput from "./DesktopPositionInput";
import TimeSettings from "./TimeSettings";

const DisplaySettings = () => {
  const [desktopPosition, setDesktopPosition] = useState("bottom-left");
  const [hideTimeAgo, setHideTimeAgo] = useState(false);
  const [truncateContentText, setTruncateContentText] = useState(false);

  const onChangeHandler = (value) => {
    setDesktopPosition(value);
  };
  return (
    <VerticalStack>
      <div style={{ marginTop: "10px", marginBottom: "15px" }}>
        <Text variant="headingMd" as="h6">
          APPEARANCE
        </Text>
      </div>
      <DesktopPositionInput
        value={desktopPosition}
        onChange={onChangeHandler}
      ></DesktopPositionInput>

      <div style={{ marginTop: "15px" }}>
        <Checkbox
          label="Hide time ago"
          checked={hideTimeAgo}
          onChange={() => setHideTimeAgo((prev) => !prev)}
        />
      </div>
      <div style={{ marginTop: "15px" }}>
        <Checkbox
          label="Truncate content text"
          checked={truncateContentText}
          onChange={() => setTruncateContentText((prev) => !prev)}
        />
      </div>
      <div style={{ marginLeft: "30px" }}>
        <Text color="subdued">
          If your product name is long for one line, it will be truncated to
          'Product na...'
        </Text>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "15px" }}>
        <Text variant="headingMd" as="h6">
          TIMING
        </Text>
      </div>
      <TimeSettings></TimeSettings>
    </VerticalStack>
  );
};

export default DisplaySettings;
