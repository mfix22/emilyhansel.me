import React from "react";

export function ImageGrid({ children }) {
  return (
    <masonry-rows>
      {children}
      <style jsx>
        {`
          :global(img) {
            object-fit: contain;
          }
        `}
      </style>
    </masonry-rows>
  );
}
