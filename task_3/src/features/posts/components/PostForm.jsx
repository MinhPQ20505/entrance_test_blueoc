import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../postsSlice";

function PostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) return;

    const newPost = {
      title,
      body,
    };

    dispatch(addPost(newPost));

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Add Post</button>
      </div>
    </form>
  );
}

export default PostForm;
