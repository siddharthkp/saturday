import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stack, Avatar, Text, Input } from 'react-ui';
import VisuallyHidden from '@reach/visually-hidden';
import { user } from '../data';
import { useState } from '../state';
import { ago } from '../utils';

export const Replies = ({ post }) => {
  const { actions, dispatch } = useState();
  const replies = post.replies || [];

  const [hasFocus, setFocus] = React.useState(false);

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
          <Stack
            as={motion.li}
            key={index}
            justify="space-between"
            align="center"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
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
              <Avatar src={user.avatar} size="small" />
              <AnimatePresence initial={false}>
                {hasFocus && (
                  <Stack
                    align="center"
                    gap={2}
                    as={motion.div}
                    initial={{ width: 0, x: -40 }}
                    animate={{ width: 36, x: 0 }}
                    exit={{ width: 0, x: -40 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <Text variant="subtle">{user.name}</Text>
                  </Stack>
                )}
              </AnimatePresence>
              <Input
                name="reply"
                type="text"
                variant="subtle"
                placeholder={`Reply to ${post.author.name}`}
                autoComplete="off"
                css={{ paddingX: 0, height: 'Avatar.small' }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
            </Stack>
          </Stack>
        </li>
      </Stack>
    </>
  );
};
