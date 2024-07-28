import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
          gap: "1rem",
        }}
        data-testid="main-content"
        aria-label="Main Content"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
