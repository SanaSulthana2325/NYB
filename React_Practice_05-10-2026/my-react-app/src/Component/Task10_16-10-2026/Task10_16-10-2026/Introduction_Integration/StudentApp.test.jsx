import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import StudentApp from "./StudentApp";

test("adds a student and displays them in the list", async () => {
  const user = userEvent.setup();

  render(<StudentApp />);

  await user.type(screen.getByLabelText("Student Name"), "Priya");
  await user.click(screen.getByRole("button", { name: "Add Student" }));

  expect(screen.getByRole("listitem"))
    .toHaveTextContent("Priya");

  expect(screen.getByLabelText("Student Name")).toHaveValue("");
});