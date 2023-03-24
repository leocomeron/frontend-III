import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "../src/App";

describe("App", () => {
  test("renders back button", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const backButton = screen.getByText("Back");

    expect(backButton).toBeInTheDocument();
  });
});
