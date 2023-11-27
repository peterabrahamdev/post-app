import classes from './Post.module.css'

interface PostProps {
  author: string;
  body: string;
}

function Post(props: PostProps) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Post;
