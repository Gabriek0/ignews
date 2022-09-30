import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { ActiveLink } from ".";

// mock use router

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn(() => {
      return {
        asPath: "/",
      };
    }),
  };
});

useRouter();

describe("ActiveLink component", () => {
  it("renders correctly", () => {
    render(
      <ActiveLink href={"/"} activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("receibing active class", () => {
    render(
      <ActiveLink href={"/"} activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toHaveClass("active");
  });
});
