import React from "react";
import DxcProgressBar from "./ProgressBar";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "ProgressBar",
  component: DxcProgressBar,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Without labels" theme="light" level={4} />
      <DxcProgressBar value={50} showValue />
      <Title title="With helperText" theme="light" level={4} />
      <DxcProgressBar helperText="Helper text" value={24} showValue />
      <Title title="Without default value" theme="light" level={4} />
      <DxcProgressBar label="Loading..." showValue />
      <Title title="With full value" theme="light" level={4} />
      <DxcProgressBar label="Loading..." value={100} showValue />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xxsmall" margin="xxsmall" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xsmall" margin="xsmall" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcProgressBar label="Margin small" margin="small" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcProgressBar label="Margin medium" margin="medium" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcProgressBar label="Margin large" margin="large" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xlarge" margin="xlarge" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="XxLarge margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xxlarge" margin="xxlarge" value={50} showValue />
    </ExampleContainer>
  </>
);

export const ProgressBarOverlay = () => (
  <ExampleContainer>
    <Title title="Overlay" theme="dark" level={4} />
    <DxcProgressBar label="Overlay" helperText="Helper text" overlay={true} showValue value={50} />
  </ExampleContainer>
);
