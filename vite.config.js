import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  define: {
    // this define section added with serviceworker files
    "process.env": {},
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Golf Games",
        short_name: "Wolf",
        description: "A collection of popular golf wager games",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        orientation: "portrait",
        icons: [
          {
            src: "favicons/apple-touch-icon.png",
            sizes: "180x180",
            rel: "apple-touch-icon",
          },
          {
            src: "favicons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
