import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("renders Layout component with children", () => {
  render(
    <Layout>
      <div>Child Content</div>
    </Layout>
  );
  expect(screen.getByText("Child Content")).toBeInTheDocument();
  expect(screen.getByTestId("layout")).toBeInTheDocument();
});
