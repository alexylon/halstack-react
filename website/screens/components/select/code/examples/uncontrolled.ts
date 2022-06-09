import {
  DxcSelect,
  DxcButton,
  DxcStack,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const selectRef = useRef();
  const handleSubmit = () => {
    const select = selectRef.current.getElementsByTagName("input")[0];
    console.log(select.value);
  };

  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];

  return (
    <DxcInset space="large">
      <DxcStack gutter="large" align="start">
        <DxcSelect
          label="Label"
          defaultValue="4"
          options={options}
          size="fillParent"
          ref={selectRef}
        />
        <DxcButton
          onClick={handleSubmit}
          label="Submit"
        />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcStack,
  DxcInset,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };