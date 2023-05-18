import classNames from "classnames";
import React from "react";

export type postLikeProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};

const PostLike = ({ className, ...rest }: postLikeProps) => {
  const classes = classNames("post-like", className);
  return <div className={classes}>Post like</div>;
};

export default PostLike;
