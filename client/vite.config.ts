import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   host: true,
  //   strictPort: true,
  //   port: 5173,
  //   origin: "http://0.0.0.0:5173"
  // },
  plugins: [react(), tailwindcss()],
});
