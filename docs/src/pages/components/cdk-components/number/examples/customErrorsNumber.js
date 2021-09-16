import { DxcNumber } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("CHANGE error") : setErrorMessage(null);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("BLUR error") : setErrorMessage(null);
  };

  return (
    <DxcNumber
      label="Min 5, max 20, step 5"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      min={5}
      max={20}
      step={5}
      margin="medium"
      error={errorMessage}
    />
  );
}`;

const scope = {
  DxcNumber,
  useState,
};

export default { code, scope };
