import React from 'react';
import Placeholder from './Placeholder';
import { Comment } from '../App';

const Comments = ({
  isPending,
  commentsData,
  isPendingForm,
}: {
  isPending: boolean;
  commentsData: Comment[];
  queryClient: any;
  isPendingForm: boolean;
}) => {
  return (
    <>
      {isPending && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <Placeholder lines={8} height={28} />
          </div>
        </>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {commentsData &&
          commentsData.map((comment) => (
            <div className="bg-blue-200 p-2 rounded-lg shadow" key={comment.id}>
              <div className="flex flex-row items-center mb-2">
                <img
                  src={`https://randomuser.me/api/portraits/men/${comment.id}.jpg`}
                  className="w-10 h-10 mr-1 rounded-full"
                />
              </div>
              <p className="italic">"{comment.text}"</p>
              <p className="text-sm text-violet-900">
                {comment.author} - Rating {comment.rating}/5
              </p>
            </div>
          ))}

        {isPendingForm && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              <Placeholder lines={4} height={15} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Comments;
