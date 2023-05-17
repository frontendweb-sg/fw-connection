import { ReactElement, ReactNode } from "react";

export type AppCommon = {};
export type AppProps = {
  children?: ReactNode | ReactElement;
  className?: string;
};

export type Height = "25" | "50" | "75" | "100" | "auto";
export type Width = "25" | "50" | "75" | "100" | "auto";
export type Align = "left" | "right" | "center" | "justify";
export type Theme = "light" | "dark";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "block";
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

export type Variant = "text" | "filled" | "outline";

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
