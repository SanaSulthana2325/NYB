import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import StudentTable from "./StudentTable";

test("displays student names and emails", () => {
  render(
    <StudentTable
      students={[
        {
          id: 1,
          name: "Rahul",
          email: "rahul@example.com",
        },
        {
          id: 2,
          name: "Priya",
          email: "priya@example.com",
        },
      ]}
    />
  );

  expect(screen.getByText("Rahul")).toBeInTheDocument();
  expect(screen.getByText("priya@example.com"))
    .toBeInTheDocument();

  expect(screen.getAllByRole("row")).toHaveLength(3);
});

test("shows a message when there are no students", () => {
  render(<StudentTable students={[]} />);

  expect(screen.getByText("No students found."))
    .toBeInTheDocument();
});