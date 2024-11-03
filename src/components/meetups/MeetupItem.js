import { useMeetups } from "../../store/MeetupContext";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export default function MeetupItem({ item }) {
  const { toggleFavorite, isFavorite } = useMeetups();

  function toggleFavoriteStatus() {
    toggleFavorite(item);
  }

  const itemIsFavorite = isFavorite(item.id);

  return (
    <li className={classes.item} data-test="meet-up-item">
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
