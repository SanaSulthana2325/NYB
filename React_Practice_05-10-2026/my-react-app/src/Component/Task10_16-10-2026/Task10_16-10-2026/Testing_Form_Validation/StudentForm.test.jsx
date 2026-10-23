import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import StudentForm from "./StudentForm";

test("rejects an invalid email", async () => {
  const user = userEvent.setup();

  render(<StudentForm />);

  await user.type(
    screen.getByLabelText("Student Name"),
    "Rahul"
  );
  await user.type(
    screen.getByLabelText("Email"),
    "invalid-email"
  );
  await user.click(screen.getByRole("button", { name: "Submit" }));

  expect(screen.getByRole("status"))
    .toHaveTextContent("Enter a name and valid email.");
});

test("accepts valid details", async () => {
  const user = userEvent.setup();

  render(<StudentForm />);

  await user.type(screen.getByLabelText("Student Name"), "Rahul");
  await user.type(
    screen.getByLabelText("Email"),
    "rahul@example.com"
  );
  await user.click(screen.getByRole("button", { name: "Submit" }));

  expect(screen.getByRole("status"))
    .toHaveTextContent("Student Rahul added successfully!");
});