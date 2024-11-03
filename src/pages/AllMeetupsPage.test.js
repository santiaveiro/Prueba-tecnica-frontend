// AllMeetupsPage.test.js
import { render, screen } from "@testing-library/react";
import { MeetupProvider } from "../store/MeetupContext";
import AllMeetupsPage from "./AllMeetupsPage";

test("renders AllMeetupsPage with loading message if data is not available", () => {
  render(
    <MeetupProvider>
      <AllMeetupsPage />
    </MeetupProvider>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
