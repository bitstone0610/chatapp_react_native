import {
  COMMENT_CHANGED,
  SET_PARENT_ID,
  SET_SUBCOMMENT_ID,
} from '../actions/types';

const INITIAL_STATE = {
  comment: '',
  toWhom: null,
  subCommentID: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT_CHANGED:
      return {
        ...state,
        comment: action.payload,
      };
    case SET_PARENT_ID:
      return {
        ...state,
        toWhom: action.payload,
      };
    case SET_SUBCOMMENT_ID:
      return {
        ...state,
        subCommentID: action.payload,
      };
    default:
      return state;
  }
};
