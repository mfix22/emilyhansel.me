import React from "react";
import { Link } from "./Link";

export function Footer() {
  return (
    <footer className="credits">
      Website by <Link href="https://mikefix.me">Michael Fix</Link> | Cover
      photos by <Link href="http://www.jlam.com/">Jason Lam</Link>
      <style jsx>
        {`
          .credits {
            padding: 16px 0;
            margin-top: 2rem;
            display: inline-block;
            width: 100%;
            text-align: center;
            color: white;
            font-size: 12px;
            font-family: monospace;
            text-transform: uppercase;
          }
        `}
      </style>
    </footer>
  );
}
