import NavItem from "../ui/NavItem";

const Nav = () => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <NavItem href="/posts">Posts</NavItem>
        <NavItem href="/user">Users</NavItem>
        <NavItem href="/admin">Admin</NavItem>
      </ul>
    </div>
  );
};

export default Nav;
