// Layout.test.js
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("renders layout component", () => {
  render(
    <Layout>
      <div>Test Content</div>
    </Layout>
  );

  expect(screen.getByTestId("layout")).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});
