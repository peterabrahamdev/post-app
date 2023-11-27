import { ChangeEventHandler, MouseEventHandler } from "react";
import classes from "./NewPost.module.css";

interface NewPostProps {
  onBodyChange: ChangeEventHandler<HTMLTextAreaElement>;
  onAuthorChange: ChangeEventHandler<HTMLInputElement>;
  onCancel: MouseEventHandler;
}

function NewPost(props: NewPostProps) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>{}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
