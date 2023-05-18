import { ReactElement, ReactNode } from "react";

export type AppProps = {
  children?: ReactNode | ReactElement;
  className?: string;
};

export type Height = "25" | "50" | "75" | "100" | "auto";
export type Width = "25" | "50" | "75" | "100" | "auto";
export type Align = "left" | "right" | "center" | "justify";
export type Theme = "light" | "dark";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type ButtonSize = Size & "block";
export type Color =
  | "white"
  | "info"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "dark"
  | "light"
  | "gray";

export type Display =
  | "none"
  | "inline"
  | "inline-block"
  | "block"
  | "grid"
  | "table"
  | "table-cell"
  | "table-row";

export type Flex = "flex" | "inline-flex";
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | "auto";
export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
export type Variant = "text" | "filled" | "outline";
export type alignItems = "start" | "center" | "end" | "baseline" | "stretch";
export type justifyContent =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "span";

export type Float = "start" | "end" | "none";

export type AppCommon = {
  alignItems?: alignItems;
  justifyContent?: justifyContent;
  targetScreen?: Size;
  direction?: Direction;
  display?: Display;
  flex?: Flex;
  float?: Float;
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
};
