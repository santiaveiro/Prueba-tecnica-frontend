// MainNavigation.test.js
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MeetupProvider } from "../../store/MeetupContext";
import MainNavigation from "./MainNavigation";

test("renders navigation header with links", () => {
  render(
    <BrowserRouter>
      <MeetupProvider>
        <MainNavigation />
      </MeetupProvider>
    </BrowserRouter>
  );

  expect(screen.getByText("All Meetups")).toBeInTheDocument();
  expect(screen.getByText("Add New Meetup")).toBeInTheDocument();
  expect(screen.getByText("My Favorites")).toBeInTheDocument();
});
