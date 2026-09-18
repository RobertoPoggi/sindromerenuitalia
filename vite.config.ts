import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// Custom plugin to patch _routes.json and copy _headers after build
const patchRoutesPlugin = {
  name: 'patch-routes',
  closeBundle() {
    const routesPath = resolve(__dirname, 'dist/_routes.json')
    const routes = {
      version: 1,
      include: ['/*'],
      exclude: ['/images/*', '/static/*', '/brochure/*', '/favicon.svg', '/icons/*', '/manifest.json', '/robots.txt', '/sitemap.xml', '/sitemap-image.xml', '/llms.txt', '/humans.txt', '/.well-known/*']
    }
    try {
      writeFileSync(routesPath, JSON.stringify(routes))
      console.log('✓ _routes.json patched')
    } catch (e) {
      // ignore if dist doesn't exist yet
    }
    // _headers viene copiato nel post-build script in package.json
  }
}

export default defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    }),
    patchRoutesPlugin
  ]
})
