import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return await response.data;
};
export default getPosts;
