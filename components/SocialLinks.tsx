/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { GitHubIcon, IconLink, TwitterIcon } from "./Icons.tsx";

export function SocialLinks(props: { class?: string; tight?: boolean }) {
  return (
    <div class={tw`${props.class} flex ${props.tight ? "gap-2" : "gap-4"}`}>
      <IconLink
        href="https://github.com/kakzaki"
        title="GitHub"
        icon={GitHubIcon}
      />
      <IconLink
        href="https://twitter.com/kakzaki_id"
        title="Twitter"
        icon={TwitterIcon}
      />
    </div>
  );
}
