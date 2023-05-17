import Link from "next/link";
import type { LinkProps } from "next/link";
import React, { forwardRef } from "react";
import classNames from "classnames";

export type navProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    menu?: boolean;
    parentProps?: React.LiHTMLAttributes<HTMLLIElement>;
  };
export type navRef = HTMLAnchorElement;
const NavItem = forwardRef<navRef, navProps>(
  ({ menu, children, href, className, parentProps, ...rest }, ref) => {
    const classes = classNames("nav-link", className);
    if (menu) {
      return (
        <li
          className={classNames("nav-item", parentProps?.className)}
          {...parentProps}
        >
          <Link href={href} passHref legacyBehavior {...rest}>
            <a className={classes}>{children}</a>
          </Link>
        </li>
      );
    }

    return (
      <Link href={href} passHref legacyBehavior {...rest}>
        <a className={classes} ref={ref}>
          {children}
        </a>
      </Link>
    );
  }
);
export default NavItem;
