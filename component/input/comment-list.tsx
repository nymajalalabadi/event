import classes from './comment-list.module.css';

type Comment = {
  _id: string;
  name: string;
  text: string;
};

type CommentListProps = {
  comments: Comment[];
};

function CommentList(props: CommentListProps) {
  const { comments } = props;
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {comments?.map((comment: { _id: string, name: string, text: string }) => (
        <li key={comment._id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;