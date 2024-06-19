import { useEffect, useState } from 'react';
import { getComments } from './acme-lib/api';
import { Comment } from './acme-lib/types';

const Articles = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments().then((response) => {
      if (response.status === 200) {
        setComments(response.data!.comments);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold my-4">Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.text}</h2>
            <p>By: {comment.author}</p>
            <p>Rating: {comment.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
