import { DxcNumberInput } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcNumberInput
        label="Basic"
        placeholder="Placeholder"
        margin="medium"
      />
      <DxcNumberInput
        label="Disabled"
        placeholder="Placeholder"
        error="Error message."
        margin="medium"
      />
      <DxcNumberInput
        label="Disabled"
        placeholder="Placeholder"
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcNumberInput,
};

export default { code, scope };
