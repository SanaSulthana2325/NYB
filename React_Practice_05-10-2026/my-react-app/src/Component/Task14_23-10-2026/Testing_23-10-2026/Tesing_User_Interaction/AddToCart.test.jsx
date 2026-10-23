import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import AddToCart from "./AddToCart";

test("shows confirmation after clicking", async () => {
  const user = userEvent.setup();
  render(<AddToCart />);

  await user.click(
    screen.getByRole("button", { name: "Add to Cart" })
  );

  expect(
    screen.getByText("Product added successfully!")
  ).toBeInTheDocument();
});