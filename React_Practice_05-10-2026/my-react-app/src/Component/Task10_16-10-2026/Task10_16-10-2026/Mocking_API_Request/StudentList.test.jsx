import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { getStudents } from "./StudentApi";
import StudentList from "./StudentList";

vi.mock("./StudentApi.jsx", () => ({
  getStudents: vi.fn(),
}));

test("displays students returned by the API", async () => {
  vi.mocked(getStudents).mockResolvedValue([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
  ]);

  render(<StudentList />);

  expect(await screen.findByText("Rahul")).toBeInTheDocument();
  expect(screen.getByText("Priya")).toBeInTheDocument();
});