This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## VA Loan Class landing page (`/va-loan-class`)

A single, focused landing page that gets realtors to register for the free
monthly VA loan class hosted by Zack Tarbet. It lives at `/va-loan-class` and
reuses the site's shared header, footer, and styling.

### Where to change things — one file

**Everything a non-developer would want to edit lives in
[`data/vaClass.ts`](data/vaClass.ts), inside the `CONFIG` block at the top.**
Change a value there and it updates everywhere on the page. You should not need
to touch any other file.

| What you want to change | `CONFIG` value in `data/vaClass.ts` |
| --- | --- |
| Where the sign-up form sends data | `FORM_ENDPOINT` — paste your HighLevel (GoHighLevel) webhook/form URL. **While it's blank (`""`), the form skips the send and just shows the confirmation screen so you can preview it.** Setting it is the one-line change that takes the form live. |
| The Zoom registration/join link | `ZOOM_LINK` |
| Class time shown to visitors | `CLASS_TIME` (e.g. `"12:00 PM"`) and `TIMEZONE_LABEL` (e.g. `"ET"`) |
| Class time used for the calendar files | `CLASS_START_24H` (24-hour, e.g. `"12:00"`), `CLASS_DURATION_MIN`, and `CLASS_TZ` (IANA zone, e.g. `"America/New_York"`). Keep `CLASS_START_24H` in sync with `CLASS_TIME`. |
| How many upcoming dates to list | `UPCOMING_COUNT` |
| Host name, title, brand, bio | `HOST.name`, `HOST.title`, `HOST.brand`, `HOST.bio` |
| Host headshot | `HOST.headshot` — drop a square image in `/public` (e.g. `/zack-tarbet.jpg`) and put that path here. Leave `""` to show an initials placeholder. |
| Loan officer NMLS # | `COMPLIANCE.loNmls` |
| Company NMLS #, legal name, address | `COMPLIANCE.companyNmls`, `COMPLIANCE.companyLegalName`, `COMPLIANCE.companyAddress` — **fill these in; they ship as `REPLACE_WITH_…` placeholders.** |
| Brand colors | `THEME` (navy background + single gold accent by default) |

The marketing copy (headline, "What you'll learn" bullets, "Who this is for")
lives in [`app/va-loan-class/page.tsx`](app/va-loan-class/page.tsx) and is
plainly labeled with section comments if you want to reword it.

### Class schedule (automatic)

The class runs on the **4th Tuesday of every month**. The next few dates are
computed from today's date — there are no dates to update by hand. The logic
lives below the `CONFIG` block in `data/vaClass.ts` and is validated against
Jul 28, Aug 25, Sep 22, Oct 27, Nov 24, Dec 22 (2026) and Jan 26 (2027).

### Before launch — checklist

1. Set `FORM_ENDPOINT` to your HighLevel webhook.
2. Set `ZOOM_LINK` to the real webinar link.
3. Confirm `CLASS_TIME` / `TIMEZONE_LABEL` (and matching `CLASS_START_24H` / `CLASS_TZ`).
4. Fill in the `COMPLIANCE` company NMLS, legal name, and address.
5. Add Zack's headshot to `/public` and set `HOST.headshot`.

### Hosting

This page is part of the existing Next.js site, so it deploys the same way the
rest of the site does. Push to your connected Git repo and let Vercel or Netlify
build it (`npm run build`), or run `npm run build && npm run start` on any Node
host. The page is statically generated and revalidates hourly, so the "next
class" date stays current without a redeploy. No separate hosting setup is
needed for the landing page — it ships at `yourdomain.com/va-loan-class`.
