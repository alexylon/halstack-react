import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const headerPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>underlined: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          Wether a contrast line should appear at the bottom of the header.
        </td>
      </tr>
      <tr>
        <td>content: node</td>
        <td></td>
        <td>
          Content showed in the header. Take into account that the component
          applies styles for the first child in the content, so we recommend the
          use of React.Fragment to be applied correctly. Otherwise, the styles
          can be modified.
        </td>
      </tr>
      <tr>
        <td>responsiveContent: function</td>
        <td></td>
        <td>
          Content showed in responsive version. It receives the close menu
          handler that can be used to add that functionality when a element is
          clicked.
        </td>
      </tr>
      <tr>
        <td>onClick: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the header logo.
        </td>
      </tr>
      <tr>
        <td>margin: string</td>
        <td></td>
        <td>
          Size of the bottom margin to be applied to the header ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
        </td>
      </tr>
      <tr>
        <td>padding: string | object</td>
        <td></td>
        <td>
          Size of the padding to be applied to the custom area of the component
          ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
          'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and
          'right' properties in order to specify different padding sizes.
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>
          Value of the tabindex for all interactuable elements, except those inside the custom area.
        </td>
      </tr>
    </DxcTable>
  );
};

export default headerPropsTable;
