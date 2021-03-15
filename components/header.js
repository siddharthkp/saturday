import React from 'react';
import Link from 'next/link';
import { Stack, Image } from 'react-ui';

export const Header = ({ isHome = false }) => {
  return (
    <Stack
      as="header"
      justify="center"
      marginBottom={16}
      css={{
        opacity: 0.5,
        ':hover': !isHome && { opacity: 1, transform: 'scale(1.05)' },
      }}
    >
      <Link href="/" css={{ cursor: 'pointer' }}>
        <a>
          <Image width="200px" src="/logo.png" />
        </a>
      </Link>
    </Stack>
  );
};
