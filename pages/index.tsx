import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-auto">
      <Head>
        <title>
          Michal Zimmermann | Pieces of knowledge from the world of web
          development.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/global.css" />
        <link
          rel="preload"
          href="/fonts/FredokaOne/FredokaOne-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Moon/Moon2.0-Light.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Moon/Moon2.0-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Moon/Moon2.0-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Phenomena/Phenomena-Bold.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 mb-10 mt-6 md:mt-16 ">
        <header
          style={{ fontFamily: "Phenomena", fontWeight: "bold" }}
          className="flex-wrap max-w-screen-xl md:flex-nowrap w-full flex text-white space-y-10 md:space-y-0 justify-center"
        >
          <div className="">
            <h1 className="text-5xl sm:text-7xl">Michal Zimmermann</h1>
            <small className="text-lg md:text-2xl">
              Pieces of knowledge from the world of web development.
            </small>
          </div>
          <nav className="md:ml-auto flex">
            <ul className="w-full flex items-end text-white md:flex-col text-xl md:text-right space-x-10 md:space-y-5">
              <li>
                <Link href="/hello" passHref>
                  <a className="flex items-center space-x-3">
                    <span>posts</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline self-end"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="flex items-center space-x-3">
                    <span>snippets</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline self-end"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="flex items-center space-x-3">
                    <span>rss</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline self-end"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section
          style={{ display: "none" }}
          className="min-h-screen bg-white max-w-screen-xl w-full shadow-sm p-10 leading-10 text-xl"
        >
          <h1
            style={{
              fontFamily: "Phenomena",
              fontWeight: "bold",
              color: "hsla(270, 77%, 71%, 1)",
            }}
            className="text-6xl mb-10"
          >
            React.useEffect with useRef hook on a very long line
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            luctus massa. Curabitur non augue nibh. Quisque eget turpis congue,
            facilisis velit eu, tempus felis. Pellentesque volutpat tempor
            turpis, sed facilisis nibh varius a. Cras interdum eros sem, et
            fringilla enim maximus ut. Phasellus facilisis dignissim orci vitae
            pharetra. Mauris lacinia lacus et neque accumsan lacinia.
          </p>

          <p>
            Aenean ut convallis metus. Integer sit amet iaculis tortor, id
            lobortis diam. Nam sollicitudin a justo eu ultrices. Nam metus
            tortor, finibus vitae tempor eu, lacinia a lectus. Curabitur vitae
            ipsum sit amet ante sodales interdum. Aenean sollicitudin nisi id
            ante mattis ultrices nec id quam. Nulla sed quam nec ante semper
            eleifend. Quisque volutpat laoreet sem, rhoncus interdum metus
            dapibus et. Fusce sed nunc risus.
          </p>

          <p>
            In hac habitasse platea dictumst. Sed in aliquam dolor, sit amet
            consectetur nisi. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Donec sed tortor a ligula vulputate cursus aliquet quis
            sapien. Suspendisse sed felis gravida, congue diam sed, fringilla
            quam. Integer id fringilla diam. In quis dolor id neque posuere
            porttitor eget sollicitudin orci. Sed lacinia congue orci dapibus
            efficitur. In vestibulum dui nec arcu maximus, quis porttitor diam
            malesuada. Nulla tempor dolor at auctor finibus. Ut imperdiet varius
            quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque a orci sit amet sapien ultricies fermentum a feugiat
            eros. Aenean eu augue nulla. Maecenas ante sapien, fermentum et nisi
            nec, ornare lacinia eros. Mauris in sagittis justo.
          </p>

          <p>
            Etiam porttitor ipsum et magna ornare, sed ullamcorper diam
            pharetra. Mauris eget mattis ligula. Praesent ut varius arcu, a
            sagittis eros. Integer quis tortor nibh. Nulla facilisi. Proin
            semper enim accumsan aliquet faucibus. Integer tincidunt arcu non
            blandit dignissim. Duis in turpis eleifend, porta orci eu,
            condimentum nibh. Nulla dolor enim, facilisis eu justo eget,
            imperdiet tempor leo. Donec lacinia tristique cursus. Nam dictum
            purus ante, id lobortis dui commodo eu. Sed vel ipsum pulvinar,
            pulvinar magna in, vestibulum eros.
          </p>

          <p>
            Donec euismod enim vel lacus sollicitudin, eget feugiat ligula
            vulputate. Nunc augue tortor, molestie vel lobortis a, dictum sit
            amet augue. Proin sit amet ipsum rutrum, suscipit urna id, ultricies
            lorem. Mauris venenatis dui in auctor viverra. Donec non
            pellentesque purus. Integer bibendum sit amet nunc id consectetur.
            Curabitur sagittis erat vitae pharetra interdum. Nunc massa nisi,
            sodales sit amet venenatis non, molestie ut justo. Maecenas congue
            cursus nunc a auctor. Mauris lacinia tortor nisi, eget tempus augue
            semper non. Phasellus id condimentum nisi. Vestibulum convallis
            neque sed arcu lobortis, vel tincidunt lorem aliquam. Cras egestas
            quam mauris, vel auctor arcu mollis sit amet.
          </p>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
