# HERITIER

## Project Overview
Heritier is a premium web app that transforms a single uploaded photo into a personalized fragrance concept. The app analyzes the mood, environment, and visual cues of the image to generate a fragrance pyramid with top, heart, and base notes. Users can then customize the suggested notes, review a final scent concept, and submit a request to have the fragrance turned into a real bespoke perfume bottle. The core promise is to turn photographs into lasting scent experiences.

## Product Goal
Build a clean V1 that proves the core experience:
1. Upload one photo
2. Generate an AI fragrance interpretation
3. Let the user edit the fragrance pyramid
4. Show a premium final scent concept
5. Capture a bottle request or pre-order

## V1 Scope
- Single photo upload only
- AI-generated scent interpretation
- Fragrance pyramid result
- Premium final scent concept screen
- Guest flow only
- No sales or request flow in V1
- No multi-photo blending

## Non-Goals for V1
- Authentication
- User profiles
- Database persistence
- Order tracking
- Admin panel
- Full e-commerce checkout
- Multi-image scent blending
- Social sharing
- Subscription or refill system
- Request / pre-order flow
- Email capture
- Resend integration

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- AI Provider: OpenAI API
- Email / request handling: None for V1
- Database: None for V1
- Deployment: Vercel
- Package manager: npm

## Core User Flow
1. User lands on the homepage
2. User uploads a single photo
3. Backend sends the photo to the AI analysis route
4. AI returns a structured fragrance interpretation
5. User reviews and edits top / heart / base notes
6. User sees the final scent concept and scent story
7. User submits a request / pre-order form
8. App sends the request details by email

## Experience Principles
- The product should feel premium, emotional, and minimal
- The experience should feel guided, not technical
- The user should feel like a scent creator, not a form filler
- The AI output should feel believable, elegant, and structured
- Every screen should support the feeling of turning memory into fragrance

## Architecture Rules
- Use Next.js App Router only
- In this project, app files are inside `src/app`
- Keep reusable UI in `/components/ui`
- Keep feature-specific UI in `/components/features`
- Keep helper utilities in `/lib`
- Keep prompts and schema helpers in `/lib/ai`
- Keep API routes in `/src/app/api`
- Keep styling simple and local to Tailwind utility classes
- Do not introduce a database in V1
- Do not introduce authentication in V1
- Do not add unnecessary dependencies without approval

## Expected Routes
- `/` — landing page
- `/create` — full guided creation flow
- `/api/analyze` — AI scent interpretation endpoint

## AI Output Requirements
The AI must return structured data, not loose prose.

Expected response shape:
- photoMood: string
- atmosphere: string
- environmentTags: string[]
- topNotes: string[]
- heartNotes: string[]
- baseNotes: string[]
- scentStory: string
- customizationOptions: object
- productionRationale: string

## AI Behavior Rules
- Interpret the image creatively but keep the fragrance logic believable
- Balance emotional storytelling with production-adjacent note selection
- Prefer clear fragrance language over abstract poetic writing
- Suggested notes should feel premium and intentional
- Avoid random or gimmicky note suggestions
- Keep the output concise enough to render cleanly in UI
- Do not claim scientific certainty from the image
- Treat the AI output as a fragrance concept, not a lab-certified formula

## Customization Rules
- Users can edit the fragrance pyramid
- Editing should stay within a controlled structure
- Prefer selectable alternatives instead of fully open-ended note entry
- Keep top / heart / base note editing clear and simple
- Do not allow the customization UX to become complex in V1

## Design Direction
- The visual style should feel like a luxury fragrance maison, not a generic SaaS product
- The interface should feel darker, rarer, more exclusive, and more fashion-house inspired
- Use deep espresso, dark brown, muted burgundy, rotten cherry, oxblood, and warm ivory tones
- The background should feel rich and dark
- Typography and spacing should feel couture, editorial, and high-end
- Avoid bright startup colors, loud gradients, glassmorphism, or trendy tech styling
- The design should feel intimate, expensive, dramatic, and restrained

## Brand Color Roles
- Background: #dfc9a8
- Surface: #b4966f
- Primary Text: #4c2b0b
- Heading Text: #6b4418
- Muted Text: #8d6736
- Primary Accent: #8d6736
- Secondary Accent: #c18340
- Hover Accent: #914e10
- Deep Accent: #5d1e0b
- Optional Contrast Accent: #363f68

## Typography Direction
- Headings should use an elegant serif style with a luxury editorial feel
- Body text should use a clean modern sans-serif for readability
- Prefer a pairing like Cormorant Garamond for headings and Inter for body copy
- Typography should do most of the luxury work, not excessive decoration

## UI Style Rules
- Use subtle borders more than heavy shadows
- Keep rounded corners refined, not playful
- Use restrained hover effects
- Keep buttons elegant and structured
- Avoid cluttered cards and over-designed UI elements
- The page should feel curated and premium, not technical

## Code Style
- Use TypeScript in strict mode
- Use functional React components only
- Use async / await
- Add error handling for every API route
- Validate all external input
- Keep files focused and small
- Prefer composition over giant components
- Use descriptive names
- Name files in kebab-case
- Name components in PascalCase

## Implementation Constraints
- Keep V1 simple
- Build only one core feature at a time
- Do not refactor working code unless necessary
- Do not add features outside the approved V1 scope
- Do not add a database just to save temporary state
- Do not add auth unless explicitly requested later
- Do not mix request capture with payment logic in V1

## Forms and Validation
- Validate uploaded file type and size
- Validate request form fields on client and server
- Show clear error messages
- Show loading states during AI generation
- Prevent empty submissions
- Keep form UX polished and minimal

## Environment Variables
- `OPENAI_API_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `REQUEST_RECEIVER_EMAIL`

Store all secrets in `.env.local`.
Never commit `.env.local`.

## Build Commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`

## Testing Rules
- Test each phase before moving to the next
- After each feature, verify the app still runs
- Manually test the full user flow often
- Check mobile layout during development
- Fix errors before starting the next phase

## Current Status
- Phase: Foundation
- Completed:
  - Clean Next.js project created
  - CLAUDE.md created
  - plan.md created
- In Progress:
  - Foundation setup
- Next:
  - Brand shell and landing page
- Blocked:
  - None

## Motion and Interaction Direction
- The experience should feel cinematic, interactive, and premium
- Avoid static page transitions and abrupt content appearance
- Use elegant entrance animations for headings, cards, and sections
- Use staggered reveal for typography and content blocks where appropriate
- Scroll should feel editorial and refined, not flat
- Loading states should feel branded and bespoke, not generic
- During AI analysis, prefer a perfume-inspired loading animation such as a bottle filling, vapor rising, or a refined scent-progress visual
- Fragrance pyramid and result sections should animate in gracefully
- Motion should feel luxurious and restrained, never flashy or gimmicky
- Use animation to increase emotional value and perceived craftsmanship
