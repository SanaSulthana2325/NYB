import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import ProductsPage from "./ProductsPage";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

test("shows error when API request fails", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockRejectedValue(new Error("Network error"))
  );

  render(<ProductsPage />);

  expect(await screen.findByRole("alert"))
    .toHaveTextContent("Failed to load products");
});