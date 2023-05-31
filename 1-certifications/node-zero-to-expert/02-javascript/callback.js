// setTimeout(() => {
//   console.log('Callback is a function sent as an argument to another function, and executed in a determined moment');
// }, 1000);

const getUserById = (id, callback) => {
  const user = {
    id,
    name: 'Pablo honey',
  };
  setTimeout(() => {
    callback(user);
  }, 1000);
};
getUserById(10, ({ id, name }) => {
  console.log(id);
  console.log(name.toUpperCase());
});
