import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Cart from "./Cart";

test("updates cart count", async () => {
  const user = userEvent.setup();
  render(<Cart />);

  await user.click(
    screen.getByRole("button", { name: "Add to Cart" })
  );

  expect(screen.getByText("Cart Items: 1"))
    .toBeInTheDocument();
});