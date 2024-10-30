import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "../../store/FavoriteContext";
import MainNavigation from "./MainNavigation";

test("renders MainNavigation with favorites count", () => {
  render(
    <BrowserRouter>
      <FavoriteProvider>
        <MainNavigation />
      </FavoriteProvider>
    </BrowserRouter>
  );

  

  expect(screen.getByText("React Meetups")).toBeInTheDocument();
  expect(screen.getByText("My Favorites")).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
});
