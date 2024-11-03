// App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main navigation and layout in App component", () => {
  render(<App />);
  
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
