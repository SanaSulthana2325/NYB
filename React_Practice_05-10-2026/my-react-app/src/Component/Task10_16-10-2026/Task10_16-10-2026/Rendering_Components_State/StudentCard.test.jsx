import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import StudentCard from "./StudentCard";

test("renders student information", () => {
  render(<StudentCard />);

  expect(
    screen.getByRole("heading", { name: "Tasan" })
  ).toBeInTheDocument();

  expect(
    screen.getByText("Email: tasan@example.com")
  ).toBeInTheDocument();
});