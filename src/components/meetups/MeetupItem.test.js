// MeetupItem.test.js
import { fireEvent, render, screen } from "@testing-library/react";
import { MeetupProvider } from "../../store/MeetupContext";
import MeetupItem from "./MeetupItem";

test("toggles favorite status on button click", () => {
  const item = { id: 1, title: "Sample Meetup", description: "Sample description" };
  
  render(
    <MeetupProvider>
      <MeetupItem item={item} />
    </MeetupProvider>
  );

  const button = screen.getByText("Add to favorites");
  fireEvent.click(button);

  expect(screen.getByText("Remove from favorites")).toBeInTheDocument();
});
