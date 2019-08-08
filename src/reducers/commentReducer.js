import uuid from 'uuid';
import {
  SEND_COMMENT,
  SET_LIKED,
  SET_SUBCOMMENT_LIKED,
} from '../actions/types';

const INITIAL_STATE = {
  // '0000': {
  //   poster: 'User 1',
  //   comment: {
  //     commentID: '0000',
  //     content: 'this is comment 1',
  //     liked: true,
  //     subComments: {
  //       '0001': {
  //         subCommentID: '0001',
  //         poster: 'User 2',
  //         content: 'this is subcomment 2',
  //         liked: false,
  //       },
  //     },
  //   },
  // },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_COMMENT:
      const { poster, parentID, content } = action.payload;
      if (!parentID) {
        const newCommentID = uuid.v4();
        const newComment = {
          poster,
          comment: {
            commentID: newCommentID,
            content,
            liked: false,
            subComments: [],
          },
        };
        return {
          ...state,
          [newCommentID]: newComment,
        };
      }
      const newSubCommentID = uuid.v4();
      const newSubComment = {
        subCommentID: newSubCommentID,
        poster,
        content,
        liked: false,
      };
      return {
        ...state,
        [parentID]: {
          ...state[parentID],
          comment: {
            ...state[parentID].comment,
            subComments: {
              ...state[parentID].comment.subComments,
              [newSubCommentID]: newSubComment,
            },
          },
        },
      };
    case SET_LIKED:
      const { commentID, value } = action.payload;
      return {
        ...state,
        [commentID]: {
          ...state[commentID],
          comment: {
            ...state[commentID].comment,
            liked: value,
          },
        },
      };
    case SET_SUBCOMMENT_LIKED:
      const { parentCommentID, subCommentID, liked } = action.payload;
      return {
        ...state,
        [parentCommentID]: {
          ...state[parentCommentID],
          comment: {
            ...state[parentCommentID].comment,
            subComments: {
              ...state[parentCommentID].comment.subComments,
              [subCommentID]: {
                ...state[parentCommentID].comment.subComments[subCommentID],
                liked,
              },
            },
          },
        },
      };
    default:
      return state;
  }
};
