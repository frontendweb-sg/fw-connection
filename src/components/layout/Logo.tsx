import { AppProps, Size, Theme } from "@/types";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface ILogoProps extends LinkProps, AppProps {
  mode?: Theme;
  size?: Size;
}

const Logo: FC<ILogoProps> = ({ href, className, mode, size, ...rest }) => {
  const classes = classNames("fw-logo", className);
  return (
    <Link href={href} className={classes} {...rest}>
      <LogoIcon mode={mode} size={size} />
      <LogoName mode={mode} size={size} />
    </Link>
  );
};

Logo.defaultProps = {
  href: "/abc",
  mode: "light",
  size: "xs",
};

interface ICommonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  mode?: Theme;
  size?: Size;
}
const LogoName: FC<ICommonProps> = ({ className, mode, size, ...rest }) => {
  const classes = classNames("fw-logo-name", size, mode, className);
  return (
    <div className={classes} {...rest}>
      frontend<span className="text-secondary">web</span>
    </div>
  );
};

const LogoIcon: FC<ICommonProps> = ({ mode, className, size, ...rest }) => {
  const classes = classNames("fw-logo-icon", size, mode, className);
  return (
    <div className={classes} {...rest}>
      <span>fw</span>
    </div>
  );
};

export default Object.assign(Logo, { LogoName, LogoIcon });
