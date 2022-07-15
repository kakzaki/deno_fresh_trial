/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { SocialLinks } from "../components/SocialLinks.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { walk } from "walk";
import { Posts } from "../components/posts.tsx";
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
        class={tw`bg-white font-semibold text-center rounded-md max-w-xs border shadow-xs p-6`}
      >
        <img
          class={tw`mb-3 w-32 h-32 rounded-full mx-auto shadow-sm`}
          src="/me.webp"
          alt="A Passionate Flutter developer"
        />
        <h1 class={tw`text-lg text-gray-700`}>Zaki Mubarok</h1>
        <h3 class={tw`text-sm text-gray-400`}>
          A Passionate Flutter developer
        </h3>
        <p class={tw`text-xs text-gray-400 mt-4`}>
          Hardworker, Charismatic, Reliable
        </p>
      </div>
      <div class={tw`m-6`}></div>
      <Posts posts={POSTS} />
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
