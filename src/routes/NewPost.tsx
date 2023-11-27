import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

interface NewPostProps {
  onAddPost: (postData: { body: string; author: string }) => void;
}

function NewPost(props: NewPostProps) {
  // useState's variable always has two data:
  // enteredBody -> current value
  // setEnteredBody -> state updating function
  // When you call the state updating function, React will rebuild the whole function
  // you called it in
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  function sumbitHandler(event: React.FormEvent<HTMLFormElement>) {
    // This prevents the browser from sending and generating an HTTP request. (React frontend library, cannot handle server-side requests)
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onAddPost(postData);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={sumbitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>{}</p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to='/' type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
