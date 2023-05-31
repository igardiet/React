import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Tests in 02-template-string", () => {
  test('getSaludo must return "Hello Inaki"', () => {
    const name = "Inaki";
    const message = getSaludo(name);

    expect(message).toBe(`Hello ${name}!`);
  });
});
