import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should appear in the document", () => {
    render(<Button />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});