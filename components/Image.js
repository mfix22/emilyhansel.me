import React from "react";
import NextImage from "next/image";

export function Image({ children, ...props }) {
  const image = <NextImage {...props} />;

  return children ? (
    <figure>
      {image}
      <figcaption>{children}</figcaption>
    </figure>
  ) : (
    image
  );
}
