import { createContext, useContext, useState } from "react";
import { useFetch } from "../util-hooks/useFetch";

const MeetupContext = createContext();

export function MeetupProvider({ children }) {
  const { data, setData } = useFetch({ url: "/data.json" });
  const [favorites, setFavorites] = useState([]);

  const addNewMeetup = (newMeetup) => {
    if (typeof setData === "function") {
      setData((prevData) => [...(prevData || []), newMeetup]);
    } else {
      console.error("setData no es una función");
    }
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  const addFavorite = (item) => {
    if (!isFavorite(item.id)) {
      setFavorites((prev) => [...prev, item]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const toggleFavorite = (item) => {
    isFavorite(item.id) ? removeFavorite(item.id) : addFavorite(item);
  };

  return (
    <MeetupContext.Provider
      value={{
        data,
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        addNewMeetup,
      }}
    >
      {children}
    </MeetupContext.Provider>
  );
}

export function useMeetups() {
  return useContext(MeetupContext);
}
