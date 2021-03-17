import React from 'react';
import { StateContext, reducer, actions } from '../state';
import { user, posts, newPosts } from '../data';

export const App = ({ initialPostId = null, children }) => {
  const initialState = {
    user,
    posts,
    newPosts,
    selectedPostId: initialPostId,
    isPermalink: initialPostId,
    hasNewPosts: false,
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StateContext.Provider>
  );
};
