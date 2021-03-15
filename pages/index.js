import React from 'react';
import { Stack } from 'react-ui';

import { Header } from '../components/header';
import { Post } from '../components/post';
import { posts } from '../data';

export default function Home() {
  return (
    <>
      <Header isHome={true} />
      <Stack
        as="ul"
        direction="vertical"
        css={{
          width: 'calc(100% - 48px)',
          maxWidth: 600,
          marginX: 'auto',
          paddingBottom: 100,
        }}
      >
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </Stack>
    </>
  );
}
