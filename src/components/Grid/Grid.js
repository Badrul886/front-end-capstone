// Grid.js
import React from "react";
import styled, { css } from "styled-components";

// Create a styled-component for the grid container
const GridContainer = styled.div`
  display: grid;

  grid-template-columns: ${(props) =>
    props.columns || "repeat(12, calc(1000px/12))"};

  ${(props) =>
    props.rows &&
    css`
      grid-template-rows: ${props.rows};
    `}

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}

  ${(props) =>
    props.justifyitems &&
    css`
      justify-items: ${props.justifyitems};
    `}

    ${(props) =>
    props.marginleft &&
    css`
      margin-left: ${props.marginleft};
    `}


  ${(props) =>
    props.breakpoint1 &&
    css`
      @media (max-width: ${props.breakpoint1}) {
        ${props.breakpoint1columns &&
        css`
          grid-template-columns: ${props.breakpoint1columns};
        `};
        ${props.breakpoint1rows &&
        css`
          grid-template-rows: ${props.breakpoint1rows};
        `}
      }
    `}

  ${(props) =>
    props.breakpoint2 &&
    css`
      @media (max-width: ${props.breakpoint2}) {
        ${props.breakpoint2columns &&
        css`
          grid-template-columns: ${props.breakpoint2columns};
        `};
        ${props.breakpoint2rows &&
        css`
          grid-template-rows: ${props.breakpoint2rows};
        `}
      }
    `}
`;

// const GridItem = styled.div`
//   background: ${(props) => props.bgColor || 'lightgrey'};
//   padding: ${(props) => props.padding || '16px'};
//   border: ${(props) => props.border || '1px solid grey'};
// `;

// The Grid component accepts children, gap, columns, rows, and breakpoints as props
const Grid = ({
  children,
  gap,
  columns,
  rows,
  justifyitems,
  marginleft,
  breakpoint1,
  breakpoint1columns,
  breakpoint1rows,
  breakpoint2,
  breakpoint2columns,
  breakpoint2rows,
}) => {
  return (
    <GridContainer
      gap={gap}
      columns={columns}
      rows={rows}
      justifyitems={justifyitems}
      marginleft={marginleft}
      breakpoint1={breakpoint1}
      breakpoint1columns={breakpoint1columns}
      breakpoint1rows={breakpoint1rows}
      breakpoint2={breakpoint2}
      breakpoint2columns={breakpoint2columns}
      breakpoint2rows={breakpoint2rows}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;
