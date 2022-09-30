import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { Header } from ".";

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn(() => {
      return {
        asPath: "/",
      };
    }),
  };
});

jest.mock("next-auth/react", () => {
  return {
    useSession: jest.fn(() => {
      return {
        data: null,
      };
    }),
  };
});

useSession();

describe("Header component", () => {
  it("render correctly", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
