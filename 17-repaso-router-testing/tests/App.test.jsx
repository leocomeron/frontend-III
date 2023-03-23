import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "../src/App";

describe("App", () => {
  it("renders headline", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const backButton = screen.queryByText("Back");

    expect(backButton).toBeInTheDocument();
  });
});
