import React from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState();

  React.useEffect(() => {
    function handler() {
      setWindowWidth(window.innerWidth);
    }
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return windowWidth;
}

export function ImageGrid({ children }) {
  const windowWidth = useWindowWidth();

  let numColumns = 3;
  if (windowWidth) {
    if (windowWidth <= 768) {
      numColumns = 1;
    } else if (windowWidth <= 1024) {
      numColumns = 2;
    }
  }

  const grid = React.Children.toArray(children).reduce(
    (grid, next, i) => {
      let index = i % numColumns;
      grid[index].push(next);
      return grid;
    },
    [[], [], []]
  );

  return (
    <div className="container">
      <div className="row">
        {grid.map((c, i) => (
          <div key={i} className="column">
            {c}
          </div>
        ))}
      </div>
      <div className="full-screen-caption" />
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .row {
            display: flex;
            gap: 1.5rem;
          }
          .column {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .container :global(img) {
            border-radius: 2px;
          }
          .full-screen-caption {
            position: fixed;
            bottom: 4rem;
            z-index: 500;
            opacity: 0;
            transition: all 300ms;
          }
          :global(body.zoom-overlay-open) .full-screen-caption {
            opacity: 1;
          }
          :global(body.zoom-overlay-transitioning) .full-screen-caption {
            opacity: 0;
          }
        `}
      </style>
      <style jsx global>
        {`
          img[data-action="zoom"] {
            cursor: pointer;
            cursor: -webkit-zoom-in;
            cursor: -moz-zoom-in;
          }
          .zoom-img,
          .zoom-img-wrap {
            position: relative;
            z-index: 666;
            -webkit-transition: all 300ms;
            -o-transition: all 300ms;
            transition: all 300ms;
          }
          img.zoom-img {
            cursor: pointer;
            cursor: -webkit-zoom-out;
            cursor: -moz-zoom-out;
          }
          .zoom-overlay {
            z-index: 420;
            background: #fff;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            filter: "alpha(opacity=0)";
            opacity: 0;
            -webkit-transition: opacity 300ms;
            -o-transition: opacity 300ms;
            transition: opacity 300ms;
            background: black;
          }
          .zoom-overlay-open .zoom-overlay {
            filter: "alpha(opacity=100)";
            opacity: 1;
          }
          .zoom-overlay-open,
          .zoom-overlay-transitioning {
            cursor: default;
          }
        `}
      </style>
      <script src="/assets/js/zoom.js" />
    </div>
  );
}
