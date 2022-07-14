/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { SocialLinks } from "../components/SocialLinks.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { walk } from "walk";
import { Posts } from "../components/posts.tsx";
import { loadPost } from "../utils/loadPost.ts";
import { Post } from "../model/post.tsx";

const POSTS = new Map<string, Post>();
const POSTS_DIRECTORY = "blog/posts/";

export const handler: Handlers<null> = {
  async GET(_, ctx) {
    await loadContent(POSTS_DIRECTORY);
    return ctx.render(null);
  },
};

export default function BlogPage({ data, ...props }: PageProps<null>) {
  return (
    <div class={tw`mx-auto max-w-screen-sm px(4 sm:6 md:8) my(12 sm:20)`}>
      <SocialLinks class={tw`mt(5 md:7)`} />
      <hr class={tw`w-5/6 mx-auto my-10`} />
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
