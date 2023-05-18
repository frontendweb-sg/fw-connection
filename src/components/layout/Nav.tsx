import UserControl from "../shared/UserControl";
import NavItem from "../ui/NavItem";

const Nav = () => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <NavItem menu href="/posts">
          Posts
        </NavItem>
        <NavItem menu href="/user">
          Users
        </NavItem>
        <NavItem menu href="/admin">
          Admin
        </NavItem>
        <UserControl />
      </ul>
    </div>
  );
};

export default Nav;
