import { DxcDateInput, DxcStack, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcDateInput label="Default" placeholder size="fillParent" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcStack,
  DxcInset,
};

export default { code, scope };
