import { fireEvent, render, screen } from "@testing-library/react";
import { FavoriteProvider } from "../../store/FavoriteContext";
import MeetupItem from "./MeetupItem";

// Mock global de fetch para simular la respuesta de `useFetch`
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Mocked Meetup",
          image: "mocked-image-url",
          address: "123 Mocked Street",
          description: "This is a mocked meetup description."
        }
      ])
  })
);

// Mock de useFavorites para simular el comportamiento de favoritos
jest.mock("../../store/FavoriteContext", () => ({
  useFavorites: () => ({
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
    isFavorite: jest.fn(() => false), // Inicialmente, el item no está en favoritos
  })
}));

beforeEach(() => {
  fetch.mockClear(); // Asegura que cada prueba comienza con un fetch limpio
});

test("<MeetupItem/> renders without crashing", async () => {
  render(
    <FavoriteProvider>
      <MeetupItem />
    </FavoriteProvider>
  );

  // Verifica que el elemento principal de MeetupItem esté en el DOM
  const meetupItemElement = await screen.findByTestId("meet-up-item");
  expect(meetupItemElement).toBeInTheDocument();

  // Verificar que el título, dirección y descripción se renderizan correctamente
  expect(screen.getByText("Mocked Meetup")).toBeInTheDocument();
  expect(screen.getByText("123 Mocked Street")).toBeInTheDocument();
  expect(screen.getByText("This is a mocked meetup description.")).toBeInTheDocument();
});

test("toggles favorite status on button click", async () => {
  const addFavoriteMock = jest.fn();
  const removeFavoriteMock = jest.fn();

  // Mock específico para esta prueba
  jest.mock("../../store/FavoriteContext", () => ({
    useFavorites: () => ({
      addFavorite: addFavoriteMock,
      removeFavorite: removeFavoriteMock,
      isFavorite: jest.fn(() => false), // Inicialmente, el item no está en favoritos
    })
  }));

  render(
    <FavoriteProvider>
      <MeetupItem />
    </FavoriteProvider>
  );

  // Espera a que el componente cargue los datos de fetch
  await screen.findByTestId("meet-up-item");

  // Verificamos el botón y hacemos clic en él
  const button = screen.getByRole("button", { name: /add to favorites/i });
  fireEvent.click(button);

  // Verificamos que se haya llamado la función addFavorite
  expect(addFavoriteMock).toHaveBeenCalled();
});
