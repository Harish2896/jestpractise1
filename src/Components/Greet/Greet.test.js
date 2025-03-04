import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders string Hello", () => {
    render(<Greet />);
    const greetMsg = screen.getByText(/Hello/);
    expect(greetMsg).toBeInTheDocument();
  });

  //   describe("Nested", () => {
  //     test("renders hello and given name", () => {
  //       render(<Greet name="harish" />);
  //       const greetMsgWithName = screen.getByText(/hello harish/i);
  //       expect(greetMsgWithName).toBeInTheDocument();
  //     });
  //   });
});

// "coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/Components/**/*.{js,jsx}' --collectCoverageFrom='!src/Components/**/*.{stories,constants,test,spec}.{js,jsx}'"
