import Head from 'next/head'

import '../public/global.css'

export default function App({ Component, pageProps }) {
  let children
  if (pageProps.markdoc) {
    children = (
      <>
        <nav></nav>
        <main>
          <Component {...pageProps} />
        </main>
        <style jsx>
          {`
            nav {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
            }

            nav :global(.item) {
              margin-right: 10px;
              margin-bottom: 8px;
              font-size: 10px;
            }
          `}
        </style>
      </>
    )
  } else {
    children = <Component {...pageProps} />
  }

  return (
    <>
      <Head>
        <title>Emily Hansel</title>
      </Head>
      <script src="https://unpkg.com/ionicons@4.4.2/dist/ionicons.js" />
      {children}
    </>
  )
}
