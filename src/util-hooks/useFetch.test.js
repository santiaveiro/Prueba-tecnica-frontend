// useFetch.test.js
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { useFetch } from "./useFetch";

// Hook de prueba usando un componente de prueba para `useFetch`
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

    // Espera a que el hook cargue los datos
    await waitFor(() => expect(getByText("Mocked Meetup")).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("/data.json");
  });

  test("handles fetch error", async () => {
    // Silenciar console.error temporalmente
    const originalError = console.error;
    console.error = jest.fn();

    fetch.mockRejectedValueOnce(new Error("Fetch failed"));

    const { getByText } = render(<TestComponent url="/data.json" />);

    // Espera a que el hook trate de cargar y falle
    await waitFor(() => expect(getByText("Loading...")).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledWith("/data.json");

    // Restaurar console.error después de la prueba
    console.error = originalError;
  });
});
