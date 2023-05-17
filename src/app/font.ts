import { Raleway, Roboto } from "next/font/google";

export const raleway = Raleway({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--raleway-font",
  display: "block",
  preload: true,
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--roboto-font",
  display: "swap",
  preload: true,
});
