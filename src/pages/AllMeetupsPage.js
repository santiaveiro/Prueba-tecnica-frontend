import MeetupItem from "../components/meetups/MeetupItem";
import { useMeetups } from "../store/MeetupContext";

export default function AllMeetupsPage() {
  const { data } = useMeetups();


  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {data.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
