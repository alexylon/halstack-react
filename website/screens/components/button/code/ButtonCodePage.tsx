import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import icons from "./examples/icons";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <HeaderDescriptionCell>Description</HeaderDescriptionCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mode: 'primary' | 'secondary' | 'text'</td>
            <td>
              <Code>'primary'</Code>
            </td>
            <td>The available button modes.</td>
          </tr>
          <tr>
            <td>type: 'button' | 'reset' | 'submit'</td>
            <td>
              <Code>'button'</Code>
            </td>
            <td>'type' html prop of the button.</td>
          </tr>
          <tr>
            <td>label: string</td>
            <td></td>
            <td>Text to be placed in the button.</td>
          </tr>
          <tr>
            <td>icon: node | string</td>
            <td></td>
            <td>
              Element or path used as the icon that will be placed next to the
              button label.
            </td>
          </tr>
          <tr>
            <td>iconPosition: 'before' | 'after'</td>
            <td>
              <Code>'before'</Code>
            </td>
            <td>Whether the icon should appear after or before the label.</td>
          </tr>
          <tr>
            <td>disabled: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>If true, the component will be disabled.</td>
          </tr>
          <tr>
            <td>onClick: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks the button.
            </td>
          </tr>
          <tr>
            <td>margin: string | object</td>
            <td></td>
            <td>
              Size of the margin to be applied to the component ('xxsmall' |
              'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
              You can pass an object with 'top', 'bottom', 'left' and 'right'
              properties in order to specify different margin sizes.
            </td>
          </tr>
          <tr>
            <td>size: string </td>
            <td>
              <Code>'fitContent'</Code>
            </td>
            <td>
              Size of the component ('small' | 'medium' | 'large' | 'fillParent'
              | 'fitContent').
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>0</td>
            <td>Value of the tabindex attribute.</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Icons",
        content: <Example example={icons} defaultIsVisible />,
      },
    ],
  },
];

const ButtonCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/button/code/ButtonCodePage.tsx" />
    </DxcFlex>
  );
};

export default ButtonCodePage;
