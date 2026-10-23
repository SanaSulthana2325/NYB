import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Assignments from "./Assignments";

// Test 1: Shows a message when there are no assignments
test("shows an empty message", () => {
  render(<Assignments assignments={[]} />);

  expect(
    screen.getByText("No assignments yet.")
  ).toBeInTheDocument();
});

// Test 2: Shows multiple assignments
test("shows assignments when available", () => {
  const assignments = [
    { id: 1, title: "React Homework" },
    { id: 2, title: "JavaScript Practice" },
  ];

  render(<Assignments assignments={assignments} />);

  expect(
    screen.getByText("React Homework")
  ).toBeInTheDocument();

  expect(
    screen.getByText("JavaScript Practice")
  ).toBeInTheDocument();
});

// Test 3: Shows a single assignment
test("shows a single React assignment", () => {
  render(
    <Assignments
      assignments={[
        { id: 1, title: "React Assignment" },
      ]}
    />
  );

  expect(
    screen.getByText("React Assignment")
  ).toBeInTheDocument();
});