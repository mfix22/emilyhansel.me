import React from "react";
import { Link } from "./Link";

export function Footer() {
  return (
    <footer className="credits">
      Website by <Link href="https://mikefix.me">Michael Fix</Link> | Cover
      photos by <Link href="http://www.jlam.com/">Jason Lam</Link>
    </footer>
  );
}
