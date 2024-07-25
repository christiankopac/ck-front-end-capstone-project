import {
  Hero,
  Highlights,
  Testimonials,
  About,
} from "../../components/Sections/index";

const Main = () => (
  <main
    style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
      gap: "1rem",
    }}
  >
    <Hero />
    <Highlights />
    <Testimonials />
    <About />
  </main>
);

export default Main;
