# Developer Reference

## Local Development
Install:
```bash
npm install
```

Run dev server:
```bash
npm run dev
```

Build production bundle:
```bash
npm run build
```

Preview production output:
```bash
npm run preview
```

## Where to Edit What
- Interaction behavior and state flow: `src/App.tsx`
- Prediction generation logic and metadata helpers: `src/prediction-engine.ts`
- Prediction copy catalog: `src/predictions.ts`
- Styling and animation: `src/styles.css`

## QA Checklist
- CTA click immediately transitions to generation state
- Anticipation sequence is readable and intentional
- Reveal card settles smoothly
- Typing animation is legible on desktop and mobile
- Replay flow feels continuous
- Reduced-motion behavior degrades gracefully

## Troubleshooting
- If dev server fails, verify command is `npm run dev` (not `npm dev`).
- If type errors appear, run `npm run build` and fix in reported order.
- If motion feels too fast/slow, tune timing constants in `src/App.tsx` and `src/styles.css` together.

## Contribution Notes
- Keep UI minimal; avoid adding product surface area without intent.
- Prefer small, focused commits.
- Validate with a production build before proposing merge.

## Changelog Convention
For future updates, use a simple internal format:
- Date
- What changed
- Why it changed
- User-facing impact
