import React from "react";
import NextImage from "next/image";

import { useContext } from "./ImageGrid";

export function Image({ children, action, ...props }) {
  const setCaption = useContext();

  const image = (
    <NextImage
      {...props}
      data-action={action}
      onClick={action === "zoom" ? () => setCaption(children) : undefined}
    />
  );

  return children ? (
    <figure>
      {image}
      {action === "zoom" ? null : <figcaption>{children}</figcaption>}
    </figure>
  ) : (
    image
  );
}
