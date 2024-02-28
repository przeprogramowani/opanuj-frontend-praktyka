// @ts-ignore-next-line
import bookshelf from '../media/image.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Comment } from '../types/Comment';
import { Article } from '../types/Article';
import { Author } from '../types/Authors';
import { Bootstrap } from '../types/Bootstrap';
import { useLoaderData } from 'react-router-dom';

export function SlowApp() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState('');

  const { batchAPI, commentsAPI } = useLoaderData() as Bootstrap;

  useEffect(() => {
    axios.get(batchAPI).then(({ data: { articles, authors, comments } }) => {
      setArticles(articles);
      setAuthors(authors);
      setComments(comments);
    });
  }, []);

  function storeNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post(commentsAPI, {
        comment: newComment,
        rating: newRating,
      })
      .then(() => {
        setComments([
          ...comments,
          {
            id: comments.length + 1,
            text: newComment,
            author: 'John Doe',
            rating: parseInt(newRating, 10),
          },
        ]);
        setNewComment('');
        setNewRating('');
      });
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:grid md:grid-cols-4 gap-x-8">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold">Library</h1>
          <img className="rounded-xl shadow" src={bookshelf} alt="Bookshelf" />
          {comments.length > 0 && (
            <h2 className="font-bold text-xl my-2">Comments</h2>
          )}
          {comments.map((comment) => (
            <div
              className="bg-violet-400 rounded-xl text-white p-4 mb-2 shadow"
              key={comment.id}
            >
              <p className="italic">"{comment.text}"</p>
              <p className="text-sm text-violet-900">
                {comment.author} - Rating {comment.rating}/5
              </p>
            </div>
          ))}
          {comments.length > 0 && (
            <form onSubmit={(e) => storeNewComment(e)}>
              <div className="flex flex-col">
                <input
                  value={newComment}
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full p-2 rounded-lg mb-2"
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <input
                  value={newRating}
                  type="text"
                  placeholder="Rating"
                  className="w-full p-2 w-12 rounded-lg"
                  onChange={(e) => setNewRating(e.target.value)}
                />
              </div>
              <button className="bg-violet-400 text-white p-2 rounded-lg mt-2">
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="col-span-3">
          {authors.length > 0 && (
            <h2 className="font-bold text-xl mb-2">Recommended Authors</h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {authors.map((author) => (
              <div
                className="bg-blue-200 p-2 rounded-lg shadow"
                key={author.id}
              >
                <div className="flex flex-row items-center mb-2">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${author.id}.jpg`}
                    className="w-4 h-4 mr-1 rounded-full"
                  />
                  <p>{author.name}</p>
                </div>
                <p className="text-xs text-blue-600">
                  Comments: {author.comments}, Articles: {author.articles}
                </p>
              </div>
            ))}
          </div>

          {articles.length > 0 && (
            <h2 className="font-bold text-xl mt-2">Articles</h2>
          )}
          {articles.map((article) => (
            <div
              className="bg-white mt-2 p-2 rounded-lg shadow"
              key={article.id}
            >
              <h2 className="font-bold">{article.title}</h2>
              <p>{article.content}</p>
              <div className="flex flex-row items-center mb-2">
                <img
                  src={`https://randomuser.me/api/portraits/women/${article.id}.jpg`}
                  className="w-4 h-4 mr-1 rounded-full"
                />
                <p>{article.author}</p>
              </div>
            </div>
          ))}
          {authors.length > 0 && (
            <p className="text-right mt-4">
              Created by {authors.length} authors
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
