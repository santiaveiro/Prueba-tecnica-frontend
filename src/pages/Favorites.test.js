import { render, screen } from "@testing-library/react";
import { MeetupProvider } from "../store/MeetupContext";
import FavoritesPage from "./Favorites";

test("renders FavoritesPage with no favorites initially", () => {
  render(
    <MeetupProvider>
      <FavoritesPage />
    </MeetupProvider>
  );

  expect(screen.getByText("No favorites yet. Start adding some!")).toBeInTheDocument();
});
