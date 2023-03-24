import { fireEvent, render, screen } from "@testing-library/react";
import ItemList from ".";

const product = {
  id: 1,
  title: "Mouse MO251",
  price: "24,99",
  brand: "Multilaser",
  image: "https://m.media-amazon.com/images/I/615iBXULp8L._AC_SL1000_.jpg",
  description: "Descripción mockeada",
};

describe("<ItemList/>", () => {
  it("Should render correctly component", () => {
    render(<ItemList product={product} />);

    expect(screen.getByAltText("Mouse MO251")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { title: /Mouse MO251/i })
    ).toBeInTheDocument();

    expect(screen.getByText("$24,99")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { title: /Ver detalles/i })
    ).toBeInTheDocument();
  });

  it("Should click the button", () => {
    const onClick = jest.fn();
    render(<ItemList product={product} onClick={onClick} />);
    fireEvent.click(screen.getByText(/Ver detalles/i));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
