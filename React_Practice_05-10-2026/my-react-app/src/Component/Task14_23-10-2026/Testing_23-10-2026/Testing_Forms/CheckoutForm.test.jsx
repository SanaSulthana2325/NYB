import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import CheckoutForm from "./CheckoutForm";

test("allows entering customer name", async () => {
  const user = userEvent.setup();
  render(<CheckoutForm />);

  const input = screen.getByRole("textbox", {
    name: "Customer Name"
  });

  await user.type(input, "Rahul");

  expect(input).toHaveValue("Rahul");
});