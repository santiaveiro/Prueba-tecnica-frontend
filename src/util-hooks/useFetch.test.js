// useFetch.test.js
import { render, screen, waitFor } from "@testing-library/react";
import { useFetch } from "./useFetch";

beforeEach(() => {

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, title: "Meetup Test" }]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

function TestComponent({ url }) {
  const { data } = useFetch({ url });
  
  return (
    <div>
      {data ? (
        <p data-testid="fetch-result">{JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

test("fetches and sets data correctly", async () => {
  render(<TestComponent url="/data.json" />);

  await waitFor(() => {
    
    expect(screen.getByTestId("fetch-result")).toHaveTextContent(
      JSON.stringify([{ id: 1, title: "Meetup Test" }])
    );
  });
});
