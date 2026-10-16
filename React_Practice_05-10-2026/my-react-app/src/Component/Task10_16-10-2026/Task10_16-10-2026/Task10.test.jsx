import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import StudentHeader from "../Task10_16-10-2026/Task10";

test("display the page heading", () => {
  render(<StudentHeader />);

  expect(
    screen.getByText("Student Management")
  ).toBeInTheDocument();
});