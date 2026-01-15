import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../landing_page/home/Hero";
import "@testing-library/jest-dom";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const heroImage = screen.getByAltText("HeroImage");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders Signup button", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const signupButton = screen.getByRole('button',{name:'Sign up for free'});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
