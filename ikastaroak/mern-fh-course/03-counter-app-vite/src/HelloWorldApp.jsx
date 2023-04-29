import "./styles.css";

const newMessage = {
  message: "Hello World",
  title: "Title example",
};

const result = (a, b, c, d) => {
  return (a * b + c) / d;
};

export const HelloWorldApp = () => {
  return (
    <>
      <h1>{result(1, 2, 3, 5)}</h1>
      <code>{JSON.stringify(newMessage)}</code>
      <p>First paragraph</p>
    </>
  );
};
