# Architecture and Flow

## Runtime Architecture
The app is a single-page React client with no backend.

Main pieces:
- `src/App.tsx`: Interaction orchestration, reveal phases, easter-egg triggers
- `src/prediction-engine.ts`: Typed prediction selection engine + metadata helpers
- `src/predictions.ts`: Content catalog as structured objects
- `src/styles.css`: Visual system and motion behavior

## Data Model
Each prediction is a typed object:
- `id`
- `category`
- `prediction`
- `mood`
- `rarity`

The engine enriches selected predictions with category metadata for rendering.

## Selection Strategy
Prediction generation uses weighted randomness (`rarity`) and excludes immediate repeats by `id`.

## Interaction State Model
Primary view states:
- `idle`
- `generating`
- `revealed`

Anticipation phase states:
- `hmm`
- `consulting`
- `invoking`

These phases drive the staged textual ritual before reveal.

## Reveal Pipeline
1. User triggers generation.
2. Existing reveal state is reset for immediate feedback.
3. Anticipation phases advance via timed events.
4. Engine returns the next prediction.
5. Card renders and prediction types out.

## Typing Animation Logic
Typing is controlled in component state:
- progressively slices prediction text
- toggles typing caret state
- respects reduced-motion preferences

## Personality Micro-logic
App includes lightweight client-side easter eggs:
- long-press behavior
- replay cadence responses
- same-day return whisper
- periodic meta asides

No server persistence is used.
