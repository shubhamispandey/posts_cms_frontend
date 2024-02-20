import { useDispatch } from "react-redux";
import {
  setError,
  setLoading,
  setPosts,
  putPost,
  deletePost,
} from "../redux/Slices/postSlice";
import useAlert from "./useAlert";
import getPostsService from "../services/getPosts";
import updatePostService from "../services/updatePost";
import removePostService from "../services/deletePost";
import { useCallback } from "react";

const usePosts = () => {
  const dispatch = useDispatch();
  const { setAlertData } = useAlert();

  const addPosts = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const data = await getPostsService();
      dispatch(setPosts(data));
    } catch (error) {
      dispatch(setError(error.message || "Failed to find posts"));
      setAlertData(error.message, "error", true);
    }
  }, [dispatch, setAlertData]);
  const updatePost = useCallback(
    async (id, data) => {
      try {
        dispatch(setLoading(true));
        const response = await updatePostService(id, data);
        dispatch(putPost(response));
      } catch (error) {
        dispatch(setError(error.message || "Failed to update post"));
        setAlertData(error.message, "error", true);
      }
    },
    [dispatch, setAlertData]
  );

  const removePost = useCallback(
    async (id) => {
      try {
        dispatch(setLoading(true));
        await removePostService(id);
        dispatch(deletePost(id));
      } catch (error) {
        dispatch(setError(error.message || "Failed to update post"));
        setAlertData(error.message, "error", true);
      }
    },
    [dispatch, setAlertData]
  );

  return { addPosts, updatePost, removePost };
};

export default usePosts;
