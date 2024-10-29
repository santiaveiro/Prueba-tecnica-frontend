import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * Función de ayuda para encontrar elementos por el atributo de prueba
 * @function findByTestAttr
 * @param {string} val - Valor del atributo de prueba
 */
const findByTestAttr = (val) => screen.getByTestId(val);

test("renders App without crashing", () => {
  render(<App />);
  const appElement = findByTestAttr("app");
  expect(appElement).toBeInTheDocument();
});

test("renders the navigation component", () => {
  render(<App />);
  // Verificar que el componente MainNavigation esté en el documento
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

test("renders the Layout component", () => {
  render(<App />);
  // Verificar que el componente Layout esté en el documento usando data-test
  const layoutElement = findByTestAttr("layout");
  expect(layoutElement).toBeInTheDocument();
});
