import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Comments from './components/Comments';
import Average from './components/Average';
import Form from './components/Form';
import useCommentsQuery from './services/data-services';

const queryClient = new QueryClient();

const API_COMMENTS_URL = '/api/data/comments?timeout=5000';

const App = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isPendingForm, setIsPendingForm] = useState(false);

  const addComment = (newComment: Comment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CommentsSection comments={comments} isPendingForm={isPendingForm} />
      <AverageSection comments={comments} />
      <div className="grid grid-cols-2 gap-1 justify-end">
        <Form
          addComment={addComment}
          setIsNewCommentPending={setIsPendingForm}
          isPendingForm={isPendingForm}
        />
      </div>
    </QueryClientProvider>
  );
};

interface CommentsSectionProps {
  comments: Comment[];
  isPendingForm: boolean;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  isPendingForm,
}) => {
  const { isPending, data } = useCommentsQuery(API_COMMENTS_URL);
  const allComments = [...(data || []), ...comments];
  return (
    <Comments
      isPending={isPending}
      commentsData={allComments}
      queryClient={queryClient}
      isPendingForm={isPendingForm}
    />
  );
};

const AverageSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  const { isPending, data } = useCommentsQuery(API_COMMENTS_URL);
  const allComments = [...(data || []), ...comments];
  return <Average isPending={isPending} commentsData={allComments} />;
};

export default App;
