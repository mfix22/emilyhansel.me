import React from 'react'

export function Video({ children, ...props }) {
  return (
    <div className="video">
      <figure>
        <div className="card">
          <iframe {...props} className="visual" frameBorder="0" allowFullScreen={true} />
        </div>
        <figcaption>{children}</figcaption>
      </figure>

      <style jsx>
        {`
          .video {
            margin: 0 auto 4rem;
          }

          iframe {
            width: 100%;
            height: 100%;
          }
          figcaption {
            margin-top: 1rem;
          }
          figcaption :global(p) {
            display: block;
            text-align: center;
          }
          figcaption :global(em) {
            font-style: italic;
          }
          figcaption :global(strong) {
            font-size: smaller;
          }
          .card {
            border: 4px solid #fff;
            width: 100%;
            height: 28vw;
          }
        `}
      </style>
    </div>
  )
}
