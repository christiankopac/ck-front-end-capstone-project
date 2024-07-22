import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <h1 style={{ display: "none" }}>Little Lemon</h1>
      <img src="/logo.png" alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
};
export default Header;
