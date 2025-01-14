import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const wizardPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>mode: 'horizontal' | 'vertical'</td>
        <td>
          <code>'horizontal'</code>
        </td>
        <td>The wizard can be showed in horizontal or vertical.</td>
      </tr>
      <tr>
        <td>defaultCurrentStep: number</td>
        <td></td>
        <td>Initially selected step, only when it is uncontrolled.</td>
      </tr>
      <tr>
        <td>currentStep: number</td>
        <td>
          <code>0</code>
        </td>
        <td>
          Defines which step is marked as the current. The numeration starts at
          0. If undefined, the component will be uncontrolled and the step will
          be managed internally by the component.
        </td>
      </tr>
      <tr>
        <td>onStepClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks a step. The step
          number will be passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>steps: object[]</td>
        <td>
          <code>[]</code>
        </td>
        <td>
          An array of objects representing the steps. Each of them has the
          following properties:
          <ul>
            <li>
              <b>label</b>: Step label.
            </li>
            <li>
              <b>description</b>: Description that will be placed next to the
              step.
            </li>
            <li>
              <b>icon</b>: Element or path used as the icon displayed in the
              step.
            </li>
            <li>
              <b>disabled</b>: Whether the step is disabled or not.
            </li>
            <li>
              <b>valid</b>: Whether the step is valid or not.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex attribute that is given to all the steps.</td>
      </tr>
    </DxcTable>
  );
};

export default wizardPropsTable;
