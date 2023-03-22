import { render, screen } from "@testing-library/react";

import Characters from "./Characters";

describe("App", () => {
  it("renders headline", () => {
    render(<Characters />);

    screen.debug();

    // check if App components renders headline
  });
});
