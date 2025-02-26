import React, { useState } from "react";
import {
  DxcButton,
  DxcDialog,
  DxcTextarea,
  DxcHeading,
  DxcAlert,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";
import { deepMerge } from "./utils";

const validateInputTheme = (json, customThemeSchema) => {
  let inputTheme = [];
  let errMessage = "";
  const isArrayIncluded = (array1, array2) =>
    Object.keys(array1).every((element) =>
      Object.keys(array2).includes(element)
    );

  try {
    inputTheme = JSON.parse(json);
    const inputComponentNames = Object.keys(inputTheme);
    const schemaComponentNames = Object.keys(customThemeSchema);

    inputComponentNames.forEach((componentName) => {
      const errorMessage =
        (!schemaComponentNames.includes(componentName) &&
          "Invalid component name.") ||
        (!isArrayIncluded(
          inputTheme[componentName],
          customThemeSchema[componentName]
        ) &&
          `Invalid theme input name in component ${componentName}.`);

      if (errorMessage) throw new Error(errorMessage);
    });
  } catch (e) {
    errMessage = e.name === "SyntaxError" ? "Invalid JSON input." : e.message;
  }
  return { inputTheme, errMessage };
};

const ImportDialog = ({
  customThemeSchema,
  setCustomTheme,
  setDialogVisible,
}) => {
  const [value, setValue] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
    if (validationErrorMessage !== "") setValidationErrorMessage("");
  };
  const closeDialog = () => {
    setDialogVisible(false);
    setValue("");
    setValidationErrorMessage("");
  };
  const validate = () => {
    const { inputTheme, errMessage } = validateInputTheme(
      value,
      customThemeSchema
    );

    if (errMessage === "") {
      setCustomTheme((prevTheme) => deepMerge({}, prevTheme, inputTheme));
      closeDialog();
    } else setValidationErrorMessage(errMessage);
  };

  return (
    <DxcDialog
      isCloseVisible={false}
      padding="xsmall"
      onBackgroundClick={closeDialog}
    >
      <DialogContainer>
        <DxcHeading
          text={"Import theme"}
          level={3}
          margin={{ bottom: "small" }}
          weight="normal"
        />
        <DxcTextarea
          label="Paste here your theme"
          value={value}
          onChange={onChange}
          size="fillParent"
          rows={14}
          margin={{ bottom: "small" }}
          error={validationErrorMessage !== ""}
        />
        {validationErrorMessage !== "" && (
          <DxcAlert
            type="error"
            mode="inline"
            inlineText={validationErrorMessage}
            size="fillParent"
            margin={{ bottom: "small" }}
          />
        )}
        <ButtonContainer>
          <DxcButton
            mode="primary"
            label="Import"
            onClick={validate}
            margin={{ right: "xsmall" }}
            disabled={validationErrorMessage !== "" || value === ""}
          />
          <DxcButton mode="text" label="Cancel" onClick={closeDialog} />
        </ButtonContainer>
      </DialogContainer>
    </DxcDialog>
  );
};

const DialogContainer = styled.div`
  margin: 3%;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ImportDialog;
