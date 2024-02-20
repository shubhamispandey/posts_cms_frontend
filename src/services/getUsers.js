import axios from "axios";

const getUsers = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  return await response.data;
};
export default getUsers;
