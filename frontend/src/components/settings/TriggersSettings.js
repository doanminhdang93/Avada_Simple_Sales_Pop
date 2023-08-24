import { Select, Text, TextField, VerticalStack } from "@shopify/polaris";
import React, { useState } from "react";

const TriggersSettings = () => {
  const [selected, setSelected] = useState("");
  const [excludedPages, setExcludedPages] = useState("");
  const [includedPages, setIncludedPages] = useState("");

  const handleSelectChange = (value) => {
    setSelected(value);
  };

  const handleExcludedPagesChange = (value) => {
    setExcludedPages(value);
  };
  const handleIncludedPagesChange = (value) => {
    setIncludedPages(value);
  };

  const options = [
    { label: "All pages", value: "All pages" },
    { label: "Specific page", value: "Specific pages" },
  ];
  return (
    <VerticalStack>
      <div style={{ marginTop: "25px" }}>
        <Text variant="headingMd" as="h6">
          PAGES RESTRICTION
        </Text>
      </div>
      <div style={{ marginTop: "10px", marginBottom: "25px" }}>
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selected}
        ></Select>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <TextField
          label="Included pages"
          value={includedPages}
          onChange={handleIncludedPagesChange}
          multiline={4}
          autoComplete="off"
        ></TextField>
        <Text color="subdued">
          Page URLs to show the pop-up (separated by new lines)
        </Text>
      </div>

      <div>
        <TextField
          label="Excluded pages"
          value={excludedPages}
          onChange={handleExcludedPagesChange}
          multiline={4}
          autoComplete="off"
        ></TextField>
        <Text color="subdued">
          Page URLs NOT to show the pop-up (separated by new lines)
        </Text>
      </div>
    </VerticalStack>
  );
};

export default TriggersSettings;
