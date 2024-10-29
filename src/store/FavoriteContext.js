import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favoriteMeetups, setFavoriteMeetups] = useState([]);

  function addFavorite(meetup) {
    setFavoriteMeetups((prevFavorites) => [...prevFavorites, meetup]);
  }

  function removeFavorite(meetupId) {
    setFavoriteMeetups((prevFavorites) =>
      prevFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  }

  function isFavorite(meetupId) {
    return favoriteMeetups.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoriteContext.Provider
      value={{ favoriteMeetups, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}
