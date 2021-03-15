import React from 'react';
import Home from '../index';

export async function getServerSideProps(context) {
  return { props: { initialPostId: context.query.id } };
}

export default function Page(props) {
  return <Home {...props} isStandalone />;
}
