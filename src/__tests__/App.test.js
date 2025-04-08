import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);

  /*
    Uncomment the line below to see the DOM elements being returned
    by the App component in your terminal when you run the tests
  */
   // screen.debug();

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByTestId("home")).toBeInTheDocument();
  expect(screen.getByTestId("about")).toBeInTheDocument();
});
