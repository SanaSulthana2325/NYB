import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import Input from "./Input";

test("displays the label and placeholder", () => {
  render(
    <Input
      label="Student Name"
      value=""
      onChange={() => {}}
      placeholder="Enter student name"
    />
  );

  expect(screen.getByLabelText("Student Name"))
    .toBeInTheDocument();

  expect(
    screen.getByPlaceholderText("Enter student name")
  ).toBeInTheDocument();
});

test("calls onChange when the user types", async () => {
  const user = userEvent.setup();
  const handleChange = vi.fn();

  render(
    <Input
      label="Student Name"
      value=""
      onChange={handleChange}
    />
  );

  await user.type(
    screen.getByLabelText("Student Name"),
    "Rahul"
  );

  expect(handleChange).toHaveBeenCalled();
});