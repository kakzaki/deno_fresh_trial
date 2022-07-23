import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
//@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      //poppins: ["Poppins"],
      valera_round: ["Valera Round"],
    },
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 74%)",
          green: "hsl(154, 59%, 51%)",
        },
        accent: {
          blue: "hsl(248, 32%, 49%)",
        },
        neutral: {
          darkBlue: "hsl(249, 10%, 26%)",
          grayishBlue: "hsl(246, 25%, 77%)",
        },
      },
      backgroundImage: {
        "mobile-pattern": "url('/background/bg-intro-mobile.png')",
        "desktop-pattern": "url('/background/bg-intro-desktop.png')",
      },
    },
  },
  preflight: {
    "@font-face": [
      {
        fontFamily: "Valera Round",
        src: 'url(/fonts/w8gdH283Tvk__Lua32TysjIfp8uP.woff2) format("woff")',
      },
    ],
  },
};
if (IS_BROWSER) setup(config);
