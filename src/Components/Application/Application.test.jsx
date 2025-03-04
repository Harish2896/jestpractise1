import { render, screen } from "@testing-library/react";

import { Application } from "./Application";

describe("Application", () => {
  test("render application", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();
  });
});
