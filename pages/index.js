import React from "react";
import { Link } from "../components/Link";

function Submenu({ menu, children, activeMenu, setActiveMenu }) {
  const active = menu === activeMenu;
  return (
    <li onMouseLeave={() => setActiveMenu(null)}>
      <button
        onMouseEnter={() => setActiveMenu(menu)}
        onClick={() => setActiveMenu(menu)}
        onFocus={() => setActiveMenu(menu)}
      >
        {menu}
      </button>
      {children}
      <style jsx>
        {`
          button {
            appearance: none;
            background: none;
            border: none;
            font-size: inherit;
            cursor: pointer;
            padding: 0;
            margin: 0;
          }
          li :global(ul) {
            transition: all 300ms ease-out;
            opacity: ${active ? 1 : 0};
            visibility: ${active ? "visible" : "hidden"};
          }
          button:active + :global(ul) {
            opacity: 1;
            user-select: initial;
          }
        `}
      </style>
    </li>
  );
}

export default function Home() {
  // TODO: pass as context
  const [activeMenu, setActiveMenu] = React.useState(null);

  function closeMenu() {
    return setActiveMenu(null);
  }

  return (
    <div className="container">
      <h1>Emily Hansel</h1>
      <h2>Dancer | Choreographer</h2>
      <nav>
        <ul>
          <Submenu
            menu="about"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <ul>
              <li>
                <Link href="/bio">bio</Link>
              </li>
              <li>
                <Link href="/assets/resume.pdf?v=3" target="_blank">
                  resume
                </Link>
              </li>
            </ul>
          </Submenu>
          <Submenu
            menu="work"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <ul>
              <li>
                <Link href="/choreography">choreography</Link>
              </li>
              <li>
                <Link href="/writing">writing</Link>
              </li>
            </ul>
          </Submenu>
          <li>
            <Link href="/press" onFocus={closeMenu}>
              press
            </Link>
          </li>
          <Submenu
            menu="galleries"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <ul>
              <li>
                <Link href="/photos">photos</Link>
              </li>
              <li>
                <Link href="/videos">videos</Link>
              </li>
            </ul>
          </Submenu>
          <li>
            <Link href="#" tabindex="0" onFocus={closeMenu}>
              contact
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/em_hansel/"
              target="_blank"
              rel="noreferrer noopener"
              onFocus={closeMenu}
            >
              <ion-icon name="logo-instagram" />
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .container {
            font-family: "Lato", sans-serif;
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0px);
            text-align: center;
          }
          h1 {
            font-size: 80px;
            font-weight: 100;
            text-transform: uppercase;
            color: white;
            margin: 0;
            white-space: nowrap;
          }
          h2 {
            font-size: 26px;
            font-weight: 300;
            letter-spacing: 9px;
            margin: 0;
            color: white;
            text-transform: lowercase;
          }
          nav {
            position: relative;
            left: -0.5rem;
            padding: 0;
            text-align: left;
            list-style: none;
            font-size: 20px;
          }
          .container :global(a),
          .container :global(button) {
            color: currentColor;
            font-weight: 400;
          }
          .container :global(a:hover),
          .container :global(button:hover) {
            color: var(--theme);
            text-decoration: none;
          }
          ul {
            text-align: left;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          ul :global(li) {
            padding: 0;
            margin: 0;
          }
          ul :global(li ul li) {
            margin: 0;
            padding: 0 0 0 2rem;
          }
          ul :global(ul),
          ul :global(ul li) {
            display: inline-block;
          }
        `}
      </style>
    </div>
  );
}
