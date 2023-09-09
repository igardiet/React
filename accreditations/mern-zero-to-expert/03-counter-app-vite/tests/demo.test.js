describe("Tests in <DemoComponent />", () => {
  test("This test must not fail", () => {
    // 1. Initialization
    const message = "Hello World";

    // 2. Stimulus
    const message2 = message.trim();

    // 3. Observe expected behaviour
    expect(message).toBe(message2);
  });
});
