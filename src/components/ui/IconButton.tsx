import React, { forwardRef } from "react";
import { Variant, Color, Size } from "../../types";
import classNames from "classnames";

export type iconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  loading?: boolean;
  block?: boolean;
  color?: Color;
  size?: Size;
};

const IconButton = forwardRef<HTMLButtonElement, iconButtonProps>(
  ({ children, className, ...rest }, ref) => {
    const classes = classNames("btn");

    return (
      <button className={classes} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

export default IconButton;
