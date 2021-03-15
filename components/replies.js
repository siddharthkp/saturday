import React from 'react';
import { Stack, Avatar, Text, Input } from 'react-ui';
import VisuallyHidden from '@reach/visually-hidden';
import { user } from '../data';

export const Replies = ({ post, replies = [] }) => {
  return (
    <section>
      <VisuallyHidden>
        <span>Replies</span>
      </VisuallyHidden>
      <Stack as="ul" direction="vertical" gap={4} css={{ paddingY: 8 }}>
        {replies.map((reply, index) => (
          <Stack as="li" key={index} align="center" gap={2}>
            <Stack gap={2} align="center">
              <Avatar src={reply.author.avatar} size="small" />
              <Text variant="subtle">{reply.author.name}</Text>
            </Stack>
            <p style={{ paddingLeft: 4 }}>{reply.body}</p>
          </Stack>
        ))}

        <li>
          <Stack gap={2}>
            <Avatar src={user.avatar} size="small" />
            <Input
              type="text"
              variant="subtle"
              placeholder={`Reply to ${post.author.name}`}
              css={{ paddingX: 0, height: 'Avatar.small' }}
            />
          </Stack>
        </li>
      </Stack>
    </section>
  );
};
