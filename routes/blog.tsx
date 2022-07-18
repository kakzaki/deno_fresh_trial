/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { SocialLinks } from "../components/SocialLinks.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { walk } from "walk";
import { Posts } from "../components/posts.tsx";
import { Footer } from "../components/Footer.tsx";
import { loadPost } from "../utils/loadPost.ts";
import { Post } from "../model/post.tsx";
import { Head } from "$fresh/runtime.ts";

const POSTS = new Map<string, Post>();
const POSTS_DIRECTORY = "article/";

export const handler: Handlers<null> = {
  async GET(_, ctx) {
    await loadContent(POSTS_DIRECTORY);
    return ctx.render(null);
  },
};

export default function BlogPage({ data, ...props }: PageProps<null>) {
  return (
    <div>
      <div class={tw`mx-auto max-w-screen-sm px(4 sm:6 md:8) my(12 sm:20)`}>
        <Head>
          <title>Zaki Mubarok's Blog</title>
          <meta
            name="description"
            content="Senior Flutter Developer. Surabaya, Indonesia. 🌍"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <div
          // class={tw`bg-white font-semibold text-center rounded-md max-w-xs border shadow-xs p-6 `}
          class={tw`bg-white text-start rounded-md max-w-xs `}
        >
          <img
            class={tw`w(24 md:32) h(24 md:32) rounded-full`}
            src="/me.webp"
            alt="Zaki Mubarok, Senior Flutter Developer Surabaya, Indonesia"
            width="500"
            height="500"
          />
          <h1 class={tw`text-lg text-gray-700 mt-4 font-bold`}>Zaki Mubarok</h1>
          <h3 class={tw`text-sm text-gray-500`}>
            A Passionate Flutter Developer
          </h3>
          <p class={tw`text-xs text-gray-400 mt-1`}>Surabaya, Indonesia.</p>
        </div>
        <div class={tw`m-6`}></div>
        <Posts posts={POSTS} />
      </div>
      <div class="flex-grow"></div>
      <Footer />
    </div>
  );
}

async function loadContent(postsDirectory: string) {
  for await (const entry of walk(postsDirectory)) {
    if (entry.isFile && entry.path.endsWith(".md")) {
      const [key, post]: [string, Post] = await loadPost(
        postsDirectory,
        entry.path
      );
      POSTS.set(key, post);
    }
  }
}
