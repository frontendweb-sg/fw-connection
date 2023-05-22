import { IUserDoc } from "@/modals/user";
import React from "react";
import Box from "../ui/Box";
import classNames from "classnames";
import Avatar from "../ui/Avatar";
import Typography from "../ui/Typography";

type userProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  user: IUserDoc | string;
};
const PostUser = ({ user, className, children, ...rest }: userProps) => {
  const classes = classNames("post-user mb-2", {}, className);
  return (
    <Box flex="flex" justifyContent="between" className={classes}>
      <Box flex="flex" alignItems="start">
        <Avatar alt="" className="me-2" />
        <Typography variant="subtitle2">
          {user?.firstname} {user?.lastname}
          <div className="clearfix"></div>
          <Typography variant="span" className="text-xs text-gray">
            (Sr. Developer)
          </Typography>
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
export default PostUser;
