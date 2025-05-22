import { Caveat, Jura, Poppins } from "next/font/google";

export const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const jura = Jura({
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
