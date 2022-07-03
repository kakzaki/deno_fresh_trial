/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

import { SocialLinks } from "../components/SocialLinks.tsx";

export default function Home() {
  const linkClass = tw
    `text-blue(600 hover:500) hover:underline transition duration-75 ease-in-out`;

  return (
    <div
      class={tw`mx-auto max-w-screen-md px(4 sm:6 md:8) my(12 sm:20 md:32)`}
    >
      <Head>
        <title>Home - Zaki Mubarok</title>
        <meta
          name="description"
          content="Senior Flutter Develper. @dorandev core team. he/him 🌍🌻💚"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div class={tw`flex flex(col sm:row) gap-8`}>
        <img
          src="/me.jpeg"
          alt="zaki mubarok"
          width="500"
          height="500"
          class={tw`w(24 md:32) h(24 md:32) rounded-full`}
        />
        <div class={tw`flex flex-col justify-center`}>
          <p class={tw`leading-tight text(gray-900 2xl md:3xl)`}>
            Hello, I'm
          </p>
          <h1 class={tw`leading-tight text(gray-900 4xl md:5xl) font-semibold`}>
            Zaki Mubarok
          </h1>
        </div>
      </div>
      <div class={tw`mt-10 leading-7 text(gray-900 lg)`}>
        I'm a Senior Flutter Develper, @dorandev core team and{" "}
        <a href="https://github.com/kakzaki" class={linkClass}>
          open source enthusiast
        </a>
        . I like Dart, PHP, Go, Kotlin, TypeScript, and fast mobile and web. I work at the{" "}
        <a href="https://dorangadget.com" class={linkClass}>
          Jete, PT Doran Sukses Indonesia
        </a>{" "}
        company, building{" "}
        <a href="https://jebusiness.com" class={linkClass}>
          Jebusiness
        </a>{" "}
        and{" "}
        <a href="https://jeclock.com" class={linkClass}>
          Jeclock
        </a> and many other products. I built{" "}
        <a href="https://github.com/kakzaki/blue_thermal_printer" class={linkClass}>
          Blue Thermal Printer
        </a>
        ,{" "}
        <a
          href="https://github.com/kakzaki/midpay"
          class={linkClass}
        >
          Midpay
        </a>
        , and a few other open source libraries. Probably reading some web or mobile spec
        right now.
      </div>
      <div class={tw`mt-10 leading-7 text(lg gray-900)`}>
        Wanna talk about something? DM me on{" "}
        <a href="https://wa.me/6285704703691" class={linkClass}>
          Whatsapp
        </a>{" "}
        or email me at{" "}
        <a href="mailto:kakzaki@gmail.com" class={linkClass}>
          kakzaki@gmail.com
        </a>
        .
      </div>
      <SocialLinks class="mt-10" />
    </div>
  );
}
