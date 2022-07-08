// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

export default function LandingPage() {
  return (
    <div class={tw`mx-auto max-w-screen-md px(4 sm:6 md:8) my(12 sm:20 md:32)`}>
      <Head>
        <title>Home - Zaki Mubarok</title>
        <meta
          name="description"
          content="Senior Flutter Developer. @dorandev core team. 🌍"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
    </div>
  );
}

//make html template to be used in the about page with taildwind styling
// Language: html
// Path: routes\about.html
