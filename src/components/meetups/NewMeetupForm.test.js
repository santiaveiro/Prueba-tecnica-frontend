
import { fireEvent, render, screen } from "@testing-library/react";
import { MeetupProvider } from "../../store/MeetupContext";
import NewMeetupForm from "./NewMeetupForm";

test("submits form and displays success message", () => {
  render(
    <MeetupProvider>
      <NewMeetupForm />
    </MeetupProvider>
  );

  fireEvent.change(screen.getByLabelText("Meetup Title"), { target: { value: "New Meetup" } });
  fireEvent.click(screen.getByText("Add Meetup"));

  expect(screen.getByText("New meetup added successfully")).toBeInTheDocument();
});
