import React from "react";
import styled from "styled-components";
import FlexPropsType from "./types";

const DxcFlex = ({ children, ...props }: FlexPropsType): JSX.Element => <Flex {...props}>{children}</Flex>;

const Flex = styled.div<FlexPropsType>`
  display: flex;
  ${({
    direction = "row",
    wrap = "nowrap",
    justifyContent = "flex-start",
    alignItems = "stretch",
    alignContent = "normal",
    alignSelf = "auto",
    gap = "0",
    order = 0,
    grow = 0,
    shrink = 1,
    basis = "auto",
  }) => `
    flex-direction: ${direction}; 
    flex-wrap: ${wrap}; 
    justify-content: ${justifyContent}; 
    align-items: ${alignItems};
    align-content: ${alignContent};
    gap: ${typeof gap === "object" ? `${gap.rowGap} ${gap.columnGap}` : gap};
    order: ${order};
    flex-grow: ${grow};
    flex-shrink: ${shrink};
    flex-basis: ${basis};
    align-self: ${alignSelf};
  `}
`;

export default DxcFlex;
