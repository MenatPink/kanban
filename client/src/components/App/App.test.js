import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
  it("should appear in the document", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
