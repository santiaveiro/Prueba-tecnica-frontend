// Favorites.js
import MeetupItem from "../components/meetups/MeetupItem";
import { useFavorites } from "../store/FavoriteContext";

export default function FavoritesPage() {
  const { favoriteMeetups } = useFavorites();

  return (
    <section>
      <h1>Favorites Page</h1>
      {favoriteMeetups.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        <ul>
          {favoriteMeetups.map((meetup) => (
            <MeetupItem key={meetup.id} data={meetup} />
          ))}
        </ul>
      )}
    </section>
  );
}
