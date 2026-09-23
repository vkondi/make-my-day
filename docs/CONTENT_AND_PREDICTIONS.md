# Content and Predictions

## Content Model
Predictions are authored as typed catalog entries in `src/predictions.ts`.

Required fields:
- `id`: unique string
- `category`: content bucket
- `prediction`: user-facing line
- `mood`: tonal tag
- `rarity`: weighted selection signal

## Categories
- `wholesome`
- `weirdly_specific`
- `mildly_inconvenient`
- `suspiciously_accurate`
- `indian_edition`

## Mood Tags
- `playful`
- `warm`
- `absurd`
- `chaotic`
- `grounded`

## Writing Guidelines
- Make predictions specific and concrete
- Keep lines conversational and human
- Avoid generic inspirational quote tone
- Prefer recognizable everyday behavior
- Keep phrasing short enough for readable typing animation

## Tone Calibration
Good:
- “You will be asked for an ETA before anyone has explained the actual requirement.”
- “You will type \"haha\" while maintaining a completely neutral facial expression.”

Not good:
- Vague motivational slogans
- Aggressive negativity with no comedic framing
- Overly long multi-clause paragraphs

## Rarity Guidance
- Commonly relatable lines should carry mid-to-high rarity
- Niche/edgier lines should carry lower rarity
- Keep balance across categories to avoid repetitive feel

## Editing Workflow
1. Add or edit entries in `src/predictions.ts`.
2. Keep IDs stable and unique.
3. Run `npm run build` to validate types.
4. Manually check reveal readability in UI.
