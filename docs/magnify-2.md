# Magnify Media 2.0

Magnify Media is positioned as an **AI-Powered Growth Engineering Company**. This Next.js 15 rebuild delivers a cinematic homepage, full route scaffold, performance-minded motion system, Three.js growth core, React Three Fiber neural field, SEO endpoints, Docker support, and CI verification.

## Local development

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Production

- Configure `NEXT_PUBLIC_SITE_URL`, Calendly, Maps, and WhatsApp values in the deployment environment.
- Build the Docker image with `docker build -t magnify-media .`.
- Serve behind CloudFront or another CDN with image optimization and cache headers enabled.

## Architecture

- `components/experience`: 3D and dashboard experiences.
- `components/sections`: homepage storytelling sections.
- `components/effects`: cursor and preloader effects.
- `components/ui`: reusable interaction primitives.
- `lib`: content and growth-system data.
