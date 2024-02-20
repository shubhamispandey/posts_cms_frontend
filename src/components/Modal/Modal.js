import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  CircularProgress,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  DialogTitle,
} from "@mui/material";
import usePosts from "../../hooks/usePosts";
import styles from "./Modal.module.css";

export default function FormDialog({ open, setOpen, editModalId }) {
  const posts = useSelector((state) => state.posts);

  const postData = useMemo(() => {
    return (
      posts.posts.find((post) => post.id === editModalId) || {
        title: "",
        body: "",
      }
    );
  }, [posts, editModalId]);

  const [postStateData, setPostStateData] = useState(postData);

  const { updatePost } = usePosts();

  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    await updatePost(editModalId, postStateData);
    setPostStateData({ userId: null, id: null, title: "", body: "" });
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostStateData({ ...postStateData, [name]: value });
  };

  useEffect(() => {
    setPostStateData(postData);
  }, [editModalId, postData]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className={styles.Title}>Edit Form</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label="Post Title"
          type="text"
          fullWidth
          variant="standard"
          className={styles.Input}
          value={postStateData.title}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="body"
          name="body"
          label="Post Body"
          type="text"
          fullWidth
          variant="standard"
          className={styles.Input}
          value={postStateData.body}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className={styles.Btn}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={handleUpdate}
          className={styles.Btn}
        >
          {posts.loading ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : (
            "Update"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
