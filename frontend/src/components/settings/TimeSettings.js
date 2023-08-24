/* eslint-disable react-hooks/exhaustive-deps */
import { HorizontalStack, RangeSlider, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";

const TimeSettings = () => {
  const [displayDuration, setDisplayDuration] = useState(5);
  const [gapBetween2Pops, setGapBetween2Pops] = useState(2);
  const [timeBeforeFirstPop, setTimeBeforeFirstPop] = useState(10);
  const [maxOfPopups, setMaxOfPopups] = useState(10);

  const handleDisplayDuration = useCallback((value) => {
    setDisplayDuration(value);
  });

  const handleGapBetween2Pops = useCallback((value) => {
    setGapBetween2Pops(value);
  });

  const handleTimeBeforeFirstPop = useCallback((value) => {
    setTimeBeforeFirstPop(value);
  });

  const handleMaxOfPopups = useCallback((value) => {
    setMaxOfPopups(value);
  });

  return (
    <HorizontalStack gap={10}>
      <RangeSliderComponent
        label="Display duration"
        minValue={0}
        maxValue={100}
        value={displayDuration}
        onChange={handleDisplayDuration}
        suffix="second(s)"
      ></RangeSliderComponent>

      <RangeSliderComponent
        label="Time before the first pop"
        minValue={0}
        maxValue={100}
        value={timeBeforeFirstPop}
        onChange={handleTimeBeforeFirstPop}
        suffix="second(s)"
      ></RangeSliderComponent>

      <RangeSliderComponent
        label="Gap time between two pops"
        minValue={0}
        maxValue={100}
        value={gapBetween2Pops}
        onChange={handleGapBetween2Pops}
        suffix="second(s)"
      ></RangeSliderComponent>

      <RangeSliderComponent
        label="Maximum of popups"
        minValue={0}
        maxValue={80}
        value={maxOfPopups}
        onChange={handleMaxOfPopups}
        suffix="pop(s)"
      ></RangeSliderComponent>
    </HorizontalStack>
  );
};

const RangeSliderComponent = ({
  label,
  minValue,
  maxValue,
  value,
  onChange,
  suffix,
}) => {
  return (
    <div style={{ width: "350px" }}>
      <RangeSlider
        output
        label={label}
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onChange}
        suffix={
          <div style={{ width: "112px" }}>
            <TextField
              value={`${value}`}
              min={minValue}
              max={maxValue}
              autoComplete="off"
              suffix={`${suffix}`}
            ></TextField>
          </div>
        }
      ></RangeSlider>
    </div>
  );
};

export default TimeSettings;
