import React from 'react';
import { Stack } from 'react-ui';

import { Header } from '../../components/header';
import { Post } from '../../components/post';
import { Replies } from '../../components/replies';
import { posts } from '../../data';

export async function getServerSideProps(context) {
  return { props: { id: context.query.id } };
}

export default function Page({ id }) {
  const post = posts.find((post) => post.id === id);

  return (
    <>
      <Header />
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
        <Post post={post} standalone={true} />
        <Replies post={post} replies={post.replies} />
      </Stack>
    </>
  );
}
