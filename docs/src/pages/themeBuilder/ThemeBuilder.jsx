import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcSidenav,
  DxcButton,
} from "@dxc-technology/halstack-react";
import defaultTheme from "./themes/DefaultTheme.json";
import advancedTheme from "./themes/AdvancedTheme.json";
import ComponentPreview from "./components/ComponentPreview";
import { downloadFile, makeReadableSidenav } from "./utils";
import Header from "../../common/Header";
import ThemeInputsConfig from "./components/ThemeInputsConfig";
import ImportDialog from "./ImportDialog";
import { useParams } from "react-router";
import defaultSchema from "./themes/schemas/Default.schema.json";
import advancedSchema from "./themes/schemas/Advanced.schema.json";
import exportIcon from "./images/ExportIcon";
import importIcon from "./images/ImportIcon";
import resetIcon from "./images/ResetIcon";

const ThemeBuilder = () => {
  const { type } = useParams();

  const [customTheme, setCustomTheme] = useState(
    type === "advancedTheme" ? advancedTheme : defaultTheme
  );
  const customThemeSchema =
    type === "advancedTheme" ? advancedSchema : defaultSchema;

  const [currentComponent, setCurrentComponent] = useState("accordion");
  const [isDialogVisible, setDialogVisible] = useState(false);

  const setComponentProperty = useCallback(
    (propertyName, propertyValue) => {
      setCustomTheme((prevTheme) => ({
        ...prevTheme,
        [currentComponent]: {
          ...prevTheme[currentComponent],
          [propertyName]: propertyValue,
        },
      }));
    },
    [currentComponent]
  );

  return (
    <DxcApplicationLayout>
      <DxcApplicationLayout.Header>
        <Header></Header>
      </DxcApplicationLayout.Header>
      <DxcApplicationLayout.SideNav
        title={<DxcSidenav.Title>Global theme actions</DxcSidenav.Title>}
      >
        <DxcSidenav.Section>
          <ButtonsContainer>
            <DxcButton
              mode="text"
              label="Reset"
              onClick={() => {
                setCustomTheme(
                  type === "advancedTheme" ? advancedTheme : defaultTheme
                );
              }}
              icon={resetIcon}
            />
            <DxcButton
              mode="secondary"
              label="Import"
              onClick={() => {
                setDialogVisible(true);
              }}
              margin={{ top: "xxsmall", bottom: "xxsmall" }}
              icon={importIcon}
            />
            {isDialogVisible && (
              <ImportDialog
                customThemeSchema={customThemeSchema}
                setCustomTheme={setCustomTheme}
                setDialogVisible={setDialogVisible}
              />
            )}
            <DxcButton
              mode="primary"
              label="Export"
              onClick={() => {
                downloadFile(customTheme);
              }}
              icon={exportIcon}
            />
          </ButtonsContainer>
          <DxcSidenav.Group title="Components">
            {Object.keys(
              type === "advancedTheme" ? advancedTheme : defaultTheme
            ).map((component, index) => (
              <DxcSidenav.Link
                key={`componentLink-${index}`}
                selected={currentComponent === component}
                onClick={() => {
                  setCurrentComponent(component);
                }}
              >
                {makeReadableSidenav(component)}
              </DxcSidenav.Link>
            ))}
          </DxcSidenav.Group>
        </DxcSidenav.Section>
      </DxcApplicationLayout.SideNav>
      <DxcApplicationLayout.Main>
        <MainContainer>
          <ComponentPreview
            customTheme={customTheme}
            componentId={currentComponent}
          />
          <ThemeInputsConfig
            componentInputs={customTheme[currentComponent]}
            componentInputsTypes={customThemeSchema[currentComponent]}
            onChangeCustomTheme={setComponentProperty}
          />
        </MainContainer>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

const MainContainer = styled.div`
  display: flex;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export default ThemeBuilder;
