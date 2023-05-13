// ONE WAY
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });

// SECOND WAY
// async function getUsers() {
const getUsers = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();
  return data;
};
getUsers().then((response) => {
  console.log(response);
});
