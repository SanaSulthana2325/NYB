import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import StudentCounter from "./StudentCounter";

test("increments student count when button is clicked", async () => {
  const user = userEvent.setup();

  render(<StudentCounter />);

  expect(
    screen.getByText("Total Students: 0")
  ).toBeInTheDocument();

  await user.click(
    screen.getByRole("button", { name: /add student/i })
  );

  expect(
    screen.getByText("Total Students: 1")
  ).toBeInTheDocument();
});