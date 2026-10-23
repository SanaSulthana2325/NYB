import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { getStudents } from "../Mocking_API_Request/StudentApi";
import StudentStatus from "./StudentStatus";

vi.mock("../Mocking_API_Request/StudentApi.jsx", () => ({
  getStudents: vi.fn(),
}));

test("shows loading and then student data", async () => {
  let resolveRequest;

  vi.mocked(getStudents).mockReturnValue(
    new Promise((resolve) => {
      resolveRequest = resolve;
    })
  );

  render(<StudentStatus />);

  expect(screen.getByText("Loading students..."))
    .toBeInTheDocument();

  resolveRequest([{ id: 1, name: "Rahul" }]);

  expect(await screen.findByText("Rahul"))
    .toBeInTheDocument();
});

test("shows an error when the request fails", async () => {
  vi.mocked(getStudents).mockRejectedValue(
    new Error("Network error")
  );

  render(<StudentStatus />);

  expect(await screen.findByText("Unable to load students."))
    .toBeInTheDocument();
});