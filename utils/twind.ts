import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      // poppins: ["Poppins"],
      valera_round: ["Varela Round"],
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
};
if (IS_BROWSER) setup(config);
