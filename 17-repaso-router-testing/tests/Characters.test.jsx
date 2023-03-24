import { render, screen } from "@testing-library/react";
import Characters from "../src/components/Characters";
import fetch from "node-fetch";

globalThis.fetch = fetch;

describe("Characters", () => {
  test("renders headline", () => {
    render(<Characters />);

    const title = screen.getByText("Characters List");

    expect(title).toBeInTheDocument();
  });
});
