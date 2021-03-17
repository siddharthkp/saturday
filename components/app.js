import React from 'react';
import { StateContext, reducer, actions } from '../state';
import { posts, user } from '../data';

export const App = ({ initialPostId = null, children }) => {
  const initialState = {
    user,
    posts,
    selectedPostId: initialPostId,
    isPermalink: initialPostId,
    newPosts: false,
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StateContext.Provider>
  );
};
