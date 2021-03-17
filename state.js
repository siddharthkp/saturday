import React from 'react';
import { newPosts } from './data';

export const StateContext = React.createContext();

export const actions = {
  SELECT_POST: 'SELECT_POST',
  DESELECT_POST: 'DESELECT_POST',
  ADD_COMMENT: 'ADD_COMMENT',
  LOAD_NEW_POSTS: 'LOAD_NEW_POSTS',
  SHOW_NEW_POSTS: 'SHOW_NEW_POSTS',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SELECT_POST: {
      return { ...state, selectedPostId: action.payload.id };
    }
    case actions.DESELECT_POST: {
      return { ...state, selectedPostId: null, isPermalink: false };
    }
    case actions.ADD_COMMENT: {
      const { postId, reply } = action.payload;
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              replies: [
                ...post.replies,
                {
                  author: state.user,
                  body: reply,
                  timestamp: new Date(),
                },
              ],
            };
          }
          return post;
        }),
      };
    }
    case actions.LOAD_NEW_POSTS: {
      return { ...state, newPosts: true };
    }
    case actions.SHOW_NEW_POSTS: {
      return {
        ...state,
        newPosts: false,
        posts: [...newPosts, ...state.posts],
      };
    }
    default:
      throw new Error();
  }
};

export const useState = () => {
  const context = React.useContext(StateContext);
  return context;
};
