import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const element = document.querySelector(`[data-id="${selectedPostId}"]`);

  let initialY = 0;
  if (element) {
    const rect = element.getBoundingClientRect();
    initialY = rect.top - HEADER_HEIGHT;
  }

  const [dragOffset, setDragOffset] = React.useState(0);

  return (
    <AnimatePresence
      initial={isPermalink ? false : true}
      onExitComplete={() => {
        history.pushState(null, null, '/');
      }}
    >
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
          <motion.article
            initial={{ y: initialY }}
            animate={{ y: 0, transition: { duration: 0.2, delay: 0.1 } }}
            exit={{ y: initialY, transition: { duration: 0.2 } }}
            style={{ zIndex: 2, width: '100%', maxWidth: 600 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragMomentum={false}
            onDrag={(event, info) => {
              setDragOffset(info.offset.y);
            }}
            onDragEnd={(event, info) => {
              setDragOffset(0);
              if (info.offset.y > 100 || info.offset.y < -100) {
                dispatch({ type: actions.DESELECT_POST });
              }
            }}
          >
            <Post post={selectedPost} isPermalink />
            <motion.section
              initial={{ height: 0 }}
              animate={{
                height: 'auto',
                transition: { delay: 0.4, duration: 0.2 },
              }}
              exit={{ height: 0, transition: { duration: 0.2 } }}
              style={{ overflow: 'hidden' }}
            >
              <Replies post={selectedPost} />
            </motion.section>
          </motion.article>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1 - dragOffset / 1000,
              transition: { duration: 0.1 },
            }}
            exit={{ opacity: 0, transition: { delay: 0.15, duration: 0.1 } }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              background: 'white',
              zIndex: 1,
            }}
          ></motion.div>
        </section>
      )}
    </AnimatePresence>
  );
};
