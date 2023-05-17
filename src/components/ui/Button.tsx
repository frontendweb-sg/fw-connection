import classNames from "classnames";
import React, { forwardRef } from "react";
import { Color, Size, Variant } from "@/types";
import { IconType } from "react-icons";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  startIcon?: IconType;
  endIcon?: IconType;
  loading?: boolean;
  block?: boolean;
  color?: Color;
  size?: Size;
};

export type btnRef = HTMLButtonElement;
const Button = forwardRef<btnRef, ButtonProps>(
  (
    {
      color,
      size,
      children,
      className,
      block,
      startIcon,
      endIcon,
      loading,
      variant,
      type,
      ...rest
    },
    ref
  ) => {
    let classes = classNames(
      {
        btn: true,
        "w-100": block,
        ["btn-" + color]: color,
        ["btn-" + size]: size,
      },
      className
    );

    if (variant === "text") {
      classes = classNames(
        {
          ["btn-text-" + color]: color,
          ["btn-" + size]: size,
        },
        className
      );
    }

    if (variant === "outline") {
      classes = classNames({
        btn: true,
        ["btn-outline-" + color]: color,
        ["btn-" + size]: size,
      });
    }

    return (
      <button type={type} className={classes} {...rest} ref={ref}>
        {children}
      </button>
    );
  }
);

Button.defaultProps = {
  color: "primary",
  size: "sm",
  loading: false,
  block: false,
  type: "button",
};
export default Button;
