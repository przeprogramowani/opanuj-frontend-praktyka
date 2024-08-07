import React, { useEffect, useState } from 'react';
import { Comment } from '../App';
import Placeholder from './Placeholder';

const Average = ({
  isPending,
  commentsData,
}: {
  isPending: boolean;
  commentsData: Comment[];
}) => {
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [averageOfComments, setAverageOfComments] = useState(0);

  useEffect(() => {
    let valueNumberOfComments = 0;
    let sumOfCommentsRate = 0;

    if (commentsData) {
      commentsData.map((comment) => (sumOfCommentsRate += comment.rating));
      valueNumberOfComments = commentsData.length;
    }
    setNumberOfComments(valueNumberOfComments);
    const average = (sumOfCommentsRate / valueNumberOfComments).toFixed(1);
    setAverageOfComments(parseFloat(average));
  }, [commentsData]);
  return (
    <>
      {isPending && <Placeholder lines={1} height={20} />}

      {commentsData && !isPending && (
        <div className="col-span-1 border-solid border-2 border-indigo-600 rounded p-5 mt-2">
          <p className="text-xs text-blue-600">
            Average of comments:{averageOfComments}
          </p>
          <p className="text-xs text-blue-600 mt-2">
            Articles: {numberOfComments}
          </p>
        </div>
      )}
    </>
  );
};

export default Average;
