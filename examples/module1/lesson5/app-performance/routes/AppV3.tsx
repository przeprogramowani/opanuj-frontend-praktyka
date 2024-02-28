// @ts-ignore-next-line
import bookshelf from '../media/image-v2.png';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Author } from '../types/Authors';
import { Article } from '../types/Article';
import { Comment } from '../types/Comment';
import { Bootstrap } from '../types/Bootstrap';
import { useLoaderData } from 'react-router-dom';
import { commentsReducer } from '../reducers/commentsReducer';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function useAuthorsQuery(authorsAPI: string) {
  return useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const response = await axios.get<{ authors: Author[] }>(authorsAPI);
      return response.data.authors;
    },
  });
}

function Placeholder({ lines, height }: { lines: number; height: number }) {
  return (
    <>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse h-${height} bg-gray-300 rounded-lg mb-2`}
        />
      ))}
    </>
  );
}

function Comments() {
  const [comments, dispatch] = useReducer(commentsReducer, []);
  const { commentsAPI } = useLoaderData() as Bootstrap;

  useEffect(() => {
    axios
      .get<{ comments: Comment[] }>(commentsAPI)
      .then(({ data: { comments } }) => {
        dispatch({
          type: 'SET_COMMENTS',
          payload: comments,
        });
      });
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl my-2">Comments</h2>
      {comments.length === 0 && <Placeholder lines={3} height={16} />}
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
      <CommentsForm comments={comments} dispatch={dispatch} />
    </>
  );
}

function CommentsForm({
  comments,
  dispatch,
}: {
  comments: Comment[];
  dispatch: React.Dispatch<any>;
}) {
  const { commentsAPI } = useLoaderData() as Bootstrap;
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState('');

  function storeNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: 'ADD_COMMENT',
      payload: {
        id: comments.length + 1,
        text: newComment,
        author: 'John Doe',
        rating: parseInt(newRating, 10),
      },
    });
    setNewComment('');
    setNewRating('');
    axios
      .post(commentsAPI, {
        comment: newComment,
        rating: newRating,
      })
      .catch(() => {
        // Rollback the comment if the request fails
      });
  }

  return (
    <>
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
    </>
  );
}

function Authors() {
  const { authorsAPI } = useLoaderData() as Bootstrap;
  const { isPending, data } = useAuthorsQuery(authorsAPI);

  return (
    <>
      <h2 className="font-bold text-xl mb-2">Authors</h2>
      {isPending && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <Placeholder lines={8} height={16} />
          </div>
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {data &&
          data.map((author) => (
            <div className="bg-blue-200 p-2 rounded-lg shadow" key={author.id}>
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
    </>
  );
}

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { articlesAPI, authorsAPI } = useLoaderData() as Bootstrap;

  const { data: authors } = useAuthorsQuery(authorsAPI);

  useEffect(() => {
    axios
      .get<{ articles: Article[] }>(articlesAPI)
      .then(({ data: { articles } }) => {
        setArticles(articles);
      });
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl mt-2">Articles</h2>
      {articles.length === 0 && <Placeholder lines={5} height={24} />}
      {articles.map((article) => (
        <div className="bg-white mt-2 p-2 rounded-lg shadow" key={article.id}>
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
      {authors && (
        <p className="text-right mt-4">Created by {authors.length} authors</p>
      )}
    </>
  );
}

export function FasterApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-4 gap-x-8">
          <div className="col-span-1">
            <h1 className="text-3xl font-bold">Library</h1>
            <img
              className="rounded-xl shadow mb-2"
              src={bookshelf}
              alt="Bookshelf"
            />
            <Comments />
          </div>
          <div className="col-span-3">
            <Authors />
            <Articles />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
