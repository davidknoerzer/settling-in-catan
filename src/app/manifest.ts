import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Settling in Catan",
    short_name: "Settle Catan",
    description: "Generate Maps for the Game Settlers of Catan",
    start_url: "/settling-in-catan/",
    display: "standalone",
    background_color: "#22C55E",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icons/icon-256x256.png",
        type: "image/png",
        sizes: "256x256",
      },
      {
        src: "/icons/icon-384x384.png",
        type: "image/png",
        sizes: "384x384",
      },
      {
        src: "/icons/icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
