import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";

describe("Nav component", () => {
  it("should render the logo", () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const logo = screen.getByAltText("Little Lemon Logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render the menu icon", () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const menuIcon = screen.getByRole("button", { name: "" });
    expect(menuIcon).toBeInTheDocument();
  });

  it("should toggle the menu visibility when menu icon is clicked", () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const menuIcon = screen.getByRole("button", { name: "" });
    const nav = screen.getByRole("ul-navigation");

    // Check initial state
    expect(nav).toHaveClass("header--nav");

    // Open menu
    fireEvent.click(menuIcon);
    expect(nav).toHaveClass("header--nav visible");

    // Close menu
    fireEvent.click(menuIcon);
    expect(nav).toHaveClass("header--nav");
  });

  it("should render all navigation links", () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );

    const links = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Menu", href: "/menu" },
      { name: "Reservations", href: "/reservations" },
      { name: "Order Online", href: "/orders" },
      { name: "Login", href: "/login" },
    ];

    links.forEach((link) => {
      const navLink = screen.getByRole("link", { name: link.name });
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute("href", link.href);
    });
  });
});
