/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import LemonDrop from "../islands/LemonDrop.tsx";
import { Footer } from "../components/Footer.tsx";
import { Leaf } from "../components/Icons.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    // const accept = req.headers.get("accept");
    // if (accept && !accept.includes("text/html")) {
    //   const path = `https://deno.land/x/fresh@${VERSIONS[0]}/init.ts`;
    //   return new Response(`Redirecting to ${path}`, {
    //     headers: { "Location": path },
    //     status: 307,
    //   });
    // }
    return ctx.render();
  },
};

const TITLE = "Agensi aplikasi android dan ios Surabaya";
const DESCRIPTION =
  "Kami adalah tim pengembangan anak muda berbakat yang menyediakan layanan pembuatan aplikasi android dan ios di Surabaya dan seluruh Indonesia.";

export default function MobilePage(props: PageProps) {
  const ogImageUrl = new URL(asset("/home-og.png"), props.url).href;
  const origin = `${props.url.protocol}//${props.url.host}`;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <div class={tw`flex flex-col min-h-screen`}>
        <Hero />
        <div class={tw`flex-1`}>
          <Intro />
          <GettingStarted origin={origin} />
        </div>
        <Footer />
      </div>
    </>
  );
}

function Hero() {
  const container = tw`w-full flex justify-center items-center flex-col bg-green-300`;
  const nav = tw`flex justify-end items-center bg-green-300`;
  const a = tw`border(1 black) inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white`;

  return (
    <Fragment>
      <div class={nav}>
        <a href="https://wa.me/6285704703691" class={a}>
          Hubungi kami
        </a>
      </div>
      <section class={container}>
        <LemonDrop />
      </section>
    </Fragment>
  );
}
export interface ListItemProps {
  children: ComponentChildren;
}

function ListItem(props: ListItemProps) {
  return (
    <div class={tw`flex mt-3`}>
      <Leaf />
      <div class={tw`pl-4 flex-1`}>{props.children}</div>
    </div>
  );
}

function Intro() {
  const title = tw`py-4 text(4xl sm:4xl lg:4xl gray-900 center) sm:tracking-tight font-extrabold`;

  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <picture>
        <img
          src="/lemon-squash.svg"
          class={tw`w-64 mx-auto`}
          width={800}
          height={678}
          alt="deno is drinking fresh lemon squash"
        />
      </picture>

      <h2 class={title}>Kenapa memilih kami?</h2>

      <p class={tw`text-gray-600`}>
        Kami menggunakan teknologi terbaru untuk membangun aplikasi android dan
        ios anda, berikut merupakan beberapa keunggulan yang kami tawarkan:
      </p>

      <div>
        <ListItem>
          <b>Flutter</b> framework frontend multi platform dari google
        </ListItem>
        <ListItem>
          <b>Laravel/ExpressJS/Gofiber</b> sebagai backend yang bebas anda pilih
        </ListItem>
        <ListItem>
          <b>Clean Architecture</b> yang membuat mudah untuk dimaintenance
        </ListItem>
        <ListItem>
          <b>Berpengalaman</b> dalam membuat aplikasi cross platform
        </ListItem>
        <ListItem>
          <b>Progress tiap minggu</b> untuk mereview masa pengembangan
        </ListItem>
        <ListItem>
          <b>Termurah</b> karena kami punya efiensi team yang tinggi
        </ListItem>
        <ListItem>
          <b>Garansi</b> maintenance untuk bug
        </ListItem>
      </div>

      <p class={tw`text-gray-600`}>
        kami percaya bahwa kepercayaan pelangan adalah yang utama, maka kami
        berusaha semaksimal mungkin menghadirkan aplikasi dengan kualitas tinggi
      </p>
    </section>
  );
}

function GettingStarted(props: { origin: string }) {
  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <h2
        class={tw`py-4 text(4xl sm:4xl lg:4xl gray-900 center) sm:tracking-tight font-extrabold`}
      >
        Hubungi kami sekarang
      </h2>
      <div
        class={tw`py-4 text(4xl sm:4xl lg:4xl gray-900 center) sm:tracking-tight`}
      >
        <a
          href="https://wa.me/6285704703691"
          class={tw`border(1 black) inline-flex items-center h-10 px-4 m-4 text-black bg-green-300 rounded hover:bg-green-600`}
        >
          Hubungi kami
        </a>
      </div>
    </section>
  );
}
