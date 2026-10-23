import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StudentActions from "./StudentActions";

test("displays the Add Student button", () => {
  render(<StudentActions />);

  expect(
    screen.getByRole("button", { name: "Add Student" })
  ).toBeInTheDocument();
});