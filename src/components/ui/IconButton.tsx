import React, { forwardRef } from "react";
import { Variant, Color, Size } from "../../types";
import classNames from "classnames";

export type iconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  loading?: boolean;
  color?: Color;
  size?: Size;
};

const IconButton = forwardRef<HTMLButtonElement, iconButtonProps>(
  ({ type = "button", children, color, size, className, ...rest }, ref) => {
    const classes = classNames(
      "btn",
      "btn-icon",
      {
        ["btn-" + color]: color,
        ["btn-" + size]: size,
      },
      className
    );
    return (
      <button type={type} className={classes} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

export default IconButton;
