/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {
  GitHubIcon,
  IconLink,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  InstagramIcon,
} from "./Icons.tsx";

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
      <IconLink
        href="https://id.linkedin.com/public-profile/in/zaki-mubarok-825634120"
        title="Linkedin"
        icon={LinkedinIcon}
      />
      <IconLink
        href="https://t.me/kakzaki"
        title="Telegram"
        icon={TelegramIcon}
      />
      <IconLink
        href="https://www.instagram.com/kakzaki/"
        title="Instagram"
        icon={InstagramIcon}
      />
    </div>
  );
}
