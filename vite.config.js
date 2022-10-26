import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'prompt',
      devOptions: {
          enabled: true
      },
      workbox: {
          globPatterns: ["**/*.{html,js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map}"],
          maximumFileSizeToCacheInBytes: 10000000,
          sourcemap: true
      },
      includeAssets:['/favicon.ico', '/favicon/apple-touch-icon.png', '/favicon/favicon-32x32.png'],
      manifest: {
          "short_name": "Vite Pouch",
          "name": "Vite Pouch",
          "description": "Smart Agent is an app for Garment & Textile Agents & Aadaths to manage their business end-to-end.",
          "icons": [
          {
              "src": "favicon.ico",
              "sizes": "48x48",
              "type": "image/x-icon"
          },
          {
              "src": "/favicon/favicon-16x16.png",
              "sizes": "16x16",
              "type": "image/x-icon"
          },
          {
              "src": "/favicon/favicon-32x32.png",
              "sizes": "32x32",
              "type": "image/x-icon"
          },
          {
              "src": "/favicon/android-chrome-192x192.png",
              "type": "image/png",
              "sizes": "192x192"
          },
          {
              "src": "/favicon/android-chrome-512x512.png",
              "type": "image/png",
              "sizes": "512x512"
          }
          ],
          "start_url": ".",
          "display": "standalone",
          "theme_color": "#5296d9",
          "background_color": "#ffffff"
      }
    }),
  ],
  define:{
      global: 'window',
  },
  optimizeDeps: {
      allowNodeBuiltins: ['pouchdb-browser']
  },
})
