import React from 'react';
import Link from 'next/link';
import { Stack, Avatar, Image, Text } from 'react-ui';

export const Post = ({ post, standalone = false }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <a>
        <Stack
          direction="vertical"
          gap={4}
          css={{
            paddingX: 2,
            paddingTop: 6,
            paddingBottom: 4,
            borderBottom: '1px solid',
            borderColor: 'grays.200',
            ':hover': {
              cursor: 'pointer',
              backgroundColor: 'grays.100',
            },
            '&:first-child': {
              borderTopRadius: 2,
            },
          }}
        >
          <Stack gap={2} align="center">
            <Avatar src={post.author.avatar} size="medium" />
            <span>{post.author.name}</span>
          </Stack>
          <p style={post.style || { whiteSpace: 'pre-line' }}>{post.body}</p>
          {post.embed && (
            <p>
              {post.embed.type === 'image' && (
                <Image src={post.embed.image} css={{ borderRadius: 2 }} />
              )}
              {post.embed.type === 'github' && (
                <Stack
                  as="a"
                  href={post.embed.link.href}
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
            </p>
          )}

          <Stack justify="space-between" css={{ paddingTop: 4 }}>
            {!standalone && (
              <Stack href="/reply" align="center" gap={1}>
                <ReplyIcon />
                <Text size={3}>{post.replies?.length}</Text>
              </Stack>
            )}
            <Text size={3}>{post.timestamp}</Text>
          </Stack>
        </Stack>
      </a>
    </Link>
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
