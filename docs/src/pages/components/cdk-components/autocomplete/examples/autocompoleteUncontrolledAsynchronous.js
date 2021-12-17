import { V3DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  const countries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    
  ];
  function callbackFunc(newValue) {
    const result = new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          newValue
            ? countries.filter((option) =>
                option.toUpperCase().includes(newValue.toUpperCase())
              )
            : countries
        );
      }, 1000)
    );
    return result;
  }

  return (
    <V3DxcInputText
      label="Autocomplete"
      onChange={onChange}
      autocompleteOptions={callbackFunc}
      margin="medium"
    />
  );
}`;

const scope = {
  V3DxcInputText,
  useState,
};

export default { code, scope };
