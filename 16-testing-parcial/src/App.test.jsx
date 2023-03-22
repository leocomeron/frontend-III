import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Should see the Register button", () => {
  // Arrange
  render(<App />);

  // Act
  const buttonElement = screen.queryByText("Registrar");

  // Assert
  expect(buttonElement).toBeInTheDocument();
});

test("Error text should be display when some input does not fill the requirements", () => {
  render(<App />);

  // Act
  const nameInput = screen.getByPlaceholderText("Nombre...");
  fireEvent.change(nameInput, { target: { value: "L" } });

  const courseInput = screen.getByPlaceholderText("Curso...");
  fireEvent.change(courseInput, { target: { value: "Frontend III" } });

  const buttonElement = screen.getByText("Registrar");
  fireEvent.click(buttonElement);

  const errorText = screen.queryByText(
    "Por favor chequea que la información sea correcta"
  );

  /// Assert
  expect(errorText).toBeInTheDocument();
});

test("Error text should NOT be display when all inpust fill the requirements", () => {
  render(<App />);

  // Act
  const nameInput = screen.getByPlaceholderText("Nombre...");
  fireEvent.change(nameInput, { target: { value: "Leandro" } });

  const courseInput = screen.getByPlaceholderText("Curso...");
  fireEvent.change(courseInput, { target: { value: "Frontend III" } });

  const buttonElement = screen.getByText("Registrar");
  fireEvent.click(buttonElement);

  const errorText = screen.queryByText(
    "Por favor chequea que la información sea correcta"
  );

  /// Assert
  expect(errorText).not.toBeInTheDocument();
});

test("Card component should be displayed", () => {
  //Arrange
  render(<App />);

  // Act
  const nameInput = screen.getByPlaceholderText("Nombre...");
  fireEvent.change(nameInput, { target: { value: "Leandro" } });

  const courseInput = screen.getByPlaceholderText("Curso...");
  fireEvent.change(courseInput, { target: { value: "Frontend III" } });

  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);

  const cardComponent = screen.getByTestId("card-container");

  /// Assert
  expect(cardComponent).toBeInTheDocument();
});
