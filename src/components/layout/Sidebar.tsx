"use client";
import { useSession } from "next-auth/react";
import UserControl from "../shared/UserControl";
import NavItem from "../ui/NavItem";
import { AdminMenu } from "./menu";
import type { Menu, IMenu } from "./menu";

/**
 * Sidebar
 * @returns
 */
const Sidebar = () => {
  const { data: session } = useSession();

  const path = session?.user.role === "admin" ? "/admin" : "/user";

  return (
    <aside className="sidebar">
      <UserControl sidebar />
      <div className="menu">
        {AdminMenu.map((menu: Menu) => {
          return (
            <div className="mb-5" key={menu.name}>
              <span className="mb-2 d-block text-uppercase text-xs text-gray">
                {menu.name}
              </span>
              <ul className="list-block">
                {menu.children?.map((submenu: IMenu) => {
                  return (
                    <NavItem menu key={submenu.name} href={path + submenu.href}>
                      {submenu.name}
                    </NavItem>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
