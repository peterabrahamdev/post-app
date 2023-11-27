import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  // useState's variable always has two data:
  // enteredBody -> current value
  // setEnteredBody -> state updating function
  // When you call the state updating function, React will rebuild the whole function
  // you called it in
  const [enteredBody, setEnteredBody] = useState("");
  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
