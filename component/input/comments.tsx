import { useState, useEffect, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { NotificationContext } from '@/store/notifiaction-context';


function Comments(props: { eventId: string }) {
  const { eventId } = props;

  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then(response => response.json())
        .then(data => {
          setComments(data.comments);
          setIsFetchingComments(false);
        })
        .catch(error => {
          setIsFetchingComments(false);
          console.error('Failed to fetch comments:', error);
        });
    }
  }, [showComments, eventId]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => {
      const newStatus = !prevStatus;
      if (newStatus) {
        setIsFetchingComments(true);
      }
      return newStatus;
    });
  }

  function addCommentHandler(commentData: { email: string; name: string; text: string }) {
    // send data to API
    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Your comment is currently being stored into a database.',
      status: 'pending',
    });

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
      }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(data => {
            throw new Error(data.message || 'Failed to add comment.');
          });
        }
      }).then(() => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Your comment has been stored into a database.',
          status: 'success',
        });
      }).catch(error => {
        notificationCtx.showNotification({
          title: 'Error!',
        message: error.message || 'Failed to add comment.',
        status: 'error',
      });
    });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList comments={comments} />}
      {showComments && isFetchingComments && <p>Loading comments...</p>}
    </section>
  );
}

export default Comments;