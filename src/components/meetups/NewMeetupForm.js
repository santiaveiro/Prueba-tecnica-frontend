import { useState } from "react";
import { useMeetups } from "../../store/MeetupContext";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const { addNewMeetup } = useMeetups(); 
  const [newMeetup, setNewMeetup] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); 

  function submitHandler(event) {
    event.preventDefault();
    addNewMeetup(newMeetup);
    setNewMeetup({}); 
    setSuccessMessage("New meetup added successfully"); 

    
    setTimeout(() => setSuccessMessage(""), 3000);
  }

  const changeHandler = (event) => {
    const { id, value } = event.target;
    setNewMeetup((prevData) => ({
      ...prevData,
      id: Date.now(),
      [id]: value,
    }));
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            value={newMeetup.title || ""}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            value={newMeetup.image || ""}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            value={newMeetup.address || ""}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={newMeetup.description || ""}
            onChange={changeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
      {successMessage && <p className={classes.success}>{successMessage}</p>} 
    </Card>
  );
}
