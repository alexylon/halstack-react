import {
  DxcText,
  DxcList,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import labelPosition from "./examples/labelPosition";
import stacking from "./examples/stacking";
import HeaderCell from "@/common/HeaderCell";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Switch toggles should be used in place of radio buttons whenever the
          options are opposites of each other (i.e. yes/no, on/off, etc).
        </DxcText>
        <DxcText>
          Whenever is possible stack the switch component vertically.
        </DxcText>
        <DxcText>
          Switches have immediate effect over the application, changing
          preferences and configuration settings. Don&#39;t use a submit button.
        </DxcText>
      </DxcList>
    ),
  },
  {
    title: "Stacking",
    content: (
      <>
        <Example example={stacking} />
        <DxcText as="p">
          In some application the use of several switches based on the
          requirements could appear, that why we provide some indications in the
          case that the user needs to use stacked switches.
        </DxcText>
      </>
    ),
  },
  {
    title: "Label position",
    content: (
      <>
        <Example example={labelPosition} />
        <DxcTable>
          <thead>
            <tr>
              <th>Position</th>
              <HeaderCell>Description</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Label before</strong>
              </td>
              <td>Labels before the switch indicate what the switch is for</td>
            </tr>
            <tr>
              <td>
                <strong>Label after</strong>
              </td>
              <td>Labels after the switch indicate the state of the switch</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
];

const SwitchUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/switch/usage/SwitchUsagePage.tsx" />
    </DxcStack>
  );
};

export default SwitchUsagePage;
