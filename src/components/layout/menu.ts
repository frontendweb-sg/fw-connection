import { IconType } from "react-icons";
import { FaFedex, FaKey } from "react-icons/fa";

export interface IMenu {
  name: string;
  icon: IconType;
  href: string;
}
export interface Menu {
  name: string;
  children?: IMenu[];
}
export const AdminMenu: Menu[] = [
  {
    name: "Menu",
    children: [
      {
        name: "Post",
        icon: FaFedex,
        href: "/post",
      },
      {
        name: "Photos",
        icon: FaFedex,
        href: "/photos",
      },
      {
        name: "Projects",
        icon: FaFedex,
        href: "/project",
      },
    ],
  },
  {
    name: "Setting",
    children: [
      {
        name: "Profile",
        icon: FaFedex,
        href: "/profile",
      },
      {
        name: "Change password",
        icon: FaKey,
        href: "/change-password",
      },
    ],
  },
];
