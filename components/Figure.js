import React from "react";

export function Figure({ children, image }) {
  return (
    <div className="figure">
      <div className="col copy">{children}</div>
      <div className="col">{image}</div>
      <style jsx>
        {`
          .figure {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            padding-bottom: 2.5rem;
            padding-top: 2rem;
          }

          .figure:nth-last-of-type(2n) {
            flex-direction: row;
          }

          .figure:nth-last-of-type(2n) :global(.copy),
          .figure:nth-last-of-type(2n) :global(.copy p) {
            text-align: end;
          }

          .figure .col {
            width: 45%;
          }

          .figure :global(img) {
            display: block;
            border: 4px solid #fff;
            user-select: none;
          }

          .figure :global(img),
          .figure :global(.video) {
            margin: 0 0 0 auto;
            max-width: 100%;
          }

          .figure:nth-last-of-type(2n) :global(img),
          .figure:nth-last-of-type(2n) :global(.video) {
            margin: 0 auto 0 0;
          }

          .figure :global(p) {
            font-weight: 300;
            margin-top: 1rem;
          }

          .figure :global(h4) {
            font-weight: bold;
            font-size: 26px;
            margin: 0;
            letter-spacing: 0px;
          }

          .figure :global(h5) {
            margin: 0;
            font-size: 18px;
            text-align: left;
          }

          .figure :global(h6) {
            margin: 0;
            font-size: 18px;
            font-weight: lighter;
          }

          .figure :global(ul) {
            margin: 0;
          }

          .figure :global(ul li) {
            padding: 0;
          }

          .figure :global(ul p) {
            text-align: left !important;
          }

          @media screen and (max-width: 1000px) {
            .figure,
            .figure:nth-last-of-type(2n) {
              flex-direction: column;
            }

            .figure:nth-last-of-type(2n) :global(.copy),
            .figure:nth-last-of-type(2n) :global(.copy p) {
              text-align: start;
            }

            .figure .col {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
