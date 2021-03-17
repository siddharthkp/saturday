import React from 'react';

import { HEADER_HEIGHT } from './header';
import { Post } from './post';
import { Replies } from './replies';
import { useState } from '../state';

export const SelectedPost = () => {
  if (typeof document === 'undefined') return null;

  const {
    state: { posts, newPosts, selectedPostId, isPermalink },
    actions,
    dispatch,
  } = useState();

  let selectedPost = posts.find((post) => post.id === selectedPostId);

  // hack for post page: new posts are inserted later :)
  if (!selectedPost) {
    selectedPost = newPosts.find((post) => post.id === selectedPostId);
  }

  return (
    <>
      {selectedPostId && (
        <section
          style={{
            position: 'fixed',
            top: HEADER_HEIGHT,
            height: `calc(100% - ${HEADER_HEIGHT}px)`,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <article style={{ zIndex: 2, width: '100%', maxWidth: 600 }}>
            <Post post={selectedPost} isPermalink />
            <section>
              <Replies post={selectedPost} />
            </section>
          </article>

          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              background: 'white',
              zIndex: 1,
            }}
          ></div>
        </section>
      )}
    </>
  );
};
