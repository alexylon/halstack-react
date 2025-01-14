import { DxcTag } from "@dxc-technology/halstack-react";
import dxcLogoPath from "./images/dxclogo.png";

const code = `() => {
  return (
    <DxcTag
      margin="medium"
      icon={dxcLogoPath}
      label="DXC Technology"
      onClick={() => {
        console.log("click");
      }}
    ></DxcTag>
  );
}`;

const scope = {
  DxcTag,
  dxcLogoPath
};

export default { code, scope };
