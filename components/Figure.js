import React from 'react'

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
            border: 4px solid #fff;
            user-select: none;
          }

          .figure :global(p) {
            font-weight: 300;
          }

          .figure :global(h4) {
            font-weight: bold;
            font-size: 26px;
            margin: 0 0 1rem;
            letter-spacing: 0px;
          }
        `}
      </style>
    </div>
  )
}
