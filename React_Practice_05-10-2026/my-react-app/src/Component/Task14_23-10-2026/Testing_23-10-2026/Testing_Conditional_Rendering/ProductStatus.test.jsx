import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ProductStatus from "./ProductStatus";

test("shows Available when in stock", () => {
  render(<ProductStatus inStock={true} />);

  expect(screen.getByText("Available"))
    .toBeInTheDocument();
});

test("shows Out of Stock when unavailable", () => {
  render(<ProductStatus inStock={false} />);

  expect(screen.getByText("Out of Stock"))
    .toBeInTheDocument();
});