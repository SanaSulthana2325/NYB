import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

test("displays products returned by API", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mouse" }
      ]
    })
  );

  render(<ProductList />);

  expect(await screen.findByText("Laptop"))
    .toBeInTheDocument();

  expect(screen.getByText("Mouse"))
    .toBeInTheDocument();
});