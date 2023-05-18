"use client";
import { useSession } from "next-auth/react";
import Avatar, { avatarProps } from "../ui/Avatar";
import Typography from "../ui/Typography";
import { FaSpinner } from "react-icons/fa";

export type userControlProps = {
  sidebar?: boolean;
  avatarProps?: avatarProps;
};
/**
 * User control
 * @returns
 */
const UserControl = ({ sidebar, avatarProps }: userControlProps) => {
  const { data: session, status } = useSession();

  const name =
    session?.user.firstname.substring(0, 1) +
    "" +
    session?.user.lastname.substring(0, 1);

  if (sidebar) {
    return (
      <div className="sidebar-user d-flex mb-4 align-items-center flex-column p-3">
        <Avatar alt="User image" className="mb-3" {...avatarProps} />
        {status === "loading" ? (
          <FaSpinner color="primary" size={24} />
        ) : (
          <Typography color="primary" className="mb-0" variant="subtitle2">
            {name}
          </Typography>
        )}
      </div>
    );
  }

  return (
    <li className="user-control d-flex align-items-center p-2">
      <Avatar alt="User image" className="me-2" {...avatarProps} />
      {status === "loading" ? (
        <FaSpinner color="white" size={24} />
      ) : (
        <Typography color="white" className="mb-0" variant="subtitle2">
          {name}
        </Typography>
      )}
    </li>
  );
};

export default UserControl;
