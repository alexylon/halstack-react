import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import DropdownMenuItem from "./DropdownMenuItem";
import { DropdownMenuProps } from "./types";

const DropdownMenu = React.forwardRef<HTMLUListElement, DropdownMenuProps>(
  (
    { id, dropdownTriggerId, iconsPosition, visualFocusIndex, menuItemOnClick, onKeyDown, options, styles },
    ref
  ): JSX.Element => {
    const colorsTheme = useTheme();

    return (
      <ThemeProvider theme={colorsTheme.dropdown}>
        <DropdownMenuContainer
          onMouseDown={(event) => {
            // Prevent the onBlur event from closing menu when clicking on the menu since it is implemented with a Portal and the menu is not a child of the container
            event.preventDefault();
          }}
          onKeyDown={onKeyDown}
          id={id}
          role="menu"
          aria-labelledby={dropdownTriggerId}
          aria-orientation="vertical"
          aria-activedescendant={`option-${visualFocusIndex}`}
          tabIndex={-1}
          style={styles}
          ref={ref}
        >
          {options.map((option, index) => (
            <DropdownMenuItem
              id={`option-${index}`}
              key={`option-${index}`}
              visuallyFocused={index === visualFocusIndex}
              iconPosition={iconsPosition}
              onClick={menuItemOnClick}
              option={option}
            />
          ))}
        </DropdownMenuContainer>
      </ThemeProvider>
    );
  }
);

const DropdownMenuContainer = styled.ul`
  box-sizing: border-box;
  max-height: 230px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.optionBackgroundColor};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  outline: none;
`;

export default React.memo(DropdownMenu);
