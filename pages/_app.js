import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Link } from "../components/Link";
import { Image } from "../components/Image";

import "../public/global.css";

const images = [
  <Image alt="" src="/assets/img/dancing/crop/1.png" width={32} height={60} />,
  <Image alt="" src="/assets/img/dancing/crop/2.png" width={42} height={60} />,
  <Image alt="" src="/assets/img/dancing/crop/3.png" width={33} height={60} />,
  <Image alt="" src="/assets/img/dancing/crop/4.png" width={49} height={60} />,
  <Image alt="" src="/assets/img/dancing/crop/5.png" width={41} height={60} />,
];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const i = React.useRef(Math.floor(Math.random() * 5));

  React.useEffect(() => {
    if (router.pathname !== "/") {
      sessionStorage.seen = true;
    }
  }, [router.pathname]);

  let children;
  if (pageProps.markdoc) {
    children = (
      <>
        <nav>
          <Link href="/">{images[i.current]}</Link>
        </nav>
        <main>
          <Component {...pageProps} />
        </main>
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
      <script src="https://unpkg.com/ionicons@4.4.2/dist/ionicons.js" />
      <script src="https://unpkg.com/masonry-rows" />
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
