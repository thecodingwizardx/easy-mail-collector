
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Development API proxy for testing
      '/dev-api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, ''),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response:', proxyRes.statusCode, req.url);
          });
        },
      }
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Development mock API middleware
    {
      name: 'mock-api',
      configureServer(server: ViteDevServer) {
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next) => {
          if (req.url === '/submit-contact' && req.method === 'POST') {
            // Read the request body
            let body = '';
            req.on('data', (chunk: Buffer) => {
              body += chunk.toString();
            });
            
            req.on('end', () => {
              try {
                // Parse JSON body
                const data = JSON.parse(body);
                console.log('Form submission received:', data);
                
                // Mock successful response
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                  success: true, 
                  message: 'Form submitted successfully! (Development mode)' 
                }));
              } catch (error) {
                console.error('Error processing mock API request:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'Error processing request' }));
              }
            });
          } else {
            next();
          }
        });
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
