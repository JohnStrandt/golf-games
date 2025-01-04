import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// background_color: "ffffff",
// theme_color: "#000000",
//
// mobile_web_app_capable: "yes",
// apple_mobile_web_app_status_bar_style: "black-translucent",
//
//  It took several hours for changes to this file to take effect.
//  I changed theme_color to black (#000000), didn't update on my
//  phone until the next day after pushing to netlify.
//
//  So, I removed the theme_color completely to see if the status bar
//  settings in index.html might actually take effect.
//
//  the status bar went from black to white.  I don't understand, as the
//  default is supposed to be black.
//
//  I added the apple_mobile_web... and pushed at 11:33 Saturday.
//
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Golf Games",
        short_name: "Wolf",
        description: "A collection of popular golf wager games",
        display: "standalone",
        mobile_web_app_capable: "yes",
        apple_mobile_web_app_status_bar_style: "black-translucent",
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
