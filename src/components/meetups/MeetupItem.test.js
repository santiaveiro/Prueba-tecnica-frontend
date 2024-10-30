import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "../../store/FavoriteContext";
import MeetupItem from "./MeetupItem";

jest.mock("../../util-hooks/useFetch", () => ({
  useFetch: () => ({
    data: [
      {
        id: 1,
        title: "Mocked Meetup",
        address: "123 Mock St.",
        description: "This is a mocked meetup",
        image: "https://via.placeholder.com/150",
      },
    ],
  }),
}));

test("renders MeetupItem and toggles favorites", () => {
  render(
    <BrowserRouter>
      <FavoriteProvider>
        <MeetupItem />
      </FavoriteProvider>
    </BrowserRouter>
  );

  expect(screen.getByText("Add to favorites")).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /add to favorites/i });
  fireEvent.click(button);

  expect(screen.getByText("Remove from favorites")).toBeInTheDocument();
});
