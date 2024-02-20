import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import SearchAndFilter from "../../components/SearchAndFilter/SearchAndFilter";
import Modal from "../../components/Modal/Modal";
import usePosts from "../../hooks/usePosts";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const filter = useSelector((state) => state.filter);
  const user = useSelector((state) => state.user.user);
  const [openModal, setOpenModal] = useState(false);
  const [editModalId, setEditModalId] = useState(0);
  const { addPosts } = usePosts();

  useEffect(() => {
    (async () => await addPosts())();
  }, [addPosts]);
  return (
    <main>
      <div className={styles.PostsWrapper}>
        <SearchAndFilter />
        <div className={styles.Posts}>
          {posts
            ?.filter(
              (post) =>
                post.title.includes(filter.searchtext) ||
                post.body.includes(filter.searchtext)
            )
            ?.filter(
              (post) =>
                filter.togglePostsFilter === "all" || user.id === post.userId
            )
            ?.sort((p1, p2) => p2.id - p1.id)
            ?.map((post, key) => (
              <Post
                post={post}
                key={key}
                id={key}
                setOpenModal={setOpenModal}
                setEditModalId={setEditModalId}
              />
            ))}
        </div>
      </div>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        editModalId={editModalId}
      />
    </main>
  );
};

export default Posts;
