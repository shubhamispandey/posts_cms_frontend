import axios from "axios";
import { getApiUrl } from "../utils/base";

const login = async (username) => {
  const response = await axios.post(getApiUrl("login"), { username });
  return await response.data;
};
export default login;
