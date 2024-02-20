import axios from "axios";

const updatePost = async (id, data) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    data
  );
  return await response.data;
};
export default updatePost;
