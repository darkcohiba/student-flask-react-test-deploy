import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // changes our vite to launch out of port 3000
    port: 3000,
    // this allows the app to be accessed from outside the localhost 
    cors:true,
    // we write our fetches to /api/route and it will go through this proxy
    
  }
})
