import { Comment } from '../types/Comment';

type REDUCER_ACTIONS =
  | { type: 'SET_COMMENTS'; payload: Comment[] }
  | { type: 'ADD_COMMENT'; payload: Comment };

export function commentsReducer(comments: Comment[], action: REDUCER_ACTIONS) {
  switch (action.type) {
    case 'SET_COMMENTS':
      return action.payload;
    case 'ADD_COMMENT':
      return [...comments, action.payload];
    default:
      throw new Error('Invalid action type');
  }
}
