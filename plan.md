# Implementation Plan — Heritier

## Build Rules
- Complete one phase per fresh AI coding session
- Test at the end of every phase before moving on
- Do not add features outside the approved V1 scope
- Do not add authentication in V1
- Do not add a database in V1
- Do not add payment flow in V1
- Keep the experience linear and guided
- If something breaks, fix it before continuing
- Update `CLAUDE.md` Current Status after each completed phase

## Approved V1 Scope
- Single photo upload
- AI-powered scent interpretation
- Fragrance pyramid result
- Premium final scent concept screen
- Guest flow only

## Out of Scope for V1
- Authentication
- User accounts
- Saved scent history
- Dashboard
- Payment integration
- Multi-photo upload
- Order tracking
- Admin panel
- Request / pre-order flow
- Email capture
- Resend integration

---

## Phase A — Project Setup & Foundation

### Goals
Set up the project, dependencies, base folders, and core shared files.

### Tasks
- [x] Initialize a Next.js app with TypeScript and Tailwind
- [x] Create the root files: `CLAUDE.md`, `plan.md`
- [ ] Create `.env.local.example` with required variables
- [ ] Verify `npm run dev` works
- [ ] Verify `npm run build` works

### Test
- Dev server starts successfully
- App loads at `localhost:3000`
- Build completes without errors

---

## Phase B — Brand Shell & Landing Page

### Goals
Create the premium first impression and basic app shell.

### Tasks
- [ ] Set up luxury typography
- [ ] Set up brand color system
- [ ] Update `src/app/layout.tsx`
- [ ] Update `src/app/globals.css`
- [ ] Build the landing page in `src/app/page.tsx`
- [ ] Add a clear CTA to `/create`
- [ ] Make the landing page mobile responsive

### Test
- Landing page loads correctly
- CTA button exists and looks polished
- Layout feels premium on desktop and mobile
- No console errors

---

## Phase C — Guided Create Flow Shell (Mock Data Only)

### Goals
Build the full `/create` page structure first using mock data.
Do NOT connect the real AI API in this phase.

### Tasks
- [ ] Create `src/app/create/page.tsx`
- [ ] Build photo upload UI
- [ ] Add local image preview
- [ ] Add file validation for type and size
- [ ] Add step state in `/create`
- [ ] Add temporary mock scent result in local state
- [ ] Render placeholder sections for upload, analysis, scent pyramid, final concept, and request form

### Test
- User can upload one photo
- Preview is shown
- Invalid file types are rejected
- Mock analysis result appears after upload
- The step flow works without crashes

---

## Phase D — Real AI Scent Interpretation

### Goals
Replace mock data with a real AI-powered structured scent response.

### Tasks
- [ ] Create `lib/ai/prompt.ts`
- [ ] Create `lib/ai/schema.ts`
- [ ] Create `src/app/api/analyze/route.ts`
- [ ] Add server-side validation for uploaded image input
- [ ] Connect `/create` page to `/api/analyze`
- [ ] Add loading state
- [ ] Add API error state
- [ ] Fallback gracefully if AI response is malformed

### Test
- Uploading a valid photo triggers AI analysis
- App receives a structured scent response
- UI renders the returned data correctly
- Loading and error states both work

---

## Phase E — Editable Fragrance Pyramid & Final Scent Concept

### Goals
Turn the AI output into an interactive customization experience.

### Tasks
- [ ] Build editable top / heart / base notes UI
- [ ] Build final scent concept preview
- [ ] Show scent story
- [ ] Show mood and atmosphere summary
- [ ] Update concept preview live as user edits
- [ ] Add CTA to continue to request flow

### Test
- User can edit notes without breaking the UI
- Final scent concept updates correctly
- Edited state persists within the page session


---

## Phase F — Polish, QA & Deployment Prep

### Goals
Make the app feel launch-ready.

### Tasks
- [ ] Improve spacing and visual consistency
- [ ] Improve hover states
- [ ] Improve empty states
- [ ] Improve loading states
- [ ] Improve error states
- [ ] Check mobile layout at 375px width
- [ ] Remove dead code and debug logs
- [ ] Verify environment variable usage
- [ ] Confirm `npm run build` passes

### Test
- Full user flow works end-to-end
- No console errors
- No broken layout on mobile
- Build passes successfully

---

## Phase G — Deployment

### Goals
Ship the first live version.

### Tasks
- [ ] Add final production environment variables
- [ ] Deploy to Vercel
- [ ] Test live upload flow
- [ ] Test live AI analysis
- [ ] Test live request email delivery

### Test
- Live URL loads correctly
- Full flow works in production
- Request submissions arrive successfully
