/**  * @jest-environment jsdom  */
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el <CounterApp />", () => {
  const initialValue = 0;
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 0 <CounterApp value={0}/>", () => {
    render(<CounterApp value={0} />);
    expect(screen.getByText(0)).toBeTruthy();
    // expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('0')
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("1")).toBeTruthy();
  });

  test("debe de decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    screen.debug();
    expect(screen.getByText("+1")).toBeTruthy();
  });

  test("debe de funcionar el boton de reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
