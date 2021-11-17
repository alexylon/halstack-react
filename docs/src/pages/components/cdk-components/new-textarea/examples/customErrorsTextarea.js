import { DxcNewTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [firstValue, setFirstValue] = useState("");
  const [customLengthError, setCustomLengthError] = useState("");
  const onChangeFirst = ({ value, error }) => {
    setFirstValue(value);
    error ? setCustomLengthError("The input value does not have the right length.") : setCustomLengthError(null);
  };

  const [secondValue, setSecondValue] = useState("");
  const [customPatternError, setCustomPatternError] = useState("");
  const onChangeSecond = ({ value }) => {
    setSecondValue(value);
  };
  const onBlur = ({ value, error }) => {
    setSecondValue(value);
    error ? setCustomPatternError("The input value does not comply the allowed format.") : setCustomPatternError(null);
  };

  return (
    <div style={{ display: "flex" }}>
      <DxcNewTextarea
        label="Custom length error"
        helperText="Using onChange event for handling errors"
        value={firstValue}
        onChange={onChangeFirst}
        length={{ min: 5, max: 15 }}
        error={customLengthError}
        margin="medium"
        optional
      />
      <DxcNewTextarea
        label="Custom pattern error"
        helperText="Using onBlur event for handling errors"
        value={secondValue}
        onChange={onChangeSecond}
        onBlur={onBlur}
        pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
        error={customPatternError}
        margin="medium"
        optional
      />
    </div>
  );
}`;

const scope = {
  DxcNewTextarea,
  useState,
};

export default { code, scope };
