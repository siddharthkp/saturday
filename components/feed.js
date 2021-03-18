import React from 'react';
import { Stack, Button } from 'react-ui';
import { motion } from 'framer-motion';

import { Header } from './header';
import { Post } from './post';
import { SelectedPost } from './selected-post';
import { useState } from '../state';

export const Feed = () => {
  const {
    state: { posts, selectedPostId, hasNewPosts },
    dispatch,
    actions,
  } = useState();

  const mainRef = React.useRef(null);
  React.useEffect(
    function scrollBack() {
      if (mainRef.current && !selectedPostId) {
        mainRef.current.scrollTo({ top: history.state?.scrollPosition });
      }
    },
    [selectedPostId]
  );

  return (
    <Stack direction="vertical" css={{ height: '100vh', overflow: 'hidden' }}>
      <Header
        isHome={true}
        scrollTop={() => {
          mainRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      />

      <main
        ref={mainRef}
        style={{
          flexGrow: 1,
          overflow: 'auto',
          paddingBottom: 100,
          position: 'relative',
        }}
      >
        {hasNewPosts && (
          <Button
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            variant="link"
            fullWidth
            onClick={() => dispatch({ type: actions.SHOW_NEW_POSTS })}
            style={{ backgroundColor: 'blues.100', paddingY: 5 }}
          >
            load more posts
          </Button>
        )}
        <Stack
          as="ul"
          direction="vertical"
          css={{ maxWidth: 600, marginX: 'auto' }}
        >
          {posts.map((post) => (
            <motion.li
              key={post.id}
              data-id={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ opacity: post.id === selectedPostId ? 0 : 1 }}
            >
              <Post
                post={post}
                onSelect={() => {
                  history.pushState(
                    { scrollPosition: mainRef.current.scrollTop },
                    null,
                    '/post/' + post.id
                  );
                }}
              />
            </motion.li>
          ))}
        </Stack>
        <SelectedPost />
      </main>
    </Stack>
  );
};
