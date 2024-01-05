import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

import { Link } from "../components/Link";
import { Image } from "../components/Image";

import "../public/global.css";

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
  const previousRoute = React.useRef(router.pathname);
  const [open, setOpen] = React.useState();
  const [shouldDance, setShouldDance] = React.useState(undefined);
  const i = React.useRef(Math.floor(Math.random() * 5));

  React.useLayoutEffect(() => {
    if (previousRoute.current !== "/") {
      setShouldDance(false);
    } else {
      setShouldDance(true);
    }
  }, [router.pathname]);

  React.useEffect(() => {
    previousRoute.current = router.pathname;
  });

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
            <Image alt="" src="/assets/img/back.png" width={72} height={72} />
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
                onClick={() => setOpen(false)}
                style={{ color: "black" }}
              />
            </div>
          ))}
          {/* TODO: 
          <div className="nav-item">
            <span className="contact">contact</span>
          </div> 
          */}
        </nav>
        <main className={pageProps.markdoc?.frontmatter?.className}>
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
    children = <Component {...pageProps} shouldDance={shouldDance} />;
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
        <link rel="shortcut icon" href="/assets/img/favicon5.png" />
        <link rel="icon" href="/assets/img/favicon5.png" />
      </Head>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      />
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      />
      {children}
      <style jsx global>
        {`
          main {
            /* TODO: use className instead */
            max-width: ${pageProps.markdoc?.frontmatter?.maxWidth || "60%"};
          }

          @media screen and (max-width: 1000px) {
            main {
              max-width: 90%;
            }
          }
        `}
      </style>
      {/* TODO: use new GA tag */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-83432320-1" />
      <Script id="google-analytics">
        {`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-83432320-1', 'auto');
        ga('send', 'pageview');`}
      </Script>
    </>
  );
}
