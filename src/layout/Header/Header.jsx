import { Nav } from "../../components/index";
import "./Header.css";

const Header = () => {
  return (
    <header
      style={{
        margin: "0 auto",
        display: "flex",
        maxWidth: "65rem",
        width: "100%",
        "@media(minWidth: 768px)": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
      aria-label="Main Header"
    >
      <h1 style={{ display: "none" }}>Little Lemon</h1>
      <Nav aria-label="Navigation Menu" />
    </header>
  );
};

export default Header;
