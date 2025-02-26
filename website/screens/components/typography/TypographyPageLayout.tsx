import PageHeading from "@/common/PageHeading";
import { DxcHeading, DxcFlex, DxcAlert } from "@dxc-technology/halstack-react";
import TabsPageHeading from "@/common/TabsPageLayout";

const TypographyPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/typography" },
    { label: "Usage", path: "/components/typography/usage" },
    { label: "Specifications", path: "/components/typography/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Typography" weight="bold"></DxcHeading>
          <DxcAlert type="warning" size="fillParent">
            Use this component only if all other Halstack Design System
            components for adding text DO NOT meet your requirements. This
            component should always be the LAST OPTION to use.
          </DxcAlert>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default TypographyPageHeading;
