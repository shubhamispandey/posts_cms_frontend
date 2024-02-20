import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "../../../components/Post/Post";
import usePosts from "../../../hooks/usePosts";
import styles from "./Posts.module.css";

const Posts = () => {
  const { addPosts } = usePosts();

  useEffect(() => {
    (async () => await addPosts())();
  }, [addPosts]);
  const posts = useSelector((state) => state.posts.posts);
  return (
    <section className={styles.PostsWrapper}>
      <h2 className={styles.header}>USER POSTS</h2>
      <div className={styles.Posts}>
        {posts.slice(0, 3)?.map((post, key) => (
          <Post post={post} key={key} id={key} isVisibleSensitiveData={false} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
