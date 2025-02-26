import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("renders string Hello", () => {
  render(<Greet />);
  const greetMsg = screen.getByText(/hello/i);
  expect(greetMsg).toBeInTheDocument();
});

test("renders hello followed by given name", () => {
  render(<Greet name="harish" />);
  const greetMsgWithName = screen.getByText(/hello harish/i);
  expect(greetMsgWithName).toBeInTheDocument();
});
