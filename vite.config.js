import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({ registerType: "autoUpdate" })],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
