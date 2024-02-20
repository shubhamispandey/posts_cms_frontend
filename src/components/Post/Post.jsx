import React from "react";
import { useSelector } from "react-redux";
import {
  DeleteOutlineOutlined,
  EditOutlined,
  KeyboardArrowRightOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import PostAvatar from "../../assets/avatar.jpg";
import bg1 from "../../assets/post-bg-01.webp";
import bg2 from "../../assets/post-bg-02.webp";
import bg3 from "../../assets/post-bg-03.webp";
import bg4 from "../../assets/post-bg-04.webp";
import styles from "./Post.module.css";
import usePosts from "../../hooks/usePosts";

const Post = ({
  post,
  id,
  isVisibleSensitiveData = true,
  setOpenModal,
  setEditModalId,
}) => {
  const users = useSelector((state) => state.users.users);

  const loading = useSelector((state) => state.posts.loading);
  const { removePost } = usePosts();

  if (!post) {
    return null;
  }

  const { userId, title, body } = post;
  const truncatedTitle = title.slice(0, 60);
  const truncatedBody = body.slice(0, 60);
  const user = users.find((user) => user.id === userId);

  const handleEditPost = () => {
    setOpenModal(true);
    setEditModalId(post.id);
  };

  const handleDeletePost = async () => {
    await removePost(post.id);
  };

  return (
    <div className={styles.Post}>
      {isVisibleSensitiveData && (
        <div className={styles.PostBtns}>
          <button className={styles.PostEditBtn} onClick={handleEditPost}>
            <EditOutlined />
          </button>
          <button className={styles.PostDeleteBtn} onClick={handleDeletePost}>
            {loading ? (
              <CircularProgress size={20} sx={{ color: "white" }} />
            ) : (
              <DeleteOutlineOutlined />
            )}
          </button>
        </div>
      )}

      <div className={styles.PostBg}>
        <img src={[bg1, bg2, bg3, bg4][id % 4]} alt="" />
      </div>
      <div className={styles.PostContent}>
        <div className={styles.PostContentAvatar}>
          <img src={PostAvatar} alt="" />
        </div>
        <h2 className={styles.PostContentTitle}>{truncatedTitle}</h2>
        <p className={styles.PostContentDesc}>{truncatedBody}</p>
        <div className={styles.PostContentBottom}>
          <div className={styles.PostContentUser}>
            <Person2Outlined />
            <p>{user?.name}</p>
          </div>
          {isVisibleSensitiveData && (
            <button className={styles.PostContentBtn}>
              <KeyboardArrowRightOutlined />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
