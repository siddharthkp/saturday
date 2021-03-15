import React from 'react';
import { Stack } from 'react-ui';
import { motion, AnimatePresence } from 'framer-motion';

import { posts } from '../data';
import { Post } from '../components/post';
import { Header } from '../components/header';
import { Replies } from '../components/replies';

export default function Home({ initialPostId = null }) {
  const [selectedPostId, setSelectedPostId] = React.useState(
    initialPostId || null
  );

  const mainRef = React.useRef(null);

  React.useEffect(() => {
    if (mainRef.current && !selectedPostId) {
      mainRef.current.scrollTo({ top: history.state?.scrollPosition });
    }
  }, [selectedPostId]);

  return (
    <Stack direction="vertical" css={{ height: '100vh', overflow: 'hidden' }}>
      <Header isHome={true} setSelectedPostId={setSelectedPostId} />

      <main
        ref={mainRef}
        style={{
          flexGrow: 1,
          overflow: 'auto',
          paddingBottom: 100,
          position: 'relative',
        }}
      >
        <Stack
          as="ul"
          direction="vertical"
          css={{ width: 'calc(100% - 48px)', maxWidth: 600, marginX: 'auto' }}
        >
          {posts.map((post) => (
            <li key={post.id} data-id={post.id}>
              <Post
                post={post}
                selectedPostId={selectedPostId}
                setSelectedPostId={(id) => {
                  history.pushState(
                    { scrollPosition: mainRef.current.scrollTop },
                    null,
                    '/post/' + post.id
                  );
                  setSelectedPostId(id);
                }}
              />
            </li>
          ))}
        </Stack>
        <SelectedPost
          dedicatedPage={initialPostId}
          selectedPostId={selectedPostId}
          setSelectedPostId={setSelectedPostId}
        />
      </main>
    </Stack>
  );
}

const SelectedPost = ({ dedicatedPage, selectedPostId, setSelectedPostId }) => {
  if (typeof document === 'undefined') return null;

  const selectedPost = posts.find((post) => post.id === selectedPostId);
  const element = document.querySelector(`[data-id="${selectedPostId}"]`);

  let initialY = 0;
  if (element) {
    const rect = element.getBoundingClientRect();
    initialY = rect.top - 160;
  }

  return (
    <AnimatePresence
      initial={dedicatedPage ? false : true}
      onExitComplete={() => {
        history.pushState(null, null, '/');
      }}
    >
      {selectedPostId && (
        <section
          style={{
            position: 'fixed',
            top: 160,
            height: 'calc(100% - 160px)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <motion.article
            initial={{ y: initialY }}
            animate={{ y: 0, transition: { duration: 0.2, delay: 0.1 } }}
            exit={{ y: initialY, transition: { duration: 0.2 } }}
            style={{ zIndex: 2, width: 'calc(100% - 48px)', maxWidth: 600 }}
          >
            <Post
              standalone
              post={selectedPost}
              selectedPostId={selectedPostId}
              setSelectedPostId={setSelectedPostId}
            />
            <motion.section
              initial={{ height: 0 }}
              animate={{
                height: 'auto',
                transition: { delay: 0.4, duration: 0.2 },
              }}
              exit={{ height: 0, transition: { duration: 0.2 } }}
              style={{ overflow: 'hidden' }}
            >
              <Replies post={selectedPost} replies={selectedPost.replies} />
            </motion.section>
          </motion.article>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
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
