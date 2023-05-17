import classNames from "classnames";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";

export type colRef = HTMLDivElement;
export interface IColProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Col = forwardRef<colRef, IColProps>(
  ({ xs, sm, md, lg, xl, className, children, ...rest }, ref) => {
    const classes = classNames(
      {
        ["col-xs-" + xs]: !!xs,
        ["col-sm-" + sm]: !!sm,
        ["col-md-" + md]: !!md,
        ["col-lg-" + lg]: !!lg,
        ["col-xl-" + xl]: !!xl,
        col: !xs && !sm && !md && !lg && !xl,
      },
      className
    );
    return (
      <div className={classes} {...ref}>
        {children}
      </div>
    );
  }
);

Col.defaultProps = {};

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Col;
