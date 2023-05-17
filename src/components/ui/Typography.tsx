import PropTypes from "prop-types";
import classNames from "classnames";
import React, { FC, createElement, forwardRef } from "react";
import { Color, Size, TextVariant } from "@/types";

export interface TypographyProps
  extends React.HtmlHTMLAttributes<
    HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement
  > {
  variant?: TextVariant;
  color?: Color;
  size?: Size;
}
export type typoRef =
  | HTMLHeadingElement
  | HTMLSpanElement
  | HTMLParagraphElement;
const Typography = forwardRef<typoRef, TypographyProps>(
  ({ variant, children, className, color, size, ...rest }, ref) => {
    const classes = classNames(
      "text",
      variant ? "text-" + variant : null,
      size ? "text-" + size : null,
      color ? "text-" + color : null,
      className
    );
    const _h6 =
      variant === "subtitle1" || variant === "subtitle2" ? "h6" : null;
    const _p = variant === "body1" || variant === "body2" ? "p" : null;
    const tag = _h6 || _p || variant;
    return createElement(tag!, { className: classes, ...rest }, children);
  }
);

Typography.defaultProps = {
  variant: "h1",
};

Typography.propTypes = {
  variant: PropTypes.oneOf<TextVariant>([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "span",
  ]),
};
export default Typography;
