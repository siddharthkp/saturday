import React from 'react';
import { Stack, Avatar, Text, Input } from 'react-ui';
import VisuallyHidden from '@reach/visually-hidden';

import { useState } from '../state';
import { ago } from '../utils';

export const Replies = ({ post }) => {
  const { state, actions, dispatch } = useState();
  const replies = post.replies || [];

  return (
    <>
      <VisuallyHidden>
        <span>Replies</span>
      </VisuallyHidden>
      <Stack
        as="ul"
        direction="vertical"
        gap={4}
        css={{ paddingY: 8, paddingX: 6 }}
      >
        {replies.map((reply, index) => (
          <Stack key={index} justify="space-between" align="center">
            <Stack align="center" gap={2}>
              <Stack gap={2} align="center">
                <Avatar src={reply.author.avatar} size="small" />
                <Text variant="subtle">{reply.author.name}</Text>
              </Stack>
              <p style={{ paddingLeft: 4 }}>{reply.body}</p>
            </Stack>
            <Text variant="subtle" size={3}>
              {ago(reply.timestamp)}
            </Text>
          </Stack>
        ))}

        <li>
          <Stack>
            <Stack
              as="form"
              align="center"
              gap={2}
              key={replies.length}
              onSubmit={(event) => {
                event.preventDefault();
                dispatch({
                  type: actions.ADD_COMMENT,
                  payload: {
                    postId: post.id,
                    reply: event.target.reply.value,
                  },
                });
              }}
            >
              <Avatar src={state.user.avatar} size="small" />

              <Input
                name="reply"
                type="text"
                variant="subtle"
                placeholder={`Reply to ${post.author.name}`}
                autoComplete="off"
                css={{ paddingX: 0, height: 'Avatar.small' }}
              />
            </Stack>
          </Stack>
        </li>
      </Stack>
    </>
  );
};
