import React from 'react';

import { Stack, Avatar, Image, Text, Button, Element } from 'react-ui';

export const Post = ({
  post,
  selectedPostId,
  setSelectedPostId,
  standalone = false,
}) => {
  const rootProps = standalone
    ? { as: 'div' }
    : {
        as: 'a',
        href: '#',
        onClick: () => setSelectedPostId(post.id),
      };

  React.useEffect(() => {
    const handler = (event) => {
      if (event.which === 27) setSelectedPostId(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <Element {...rootProps}>
      <Stack
        direction="vertical"
        gap={4}
        css={{
          paddingX: 2,
          paddingTop: 6,
          paddingBottom: 4,
          borderBottom: '1px solid',
          borderColor: 'grays.200',
          background: 'white',
          ':hover': {
            cursor: standalone ? 'default' : 'pointer',
            backgroundColor: standalone ? '' : 'grays.100',
          },
          '&:first-child': {
            borderTopRadius: 2,
          },
        }}
      >
        <Stack justify="space-between" css={{ width: '100%' }}>
          <Stack gap={2} align="center">
            <Avatar src={post.author.avatar} size="medium" />
            <span>{post.author.name}</span>
          </Stack>
          {standalone && (
            <Button
              autoFocus
              variant="icon"
              onClick={() => setSelectedPostId(null)}
              css={{ paddingX: 0, size: 10 }}
            >
              <CloseIcon />
            </Button>
          )}
        </Stack>

        <div style={post.style || { whiteSpace: 'pre-line' }}>{post.body}</div>
        {post.embed && (
          <div>
            {post.embed.type === 'image' && (
              <Image src={post.embed.image} css={{ borderRadius: 2 }} />
            )}
            {post.embed.type === 'github' && (
              <Stack
                as="a"
                href={post.embed.link.href}
                target="_blank"
                gap={4}
                css={{
                  padding: 3,
                  border: '1px solid',
                  borderColor: 'grays.200',
                  borderRadius: 2,
                  marginTop: 4,
                  ':hover, :focus': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <Image width={48} src={post.embed.image} />
                <Stack direction="vertical" justify="space-between">
                  <span>{post.embed.title}</span>
                  <Text variant="subtle">{post.embed.link.title}</Text>
                </Stack>
              </Stack>
            )}
          </div>
        )}

        <Stack justify="space-between" css={{ paddingTop: 4 }}>
          <Stack href="/reply" align="center" gap={1}>
            <ReplyIcon />
            <Text size={3}>{post.replies?.length}</Text>
          </Stack>

          <Text size={3}>{post.timestamp}</Text>
        </Stack>
      </Stack>
    </Element>
  );
};

const ReplyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);
