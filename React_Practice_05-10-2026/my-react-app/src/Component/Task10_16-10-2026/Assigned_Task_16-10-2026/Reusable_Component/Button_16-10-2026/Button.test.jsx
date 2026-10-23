import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import Button from "./Button";

test("displays the button text", () => {
  render(<Button>Save Student</Button>);

  expect(
    screen.getByRole("button", { name: "Save Student" })
  ).toBeInTheDocument();
});

test("calls the click handler", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<Button onClick={handleClick}>Add Student</Button>);

  await user.click(
    screen.getByRole("button", { name: "Add Student" })
  );

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("disables the button when requested", () => {
  render(<Button disabled>Save Student</Button>);

  expect(
    screen.getByRole("button", { name: "Save Student" })
  ).toBeDisabled();
});