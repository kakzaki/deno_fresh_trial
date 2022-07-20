/** @jsx h */
import { h } from "preact";
import { Post } from "../model/post.tsx";
import { tw } from "@twind";

interface IndexProps {
  posts: Map<string, Post>;
}

const POSTS_DIRECTORY = "blog/posts";

export function Posts({ posts }: IndexProps) {
  const postIndex = [];
  for (const [_key, post] of posts.entries()) {
    postIndex.push(post);
  }
  postIndex.sort(
    (a, b) => (b.publishDate?.getTime() ?? 0) - (a.publishDate?.getTime() ?? 0)
  );

  return (
    <div>
      {postIndex.map((post) => (
        <PostCard post={post} key={post.pathname} />
      ))}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <div class={tw`pt-12 first:pt-0`}>
      <h3 class={tw`text-lg font-bold`}>
        <a
          class={tw`hover:text-blue-600 hover:underline transition duration-75 ease-in-out`}
          href={`${POSTS_DIRECTORY}${post.pathname}`}
        >
          {post.title}
        </a>
      </h3>
      <p class={tw`text-gray-500`}>
        {post.publishDate.toISOString().split("T")[0]}
      </p>
    </div>
  );
}
