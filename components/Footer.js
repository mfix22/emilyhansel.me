import React from 'react'
import { Link } from './Link'

export function Footer() {
  return (
    <footer className="credits">
      Website by{' '}
      <Link href="https://mfix22.github.io" alt="Michael Fix Freelance">
        Michael Fix
      </Link>{' '}
      | Cover photos by{' '}
      <Link href="http://www.jlam.com/" alt="Jason Lam Photography">
        Jason Lam
      </Link>
    </footer>
  )
}
