import React from "react";
import Head from "next/head";
import { Link } from "../components/Link";

const Context = React.createContext({
  activeMenu: null,
  setActiveMenu: () => {},
});

function Submenu({ menu, children }) {
  const { activeMenu, setActiveMenu } = React.useContext(Context);
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

function ContactForm() {
  const { activeMenu, setActiveMenu } = React.useContext(Context);
  const active = activeMenu === "contact";

  return (
    <div className="contact-menu" onClick={() => setActiveMenu(null)}>
      <form
        method="POST"
        action="https://formspree.io/emilylhansel@gmail.com"
        onClick={(e) => e.stopPropagation()}
      >
        <p>Fill out the form below to contact Emily</p>
        <div className="row">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="_replyto" placeholder="Email" required />
        </div>
        <textarea
          name="message"
          placeholder="Hey Emily…"
          required
          resize="none"
        />
        <input class="email-send" type="submit" value="Send" />
      </form>
      <style jsx>
        {`
          .contact-menu {
            top: 0;
            left: 0;
            position: fixed;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 300ms ease-out;
            opacity: ${active ? 1 : 0};
            visibility: ${active ? "visible" : "hidden"};
          }
          .contact-menu input {
            margin: 0;
            height: 2rem;
            padding: 0.25rem;
          }
          .contact-menu form {
            background: white;
            border-radius: 2px;
            color: black;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            min-width: 420px;
          }
          .contact-menu textarea {
            height: 8rem;
            resize: none;
          }
          .contact-menu input,
          .contact-menu textarea,
          .contact-menu input[type="submit"] {
            outline: none;
            width: 100%;
            font-family: inherit;
            color: #123;
            border: 2px solid #123;
            transition: all 200ms ease-out;
            border-radius: none !important;
          }
          .contact-menu p {
            margin: 0 0 0.25rem;
            font-weight: 500;
          }
          .contact-menu .row {
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;
          }
          .contact-menu input[type="submit"] {
            cursor: pointer;
            height: 2rem;
            color: white;
            background-color: #123;
          }
          .contact-menu input[type="submit"]:hover,
          .contact-menu input[type="submit"]:focus,
          .contact-menu input[type="submit"]:active {
            background-color: #1e3c59;
            border-color: #1e3c59;
          }
        `}
      </style>
    </div>
  );
}

export default function Home({ shouldDance }) {
  const [activeMenu, setActiveMenu] = React.useState(null);

  function closeMenu() {
    return setActiveMenu(null);
  }

  return (
    <Context.Provider value={{ activeMenu, setActiveMenu }}>
      <Head>
        <link rel="prefetch" href="assets/img/dancing/12.png" />
        <link rel="prefetch" href="assets/img/dancing/13.png" />
        <link rel="prefetch" href="assets/img/dancing/14.png" />
      </Head>
      <div id="preload-images" />
      <div className="dancing-image" />
      <div className="container">
        <Link href="/">
          <h1>Emily Hansel</h1>
        </Link>
        <h2>Dancer | Choreographer</h2>
        <nav>
          <ul>
            <Submenu menu="about">
              <ul>
                <li>
                  <Link href="/bio">bio</Link>
                </li>
                <li>
                  <Link href="/assets/resume.pdf?v=4" target="_blank">
                    resume
                  </Link>
                </li>
              </ul>
            </Submenu>
            <Submenu menu="work">
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
            <Submenu menu="galleries">
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
              <button
                onFocus={closeMenu}
                onClick={() => setActiveMenu("contact")}
              >
                contact
              </button>
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
      </div>
      <ContactForm />
      <style jsx>
        {`
          #preload-images {
            width: 0px;
            height: 0px;
            display: inline;
            /* https://stackoverflow.com/questions/819336/how-to-preload-images-without-javascript */
            background-image: url(/assets/img/dancing/12.png);
            background-image: url(/assets/img/dancing/13.png);
            background-image: url(/assets/img/dancing/14.png);
          }

          .container {
            font-family: "Lato", sans-serif;
            position: fixed;
            top: 40%;
            left: 50%;
            text-align: center;
            opacity: 0;
            transform-origin: center;
            transform: translate3d(-50%, -40%, 0px);
            ${shouldDance
              ? `animation: fadeIn 600ms ease-out forwards calc(var(--animation-duration) + 200ms);`
              : shouldDance === false
              ? "opacity: 1;"
              : ""}
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
          nav :global(button) {
            appearance: none;
            background: none;
            border: none;
            font-size: inherit;
            cursor: pointer;
            padding: 0;
            margin: 0;
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
            list-style: none;
            text-align: left;
            margin: 0;
            display: flex;
            flex-direction: column;
          }
          ul :global(li) {
            padding: 0.5rem 0;
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

          .dancing-image {
            position: absolute;
            top: 0px;
            width: 576px;
            height: 720px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            ${shouldDance
              ? "animation: dance var(--animation-duration) linear forwards;"
              : `left: 52%;
                 background-image: url(/assets/img/dancing/14.png);
              `}
          }

          @keyframes fadeIn {
            0% {
              transform: translate3d(-50%, -37%, 0px);
              opacity: 0;
            }
            100% {
              transform: translate3d(-50%, -40%, 0px);
              opacity: 1;
            }
          }

          @keyframes dance {
            0% {
              background-image: url(/assets/img/dancing/12.png);
              left: 6%;
              opacity: 0;
            }
            10%,
            35% {
              background-image: url(/assets/img/dancing/12.png);
              left: 6%;
              opacity: 1;
            }
            45% {
              background-image: url(/assets/img/dancing/12.png);
              left: 6%;
              opacity: 0;
            }
            46% {
              background-image: url(/assets/img/dancing/13.png);
              left: 30%;
              opacity: 0;
            }
            55%,
            80% {
              background-image: url(/assets/img/dancing/13.png);
              left: 30%;
              opacity: 1;
            }
            90% {
              background-image: url(/assets/img/dancing/13.png);
              left: 30%;
              opacity: 0;
            }
            91% {
              background-image: url(/assets/img/dancing/14.png);
              left: 52%;
              opacity: 0;
            }
            100% {
              background-image: url(/assets/img/dancing/14.png);
              left: 52%;
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion) {
            .container {
              animation: none !important;
              opacity: 1;
            }
            .dancing-image {
              animation: none !important;
              left: 52%;
              background-image: url(/assets/img/dancing/14.png);
            }
          }
        `}
      </style>
    </Context.Provider>
  );
}
