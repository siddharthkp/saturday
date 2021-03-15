import React from 'react';
import { Stack, Image, Element } from 'react-ui';

export const Header = ({ isHome = false, setSelectedPostId }) => {
  return (
    <Stack
      as="header"
      justify="center"
      css={{ height: 160, background: 'white', paddingY: 1 }}
    >
      <Element
        as="a"
        href="#"
        css={{
          opacity: 0.5,
          cursor: 'pointer',
          ':hover, :focus': !isHome && {
            opacity: 1,
            transform: 'scale(1.05)',
          },
        }}
        onClick={() => setSelectedPostId(null)}
      >
        <Image width="200px" src="/logo.png" />
      </Element>
    </Stack>
  );
};
