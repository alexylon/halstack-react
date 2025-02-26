import {
  DxcToggleGroup,
  DxcInset,
  DxcFlex,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const options1 = [
    {
      value: 1,
      label: "Option 01",
    },
    {
      value: 2,
      label: "Option 02",
    },
  ];

  const options2 = [
    {
        value: 1,
        label: "Option 01",
      },
      {
        value: 2,
        label: "Option 02",
      },
    {
      value: 3,
      label: "Option 02",
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="space-between">
        <DxcToggleGroup
          label="Single selection"
          helperText="Mutually exclusive options"
          defaultValue={2}  
          options={options1}
        ></DxcToggleGroup>
        <DxcToggleGroup
          label="Multiple selection"
          helperText="Mutually inclusive options"
          options={options2}
          defaultValue={[1, 2]}  
          multiple
        ></DxcToggleGroup>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcToggleGroup,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
