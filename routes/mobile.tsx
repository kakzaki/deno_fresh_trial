/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import LemonDrop from "../islands/LemonDrop.tsx";
import { Footer } from "../components/Footer.tsx";
import { Check } from "../components/Icons.tsx";

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

const TITLE = "Agensi aplikasi android, ios dan desktop Surabaya";
const DESCRIPTION =
  "Kami adalah tim pengembangan anak muda berbakat yang menyediakan layanan pembuatan aplikasi android, ios dan desktop di Surabaya dan seluruh Indonesia.";

export default function MobilePage(props: PageProps) {
  const ogImageUrl = new URL(asset("/android-chrome-192x192.png"), props.url)
    .href;
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
      <div class={tw`font-valera_round flex flex-col min-h-screen`}>
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
  const container = tw`w-full flex justify-center items-center flex-col bg-red-900`;
  const nav = tw`flex justify-end items-center bg-red-900`;
  const a = tw`border(1 white) inline-flex items-center h-10 px-4 m-4 text-white bg-transparent rounded hover:bg-red-600`;
  const title = tw`py-4 text(4xl sm:4xl lg:4xl white center) sm:tracking-tight font-extrabold my-20 mx-6`;

  return (
    <Fragment>
      <div class={nav}>
        <a href="https://wa.me/6285704703691" class={a}>
          Hubungi kami
        </a>
      </div>
      <section class={container}>
        <h2 class={title}>
          Solusi pembuatan aplikasi android, ios, dan desktop anda
        </h2>
        <div class={tw`pb-12 flex-1`}></div>
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
      <Check />
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
          src="/android-chrome-192x192.png"
          class={tw`w-30 mx-auto`}
          width={192}
          height={192}
          alt="logo of kakzaki.dev"
        />
      </picture>

      <h2 class={title}>Kenapa memilih kami?</h2>

      <p class={tw`text-gray-600`}>
        Kami menggunakan teknologi terbaru untuk membangun aplikasi android, ios
        dan desktop anda, berikut merupakan beberapa keunggulan yang kami
        tawarkan:
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
      <h3
        class={tw`py-1 text(2xl sm:2xl lg:2xl gray-900 center) sm:tracking-tight font-bold`}
      >
        Diskusikan ide anda, kami siap membantu
      </h3>
      <div
        class={tw` text(2xl sm:2xl lg:2xl gray-900 center) sm:tracking-tight`}
      >
        <a
          href="https://wa.me/6285704703691"
          class={tw`border(2 white) inline-flex items-center h-8 p-8 m-8 text-white bg-red-900 font-bold rounded hover:bg-red-600`}
        >
          Hubungi kami
        </a>
      </div>
    </section>
  );
}
