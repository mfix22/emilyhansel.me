import React from "react";
import NextImage from "next/image";

export function Image({ children, action, caption, ...props }) {
  const image = (
    <NextImage
      {...props}
      data-action={action}
      onClick={() => {
        if (caption) {
          // TODO: use React instead
          document.querySelector(".full-screen-caption").innerHTML = caption;
        }
      }}
    />
  );

  return children ? (
    <figure>
      {image}
      <figcaption>{children}</figcaption>
    </figure>
  ) : (
    image
  );
}
