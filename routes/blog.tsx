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
          content="Senior Flutter Developer. @dorandev core team. 🌍"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
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
