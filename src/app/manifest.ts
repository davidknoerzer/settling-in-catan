import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Settling in Catan",
    short_name: "Settle Catan",
    description: "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
