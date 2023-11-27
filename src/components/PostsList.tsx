import { MouseEventHandler } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({
  isPosting,
  onStopPosting,
}: {
  isPosting: boolean;
  onStopPosting: () => void;
}) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting}></NewPost>
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out my website!" />
      </ul>
    </>
  );
}

export default PostsList;
