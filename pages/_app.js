import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Link } from "../components/Link";
import { Image } from "../components/Image";

import "../public/global.css";

const images = [
  <Image alt="" src="/assets/img/dancing/crop/1.png" width={43} height={80} />,
  <Image alt="" src="/assets/img/dancing/crop/2.png" width={56} height={80} />,
  <Image alt="" src="/assets/img/dancing/crop/3.png" width={44} height={80} />,
  <Image alt="" src="/assets/img/dancing/crop/4.png" width={65} height={80} />,
  <Image alt="" src="/assets/img/dancing/crop/5.png" width={55} height={80} />,
];

const nav = [
  {
    href: "/",
    children: "home",
  },
  {
    href: "/bio",
    children: "bio",
  },
  {
    href: "/assets/resume.pdf?v=3",
    target: "_blank",
    children: "resume",
  },
  {
    href: "/choreography",
    children: "choreography",
  },
  {
    href: "/photos",
    children: "photos",
  },
  {
    href: "/videos",
    children: "videos",
  },
  {
    href: "/fourbyfour",
    children: "Four by Four",
  },
];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [open, setOpen] = React.useState();
  const i = React.useRef(Math.floor(Math.random() * 5));

  React.useEffect(() => {
    if (router.pathname !== "/") {
      sessionStorage.seen = true;
    }
  }, [router.pathname]);

  React.useEffect(() => {
    function handler(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keyup", handler);
    return () => window.removeEventListener("keyup", handler);
  }, []);

  let children;
  if (pageProps.markdoc) {
    children = (
      <>
        <nav>
          <div className="nav-opener" onClick={() => setOpen((o) => !o)}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <Link href="/" className="image-link">
            {images[i.current]}
          </Link>
        </nav>
        <nav className="mobile-nav-menu" style={{ left: open ? "0" : "-100%" }}>
          <div className="nav-closer" onClick={() => setOpen((o) => !o)}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
          {nav.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link
                {...item}
                className="site-link"
                onClick={() => setOpen(false)}
              />
            </div>
          ))}
          {/* TODO: 
          <div className="nav-item">
            <span className="contact">contact</span>
          </div> 
          */}
        </nav>
        <main>
          <Component {...pageProps} />
        </main>
        <style jsx>
          {`
            .nav-opener {
              display: none;
              cursor: pointer;
              color: white;
              font-size: 48px;
            }

            .nav-closer {
              cursor: pointer;
              position: absolute;
              top: 1rem;
              right: 1rem;
              color: black;
              font-size: 48px;
            }

            .mobile-nav-menu {
              display: none;
              z-index: 900;
              position: fixed;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              gap: 2rem;
              width: 100%;
              height: 100%;
              top: 0;
              left: -100%;
              background-color: #fff;
              transition: all 300ms ease-out;
            }

            .mobile-nav-menu :global(a) {
              color: black;
            }

            @media screen and (max-width: 600px) {
              .mobile-nav-menu {
                display: flex;
              }
              .nav-opener {
                display: block;
              }
              nav :global(.image-link) {
                display: none;
              }
            }
          `}
        </style>
      </>
    );
  } else {
    children = <Component {...pageProps} />;
  }

  return (
    <>
      <Head>
        {pageProps.markdoc && pageProps.markdoc.frontmatter ? (
          <title>Emily Hansel | {pageProps.markdoc.frontmatter.title}</title>
        ) : (
          <title>Emily Hansel</title>
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700"
          rel="stylesheet"
        />
      </Head>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      />
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      />
      <script src="/assets/js/index.js" />
      {children}

      <style jsx global>
        {`
          main {
            max-width: ${pageProps.markdoc?.frontmatter?.maxWidth || "60%"};
          }

          @media screen and (max-width: 1000px) {
            main {
              max-width: 90%;
            }
          }
        `}
      </style>
    </>
  );
}
