import "./App.css";
import { Home, About, Menu, Orders, Login, Reservations } from "./pages";
import pages from "./utils/pages";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";

function App() {
  return (
    <div
      data-testid="app-component"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("about").path} element={<About />} />
          <Route path={pages.get("menu").path} element={<Menu />} />
          <Route
            path={pages.get("reservations").path}
            element={<Reservations />}
          />
          <Route path={pages.get("orders").path} element={<Orders />} />
          <Route path={pages.get("login").path} element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
