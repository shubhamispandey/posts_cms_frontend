import axios from "axios";

const getUser = async (username) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?username=${username}`
  );
  return await response.data;
};
export default getUser;
