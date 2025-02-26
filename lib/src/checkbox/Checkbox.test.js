import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DxcCheckbox from "./Checkbox";

describe("Checkbox component tests", () => {
  test("Checkbox renders with correct text", () => {
    const { getByText } = render(<DxcCheckbox label="Checkbox" />);

    expect(getByText("Checkbox")).toBeTruthy();
  });
  test("Calls correct function on click", () => {
    const onChange = jest.fn();
    const { getByText } = render(<DxcCheckbox label="Checkbox" onChange={onChange} />);

    fireEvent.click(getByText("Checkbox"));
    expect(onChange).toHaveBeenCalled();
  });
  test("Uncontrolled checkbox", () => {
    const onChange = jest.fn();
    const component = render(<DxcCheckbox label="Checkbox" onChange={onChange} />);
    const visibleCheckbox = component.getByText("Checkbox");
    const input = component.getByRole("checkbox");
    expect(input.checked).toBe(false);
    fireEvent.click(visibleCheckbox);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(true);
    expect(input.checked).toBe(true);
  });
  test("Controlled checkbox", () => {
    const onChange = jest.fn();
    const component = render(<DxcCheckbox label="Checkbox" checked={false} onChange={onChange} />);

    const input = component.getByRole("checkbox");
    const visibleCheckbox = component.getByText("Checkbox");

    fireEvent.click(visibleCheckbox);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(true);
    expect(input.checked).toBe(false);
  });
  test("Renders with correct initial value and initial state when it is uncontrolled", () => {
    const { getByRole } = render(
      <DxcCheckbox label="Default label" defaultChecked value="test-defaultChecked" />
    );
    const input = getByRole("checkbox");
    expect(input.checked).toBe(true);
    expect(input.value).toBe("test-defaultChecked");
    expect(input.getAttribute("aria-checked")).toBe("true");
  });
});
