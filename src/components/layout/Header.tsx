import Container from "../ui/Container";
import NavItem from "../ui/NavItem";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <Container>
        <NavItem href="/" className="navbar-brand">
          Fw Social
        </NavItem>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
