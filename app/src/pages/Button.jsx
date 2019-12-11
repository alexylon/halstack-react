import React from "react";
import { DxcButton } from "@diaas/dxc-react-cdk";

function App() {
  const onClick = () => {};

  return (
    <div>
      <h3>Light</h3>
      <div>
        <DxcButton
          mode="basic"
          theme="light"
          label="Basic Button"
          onClick={onClick}
        />
        <DxcButton
          mode="raised"
          theme="light"
          label="Raised Button"
          onClick={onClick}
        />
        <DxcButton
          mode="flat"
          theme="light"
          label="Flat Button"
          onClick={onClick}
        />
        <DxcButton
          mode="outlined"
          theme="light"
          label="Outlined Button"
          onClick={onClick}
        />
      </div>
      <div>
        <DxcButton
          disabled
          mode="basic"
          theme="light"
          label="Basic Button"
          onClick={onClick}
        />
        <DxcButton
          disabled
          mode="raised"
          theme="light"
          label="Raised Button"
          onClick={onClick}
        />
        <DxcButton
          disabled
          mode="flat"
          theme="light"
          label="Flat Button"
          onClick={onClick}
        />
        <DxcButton
          disabled
          mode="outlined"
          theme="light"
          label="Outlined Button"
          onClick={onClick}
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <div>
          <DxcButton
            mode="basic"
            theme="dark"
            label="Basic Button"
            onClick={onClick}
          />
          <DxcButton
            mode="raised"
            theme="dark"
            label="Raised Button"
            onClick={onClick}
          />
          <DxcButton
            mode="flat"
            theme="dark"
            label="Flat Button"
            onClick={onClick}
          />
          <DxcButton
            mode="outlined"
            theme="dark"
            label="Outlined Button"
            onClick={onClick}
          />
        </div>
        <div>
          <DxcButton
            disabled
            mode="basic"
            theme="dark"
            label="Basic Button"
            onClick={onClick}
          />
          <DxcButton
            disabled
            mode="raised"
            theme="dark"
            label="Raised Button"
            onClick={onClick}
          />
          <DxcButton
            disabled
            mode="flat"
            theme="dark"
            label="Flat Button"
            onClick={onClick}
          />
          <DxcButton
            disabled
            mode="outlined"
            theme="dark"
            label="Outlined Button"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;