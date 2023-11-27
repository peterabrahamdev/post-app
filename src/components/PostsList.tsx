import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

interface Post {
  body: string;
  author: string;
}

function PostsList({
  isPosting,
  onStopPosting,
}: {
  isPosting: boolean;
  onStopPosting: () => void;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  function addPostHandler(postData: Post) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          ></NewPost>
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={Math.random()} author={post.author} body={post.body} />
          ))
        ) : (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        )}
      </ul>
    </>
  );
}

export default PostsList;
