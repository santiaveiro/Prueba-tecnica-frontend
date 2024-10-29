// MeetupItem.js
import { useFavorites } from "../../store/FavoriteContext";
import Card from "../ui/Card";
import { useFetch } from "./../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";

export default function MeetupItem() {
  const { data } = useFetch({ url: "/data.json" });
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (!data) return <p>Loading...</p>;
  let [item] = data;
  
  const itemIsFavorite = isFavorite(item.id);

  function toggleFavoriteStatus() {
    if (itemIsFavorite) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatus}>
            {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
