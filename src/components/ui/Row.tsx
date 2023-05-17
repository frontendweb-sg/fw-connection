import classNames from "classnames";
import React, { forwardRef } from "react";

export type rowRef = HTMLDivElement;
export interface IRowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  cover?: boolean;
}

const Row = forwardRef<rowRef, IRowProps>(
  ({ className, children, cover, ...rest }, ref) => {
    const classes = classNames("row", { "h-100": cover }, className);
    return (
      <div className={classes} {...ref}>
        {children}
      </div>
    );
  }
);

Row.defaultProps = {};
Row.propTypes = {};
export default Row;
