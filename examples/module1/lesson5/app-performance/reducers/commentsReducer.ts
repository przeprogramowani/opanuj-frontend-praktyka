import { Comment } from '../types/Comment';

type REDUCER_ACTIONS =
  | { type: 'SET_COMMENTS'; payload: Comment[] }
  | { type: 'ADD_COMMENT'; payload: Comment }
  | {
      type: 'UPDATE_COMMENT';
      payload: { status: Comment['status']; id: number };
    };

export function commentsReducer(comments: Comment[], action: REDUCER_ACTIONS) {
  switch (action.type) {
    case 'SET_COMMENTS':
      return action.payload;
    case 'ADD_COMMENT':
      return [...comments, action.payload];
    case 'UPDATE_COMMENT': {
      return comments.reduce((acc, comment) => {
        if (comment.id === action.payload.id) {
          acc.push({ ...comment, status: action.payload.status });
        } else {
          acc.push(comment);
        }

        return acc;
      }, [] as Comment[]);
    }
    default:
      throw new Error('Invalid action type');
  }
}
