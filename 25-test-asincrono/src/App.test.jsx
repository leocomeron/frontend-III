import axios from "axios";
import App from "./App";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

jest.mock("axios");

const fakeUsers = [
  { id: 1, name: "Leanne Graham", username: "Bret" },
  { id: 2, name: "Other Name", username: "Name" },
  { id: 3, name: "Another name", username: "SecondName" },
];

describe("App", () => {
  describe("Cuando finaliza la carga", () => {
    test("No debe mostrar el cargando", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      await waitForElementToBeRemoved(
        screen.queryByText("Cargando usuarios...")
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });
    test("Debe mostrar el titulo de Usuarios", async () => {});

    test("Debe mostrar el username", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      const bretName = await screen.findByText("@Bret");

      expect(bretName).toBeInTheDocument();
    });

    test("Debe mostrar el nombre del usuario", async () => {});
  });
});
