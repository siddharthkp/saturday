import React from 'react';
import { Stack, Image, Element, Text } from 'react-ui';
import { useState } from '../state';

export const HEADER_HEIGHT = 88;

export const Header = ({ isHome = false, scrollTop }) => {
  const { state, actions, dispatch } = useState();

  const [showURL, setShowURL] = React.useState(false);

  return (
    <Element
      as="header"
      css={{
        height: HEADER_HEIGHT,
        background: 'white',
        paddingY: 2,
        borderBottom: '1px solid',
        borderColor: 'grays.200',
        zIndex: 2,
      }}
    >
      <Stack
        as="a"
        justify="center"
        href="#"
        css={{
          opacity: 0.5,
          cursor: 'pointer',
          ':hover, :focus': !isHome && {
            opacity: 1,
            transform: 'scale(1.05)',
          },
        }}
        onClick={() => {
          if (state.selectedPostId) dispatch({ type: actions.DESELECT_POST });
          else {
            scrollTop();
            setTimeout(() => {
              dispatch({ type: actions.LOAD_NEW_POSTS });
            }, 750);
          }
        }}
        onContextMenu={(event) => {
          // lol secret trick to reveal url
          event.preventDefault();
          setShowURL(true);
        }}
      >
        <Image width="200px" src="/logo.png" />
        {showURL && (
          <Text size={6} css={{ fontStyle: 'italic', lineHeight: 2 }}>
            vercel.app
          </Text>
        )}
      </Stack>
    </Element>
  );
};
