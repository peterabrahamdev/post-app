import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Peter" body="React.js is awesome" />
      <Post author="Manuel" body="Check out my website!" />
    </ul>
  );
}

export default PostsList;
