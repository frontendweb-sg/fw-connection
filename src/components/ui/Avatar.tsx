import { Size } from "@/types";
import classNames from "classnames";
import Image, { ImageProps } from "next/image";
export type avatarProps = React.ImgHTMLAttributes<HTMLImageElement> &
  ImageProps & {
    size?: Size;
    border?: number;
  };

const Avatar = ({
  src = "/avatar.png",
  alt,
  size = "xs",
  border,
  className,
  ...rest
}: avatarProps) => {
  const classes = classNames(
    "avatar rounded-circle overflow-hidden",
    {
      ["avatar-" + size]: size,
    },
    className
  );
  return (
    <div className={classes}>
      <Image src={src!} alt={alt!} {...rest} fill />
    </div>
  );
};

export default Avatar;
