import React from 'react';
import NextLink from 'next/link';

export function Link(props) {
  const target =
    props.target || (props.href.startsWith('http') ? '_blank' : undefined);

  return (
    <NextLink
      {...props}
      target={target}
      rel={target === '_blank' ? 'noreferrer noopener' : undefined}
    >
      {props.children}
    </NextLink>
  );
}
