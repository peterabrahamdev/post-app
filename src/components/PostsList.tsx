import { MouseEventHandler, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({
  isPosting,
  onStopPosting,
}: {
  isPosting: boolean;
  onStopPosting: MouseEventHandler;
}) {
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

  let modalContent: JSX.Element | null = null;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
          onCancel={onStopPosting}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out my website!" />
      </ul>
    </>
  );
}

export default PostsList;
