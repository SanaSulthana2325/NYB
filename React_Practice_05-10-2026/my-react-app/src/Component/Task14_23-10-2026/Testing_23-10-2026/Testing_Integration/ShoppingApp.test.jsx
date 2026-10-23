import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import ShoppingApp from "./ShoppingApp";

test("searches products and adds one to cart", async () => {
  const user = userEvent.setup();
  render(<ShoppingApp />);

  await user.type(
    screen.getByRole("textbox", { name: "Search Products" }),
    "Mouse"
  );

  expect(screen.getByText("Mouse")).toBeInTheDocument();
  expect(screen.queryByText("Laptop")).not.toBeInTheDocument();

  const product = screen.getByText("Mouse").parentElement;

  await user.click(
    within(product).getByRole("button", { name: "Add to Cart" })
  );

  expect(screen.getByText("Cart Items: 1")).toBeInTheDocument();
});