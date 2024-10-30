
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { useFetch } from "./useFetch";


function TestComponent({ url }) {
  const { data } = useFetch({ url });
  return (
    <div>
      {data ? (
        data.map((item) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

global.fetch = jest.fn();

describe("useFetch", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  test("returns data after successful fetch", async () => {
    const mockData = [{ id: 1, title: "Mocked Meetup" }];
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const { getByText } = render(<TestComponent url="/data.json" />);

    
    await waitFor(() => expect(getByText("Mocked Meetup")).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("/data.json");
  });

  test("handles fetch error", async () => {
   
    const originalError = console.error;
    console.error = jest.fn();

    fetch.mockRejectedValueOnce(new Error("Fetch failed"));

    const { getByText } = render(<TestComponent url="/data.json" />);

    
    await waitFor(() => expect(getByText("Loading...")).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("/data.json");

    
    console.error = originalError;
  });
});
