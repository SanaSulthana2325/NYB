import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import EmailForm from "./EmailForm";

test("shows error for invalid email", async () => {
  const user = userEvent.setup();
  render(<EmailForm />);

  await user.click(
    screen.getByRole("button", { name: "Continue" })
  );

  expect(screen.getByRole("alert"))
    .toHaveTextContent("Please enter a valid email address");
});