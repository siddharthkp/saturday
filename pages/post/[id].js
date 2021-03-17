import React from 'react';
import { App } from '../../components/app';
import { Feed } from '../../components/feed';

export async function getServerSideProps(context) {
  return { props: { initialPostId: context.query.id } };
}

export default function Page(props) {
  return (
    <App {...props}>
      <Feed />
    </App>
  );
}
