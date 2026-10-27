# Cabo Hosted

Next.js 15 (App Router) + TypeScript + Tailwind. Deploys to Vercel.

## Run
```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

## Edit content
Everything editable (phone, WhatsApp number, prices, WhatsApp messages, copy for services) lives in `src/config/site.ts`.
Replace `52XXXXXXXXXX` / `phoneDisplay` there first.

## Photos
Drop files into `public/photos/` with these exact names. Until they exist, a branded placeholder shows the expected filename.

| File | Notes |
|---|---|
| `bundle-girls-trip.jpg` | 4:3 landscape, min 1200x900 |
| `bundle-proposal.jpg` | 4:3 landscape, min 1200x900 |
| `bundle-welcome.jpg` | 4:3 landscape, min 1200x900 |
| `celebrations-cake.jpg` | 4:3 landscape, min 1200x900 |
| `celebrations-decor.jpg` | 4:3 landscape, min 1200x900 |
| `celebrations-flowers.jpg` | 4:3 landscape, min 1200x900 |
| `celebrations-surprise.jpg` | 4:3 landscape, min 1200x900 |
| `events-birthday.jpg` | 4:3 landscape, min 1200x900 |
| `events-mexican-night.jpg` | 4:3 landscape, min 1200x900 |
| `events-photo.jpg` | 4:3 landscape, min 1200x900 |
| `events-quince.jpg` | 4:3 landscape, min 1200x900 |
| `events-ranch.jpg` | Events page, Rancho McCoy overview (4:3) |
| `events-wedding.jpg` | 4:3 landscape, min 1200x900 |
| `experiences-bartender.jpg` | 4:3 landscape, min 1200x900 |
| `experiences-chef.jpg` | 4:3 landscape, min 1200x900 |
| `experiences-kids.jpg` | 4:3 landscape, min 1200x900 |
| `experiences-mariachi.jpg` | 4:3 landscape, min 1200x900 |
| `experiences-massage.jpg` | 4:3 landscape, min 1200x900 |
| `experiences-nurse.jpg` | 4:3 landscape, min 1200x900 |
| `experiences-photographer.jpg` | 4:3 landscape, min 1200x900 |
| `health-doctor.jpg` | 4:3 landscape, min 1200x900 |
| `health-iv.jpg` | 4:3 landscape, min 1200x900 |
| `health-labs.jpg` | 4:3 landscape, min 1200x900 |
| `health-pharmacy.jpg` | 4:3 landscape, min 1200x900 |
| `health-video.jpg` | 4:3 landscape, min 1200x900 |
| `hero.jpg` | Home hero, wide villa terrace/ocean (min 2400x1400) |
| `og.jpg` | Social share image (1200x630) |
| `pillar-celebrations.jpg` | 4:3 landscape, min 1200x900 |
| `pillar-events.jpg` | 4:3 landscape, min 1200x900 |
| `pillar-experiences.jpg` | 4:3 landscape, min 1200x900 |
| `pillar-health.jpg` | 4:3 landscape, min 1200x900 |
| `proposal-beach.jpg` | 4:3 landscape, min 1200x900 |
| `proposal-ranch.jpg` | 4:3 landscape, min 1200x900 |
| `proposal-villa.jpg` | 4:3 landscape, min 1200x900 |

## Request form
`POST /api/request` emails submissions via Resend. Set `RESEND_API_KEY`, `REQUEST_TO_EMAIL`, `REQUEST_FROM_EMAIL` in Vercel env vars.

## Spanish later
UI strings are in `src/i18n/en.ts`; add `es.ts` with the same shape.
