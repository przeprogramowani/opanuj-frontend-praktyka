import { Comment } from '../types/Comment';

type REDUCER_ACTIONS =
  | { type: 'SET_COMMENTS'; payload: Comment[] }
  | { type: 'ADD_COMMENT'; payload: Comment }
  | { type: 'REMOVE_COMMENT'; payload: Comment }
  | { type: 'GET_COMMENT'; payload: Comment };

export function commentsReducer(comments: Comment[], action: REDUCER_ACTIONS) {
  switch (action.type) {
    case 'SET_COMMENTS':
      return action.payload;
    case 'ADD_COMMENT':
      return [...comments, action.payload];
    case 'REMOVE_COMMENT':
      return comments.filter((comment) => comment.id !== action.payload.id);
    case 'GET_COMMENT':
      return comments.filter((comment) => comment.id === action.payload.id);
    default:
      throw new Error('Invalid action type');
  }
}
