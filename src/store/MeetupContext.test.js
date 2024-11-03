// MeetupContext.test.js
import { act, render, screen } from "@testing-library/react";
import { MeetupProvider, useMeetups } from "./MeetupContext";

function TestComponent() {
  const { favorites, toggleFavorite, addFavorite } = useMeetups();
  
  return (
    <div>
      <button onClick={() => toggleFavorite({ id: 1, title: "Meetup Test" })}>
        Toggle Favorite
      </button>
      <button onClick={() => addFavorite({ id: 1, title: "Meetup Test" })}>
        Add Favorite
      </button>
      <p>Favorites Count: {favorites.length}</p>
    </div>
  );
}

test("toggles favorite item", () => {
  render(
    <MeetupProvider>
      <TestComponent />
    </MeetupProvider>
  );

  const toggleButton = screen.getByText("Toggle Favorite");
  const addButton = screen.getByText("Add Favorite");
  const favoritesCount = () => screen.getByText(/Favorites Count:/);


  expect(favoritesCount()).toHaveTextContent("Favorites Count: 0");


  act(() => addButton.click());
  expect(favoritesCount()).toHaveTextContent("Favorites Count: 1");

  
  act(() => toggleButton.click());
  expect(favoritesCount()).toHaveTextContent("Favorites Count: 0");
});
