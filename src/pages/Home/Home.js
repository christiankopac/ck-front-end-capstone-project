import {
  Hero,
  Highlights,
  Testimonials,
  About,
} from "../../components/Sections/index";

const Home = () => (
  <>
    {/*
    <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
          gap: "1rem",
        }}
      >
    */}
    <Hero aria-label="Hero Section" />
    <Highlights aria-label="Highlights Section" />
    <Testimonials aria-label="Testimonials Section" />
    <About aria-label="About Section" />
    {/*
      </main>
      */}
  </>
);

export default Home;
