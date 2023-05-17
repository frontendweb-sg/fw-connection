import classNames from "classnames";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";

export type containerRef = HTMLDivElement;
export interface IContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isFull?: boolean;
  cover?: boolean;
}

const Container = forwardRef<containerRef, IContainerProps>(
  ({ isFull, className, children, cover, ...rest }, ref) => {
    const classes = classNames(
      isFull ? "container-fluid" : "container",
      { "h-100": cover },
      className
    );
    return (
      <div className={classes} {...ref}>
        {children}
      </div>
    );
  }
);

Container.defaultProps = {
  isFull: false,
};

Container.propTypes = {
  isFull: PropTypes.bool,
};

export default Container;
