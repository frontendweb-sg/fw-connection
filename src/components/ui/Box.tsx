import classNames from "classnames";
import React from "react";
import {
  Direction,
  Display,
  Flex,
  Size,
  Spacing,
  alignItems,
  justifyContent,
} from "../../types";

interface boxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  alignItems?: alignItems;
  justifyContent?: justifyContent;
  targetScreen?: Size;
  direction?: Direction;
  display?: Display;
  flex?: Flex;
  p?: Spacing;
  px?: Spacing;
  py?: Spacing;
  pt?: Spacing;
  ps?: Spacing;
  pe?: Spacing;
  pb?: Spacing;
  m?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  mt?: Spacing;
  ms?: Spacing;
  me?: Spacing;
  mb?: Spacing;
}

/**
 * Div component
 * @param param0
 * @returns
 */
const Box = ({
  alignItems,
  targetScreen,
  justifyContent,
  children,
  className,
  direction,
  display,
  flex,
  ...rest
}: boxProps) => {
  const classes = classNames(
    {
      ["align-items-" + alignItems]: alignItems,
      ["align-items-" + targetScreen + "-" + alignItems]:
        alignItems && targetScreen,
      ["justify-content-" + justifyContent]: justifyContent,
      ["justify-content-" + targetScreen + "-" + justifyContent]:
        justifyContent && targetScreen,
      ["flex-" + direction]: direction,
      ["flex-" + targetScreen + "-" + direction]: direction && targetScreen,
      ["d-" + display]: display,
      ["d-" + targetScreen + "-" + display]: display && targetScreen,
      ["d-" + flex]: flex,
      ["d-" + targetScreen + "-" + flex]: flex && targetScreen,
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;
