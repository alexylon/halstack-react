import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import DropdownPropsTable from "./api.jsx";
import defaultDropdown from "././examples/default";
import imagesDropdown from "./examples/imagesDropdown";
import expandOnHoverDropdown from "./examples/expandOnHoverDropdown";

function Dropdown() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Dropdown" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <DropdownPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Dropdown" example={defaultDropdown}></Example>
        <Example
          title="Default Dropdown with expand on hover"
          example={expandOnHoverDropdown}
        ></Example>
        <Example title="Dropdown with icons" example={imagesDropdown}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Dropdown;
