import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Characters from "../src/components/Characters";
import fetch from "node-fetch";

globalThis.fetch = fetch;

describe("Characters", () => {
  it("renders headline", () => {
    render(<Characters />);

    const title = screen.getByText("Characters List");

    expect(title).toBeInTheDocument();

    // check if App components renders headline
  });
});
