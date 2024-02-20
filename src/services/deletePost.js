import axios from "axios";

const updatePost = async (id) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return await response.data;
};
export default updatePost;
