import React, { useState } from 'react';
import Placeholder from './Placeholder';
import { postComment } from '../services/data-services';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { Comment } from '../models/interfaces';

const Form = ({
  addComment,
  setIsNewCommentPending,
}: {
  addComment: (comment: Comment) => void;
  setIsNewCommentPending: (isPending: boolean) => void;
}) => {
  let isPending = false;
  let commentsData = true;

  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  const mutation: UseMutationResult<AxiosResponse, unknown, Comment> =
    useMutation({
      mutationFn: postComment,
    });

  function onFormConfirm(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setIsNewCommentPending(true);
    const newId = (Math.floor(Math.random() * 40) + 1).toString();
    const currentAuthor = author;
    const currentText = text;
    const currentRating = rating;
    mutation.mutate(
      {
        id: newId,
        author: currentAuthor,
        text: currentText,
        rating: parseInt(currentRating),
      },
      {
        onSettled: () => {
          console.log('Mutation settled');
          setIsNewCommentPending(false);
        },
        onSuccess: (data) => {
          console.log('Mutation successful:', data);
          const newComment: Comment = {
            id: newId,
            author: currentAuthor,
            text: currentText,
            rating: parseInt(currentRating),
          };
          addComment(newComment);
          setAuthor('');
          setText('');
          setRating('');
        },
        onError: (error) => {
          console.error('Mutation failed:', error);
        },
      }
    );
  }

  return (
    <>
      {isPending && <Placeholder lines={1} height={20} />}

      {commentsData && (
        <div className="col-span-1 p-5 mt-2 col-start-2 col-end-3">
          <form
            name="form"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="text"
                placeholder="John Doe"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="text"
              >
                Comment
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text"
                type="text"
                placeholder="Text of comment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="rating"
                type="number"
                placeholder="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="mb-6"></div>
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => onFormConfirm(e)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
