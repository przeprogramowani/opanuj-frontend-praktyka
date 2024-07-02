// @ts-ignore-next-line
import bookshelf from '../media/image.png';
import axios from 'axios';
import { Comment, Status } from '../types/Comment';
import { Article } from '../types/Article';
import { Author } from '../types/Authors';
import { Bootstrap } from '../types/Bootstrap';
import { commentsReducer } from '../reducers/commentsReducer';
import { useLoaderData } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import { useEffect, useReducer, useState } from 'react';

const queryClient = new QueryClient();

const useCommentsQuery = (commentsUrl: string) =>
  useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const response = await axios.get<{ comments: Comment[] }>(commentsUrl);
      return response.data.comments;
    },
  });

const useAuthorsQuery = (authorsUrl: string) =>
  useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const response = await axios.get<{ authors: Author[] }>(authorsUrl);
      return response.data.authors;
    },
  });

const useArticlesQuery = (articlesUrl: string) =>
  useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const response = await axios.get<{ articles: Article[] }>(articlesUrl);
      return response.data.articles;
    },
  });

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

function Articles() {
  const { articlesAPI, authorsAPI } = useLoaderData() as Bootstrap;
  const { data: articles, isPending } = useArticlesQuery(articlesAPI);
  const { data: authors } = useAuthorsQuery(authorsAPI);

  return (
    <>
      <h2 className="font-bold text-xl mt-2">Articles</h2>
      {isPending && <Placeholder lines={8} height={16} />}
      {articles &&
        articles.map((article) => (
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
      {authors && authors.length > 0 && (
        <p className="text-right mt-4">Created by {authors.length} authors</p>
      )}
    </>
  );
}

function Authors() {
  const { authorsAPI } = useLoaderData() as Bootstrap;
  const { data: authors, isPending } = useAuthorsQuery(authorsAPI);

  return (
    <>
      <h2 className="font-bold text-xl mb-2">Recommended Authors</h2>
      {isPending && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <Placeholder lines={8} height={16} />
          </div>
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {authors &&
          authors.map((author) => (
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

function Comments() {
  const { commentsAPI } = useLoaderData() as Bootstrap;
  const { data, isPending, isSuccess } = useCommentsQuery(commentsAPI);
  const [comments, dispatch] = useReducer(commentsReducer, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: 'SET_COMMENTS',
        payload: data,
      });
    }
  }, [isSuccess]);

  return (
    <>
      <h2 className="font-bold text-xl my-2">Comments</h2>
      {isPending && <Placeholder lines={3} height={16} />}
      {comments &&
        comments.map((comment) => (
          <div
            className="bg-violet-400 rounded-xl text-white p-4 mb-2 shadow"
            key={comment.id}
          >
            <p className="italic">"{comment.text}"</p>
            <p className="text-sm text-violet-900">
              {comment.author} - Rating {comment.rating}/5
            </p>
            <p>{comment.status}</p>
          </div>
        ))}
      <CommentForm comments={comments} dispatch={dispatch} />
    </>
  );
}

function CommentForm({
  comments,
  dispatch,
}: {
  comments: Comment[];
  dispatch: React.Dispatch<any>;
}) {
  const { commentsAPI } = useLoaderData() as Bootstrap;
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState('');
  const { mutate } = useMutation({
    mutationFn: async ({
      author,
      comment,
      rating,
    }: {
      author: string;
      comment: string;
      rating: number;
      id?: number;
    }) => {
      await axios.post(`${commentsAPI}`, {
        comment,
        author,
        rating,
      });
    },
    onSuccess(_data, variables) {
      dispatch({
        type: 'UPDATE_COMMENT',
        payload: {
          id: variables.id,
        },
      });
      queryClient.refetchQueries({ queryKey: ['comments'], exact: true });
    },
    onError(_error, variables) {
      dispatch({
        type: 'UPDATE_COMMENT',
        payload: {
          id: variables.id,
          status: Status.FAILED,
        },
      });
    },
    onMutate(variables) {
      dispatch({
        type: 'ADD_COMMENT',
        payload: {
          id: variables.id,
          text: variables.comment,
          author: variables.author,
          rating: variables.rating,
          status: Status.SENDING,
        },
      });
    },
  });

  function storeNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewComment('');
    setNewRating('');
    setNewAuthor('');

    mutate({
      author: newAuthor,
      comment: newComment,
      rating: parseInt(newRating, 10),
      id: comments.length + 1,
    });
  }

  return (
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
          value={newAuthor}
          type="text"
          placeholder="Author"
          className="w-full p-2 rounded-lg mb-2"
          onChange={(e) => setNewAuthor(e.target.value)}
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
  );
}

export function DemoApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-4 gap-x-8">
          <div className="col-span-1">
            <h1 className="text-3xl font-bold">Library</h1>
            <img
              className="rounded-xl shadow"
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
