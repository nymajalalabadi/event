import classes from './comment-list.module.css';

function CommentList( props ) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map((comment: { id: string, name: string, text: string }) => (
        <li key={comment.id}>
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