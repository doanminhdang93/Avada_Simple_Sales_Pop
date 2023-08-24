import { Labelled, LegacyStack, Text } from "@shopify/polaris";
import React from "react";
import "../styles/desktopPositionInput.css";

const defaultOptions = [
  { label: "Bottom left", value: "bottom-left" },
  { label: "Bottom right", value: "bottom-right" },
  { label: "Top left", value: "top-left" },
  { label: "Top right", value: "top-right" },
];

const DesktopPositionInput = ({
  label,
  value,
  onChange,
  options = defaultOptions,
}) => {
  return (
    <div>
      <Text color="subdued">Desktop Position</Text>
      <Labelled label={label}>
        <LegacyStack>
          {options.map((option, key) => (
            <div
              key={key}
              className={`Avada-DesktopPosition ${
                value === option.value ? "Avada-DesktopPosition--selected" : ""
              }`}
              onClick={() => onChange(option.value)}
            >
              <div
                className={`Avada-DesktopPosition__Input Avada-DesktopPosition__Input--${option.value}`}
              ></div>
            </div>
          ))}
        </LegacyStack>
        <Text color="subdued">
          The display position of the pop on your website
        </Text>
      </Labelled>
    </div>
  );
};

export default DesktopPositionInput;
