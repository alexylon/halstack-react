import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SidenavPropsTable, {
  SidenavTitlePropsTable,
  SidenavGroupPropsTable,
  SidenavLinkPropsTable,
} from "./api.jsx";
import {
  DxcHeading,
  DxcLink,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import { Link } from "react-router-dom";
import defaultSidenav from "./examples/default";
import compoundSidenav from "./examples/compound";

function Sidenav() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Sidenav" status="ready"></ComponentHeader>
      <Section>
        <DxcParagraph>
          The sidenav is part of the application layout, so it can only be used
          inside of it. Please check the{" "}
          <Link to={`/components/applicationLayout`} component={DxcLink}>
            DxcApplicationLayout
          </Link>{" "}
          documentation.
        </DxcParagraph>
        <DxcHeading
          level={3}
          text="Props"
          margin={{ top: "small", bottom: "small" }}
        />
        <SidenavPropsTable />
      </Section>
      <Section>
        <DxcHeading
          level={3}
          text="Compound components"
          margin={{ bottom: "small" }}
        />
        <p>
          This component includes different compound components that are
          customized following the{" "}
          <DxcLink href="https://developer.dxc.com/design/guidelines/components/sidenav">
            design guidelines
          </DxcLink>
          .
        </p>
        <DxcHeading text="DxcSidenav.Title" level={4} weight="bold" />
        <p>
          The content will be showed as the main title in the sidenav, it should
          be used only in the sidenav title prop.
        </p>
        <SidenavTitlePropsTable />
        <DxcHeading
          text="DxcSidenav.Section"
          level={4}
          weight="bold"
          margin={{ top: "small" }}
        />
        <p>The content will be showed as a section the sidenav.</p>
        <DxcHeading text="DxcSidenav.Group" level={4} weight="bold" />
        <p>A group of Links, recommennded to use inside the section.</p>
        <SidenavGroupPropsTable />
        <DxcHeading
          text="DxcSidenav.Link"
          level={4}
          weight="bold"
          margin={{ top: "small" }}
        />
        <p>Customized link that allows the navigation.</p>
        <DxcHeading
          text="Props"
          level={5}
          weight="bold"
          margin={{ bottom: "small" }}
        />{" "}
        <SidenavLinkPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Sidenav" example={defaultSidenav}></Example>
        <Example
          title="Sidenav with compound components"
          example={compoundSidenav}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Sidenav;
