import MeetupItem from "../components/meetups/MeetupItem";
import { useMeetups } from "../store/MeetupContext";

export default function FavoritesPage() {
  const { favorites } = useMeetups();

  return (
    <section>
      <h1>Favorites Page</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        <ul>
          {favorites.map((meetup) => (
            <MeetupItem key={meetup.id} item={meetup} />
          ))}
        </ul>
      )}
    </section>
  );
}
