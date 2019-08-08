import {
  COMMENT_CHANGED,
  SEND_COMMENT,
  SET_PARENT_ID,
  SET_SUBCOMMENT_ID,
  SET_LIKED,
  SET_SUBCOMMENT_LIKED,
} from './types';

export const commentChanged = text => ({
  type: COMMENT_CHANGED,
  payload: text,
});

export const sendComment = payload => ({
  type: SEND_COMMENT,
  payload,
});

export const setLiked = payload => ({
  type: SET_LIKED,
  payload,
});

export const setSubCommentLiked = payload => ({
  type: SET_SUBCOMMENT_LIKED,
  payload,
});

export const setParentID = payload => ({
  type: SET_PARENT_ID,
  payload,
});

export const setSubCommentID = payload => ({
  type: SET_SUBCOMMENT_ID,
  payload,
});
