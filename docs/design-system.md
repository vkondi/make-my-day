# Make My Day: UX + Visual Design System

## Experience Intent

Make My Day is a one-button digital toy, not a utility product.

The purpose is delight through timing, tone, and craft.

The experience should feel editorial and authored, like a small interactive poster.

## UX Concept Direction

### 1. Emotional Journey

1. Arrival: calm curiosity.
2. Focus: immediate understanding of one action.
3. Anticipation: short theatrical pause after click.
4. Reveal: specific, funny, wholesome, or mildly absurd prediction.
5. Replay urge: low-friction invitation to try again.

### 2. Visual Personality

- Warm, playful, and intentional.
- Slightly surreal but never chaotic.
- Designed like a collectible print, not a product landing page.

### 3. Typography Mindset

- Display typography carries personality.
- Body typography carries readability.
- Prediction copy should read like a tiny poem card.

### 4. Layout Principle

- Single-screen experience.
- One dominant action at the center of attention.
- Large breathing room; very few elements.

### 5. Animation Philosophy

- Use motion as punctuation, not decoration.
- A few deliberate movements beat constant motion.
- Reveal sequence should be short, crisp, and satisfying.

### 6. Button Interaction

- The MAKE MY DAY button is the hero object.
- Press should feel tactile.
- Label can briefly shift during suspense state.

### 7. Result Reveal

- Present prediction in a crafted card treatment.
- Keep copy short and highly specific.
- End on an emotionally positive note.

### 8. Micro-Interactions

- Subtle hover and press feedback.
- Occasional special flourish on rare outcomes.
- Idle state can have minimal ambient movement.

### 9. Loading or Empty States

- No traditional empty state needed.
- No technical spinners.
- Suspense moment should feel narrative, not system-driven.

### 10. Encouraging Repeat Clicks

- Vary sentence rhythm and structure of outcomes.
- Include occasional rarity moments.
- Keep replay action immediate and visible.

### 11. Screenshot-Worthy Qualities

- Distinctive typography and framing.
- Quotable prediction lines.
- A stable composition that looks great in a phone screenshot.

### 12. Explicitly Out of Scope

- Login, onboarding, profile, personalization setup.
- Dashboard layouts or feature grids.
- Chat input, prompts, or assistant framing.
- Productivity framing or utility claims.
- Cluttered nav/footer content.

---

## Visual Design System (Concrete Spec)

### Overall Direction

Editorial toy aesthetic: minimal interface, expressive type, tactile button, and print-like composition.

No generic SaaS styling.

### Typography

Primary display font:
- Fraunces (fallback: Georgia, serif)
- Use for headline moments and the main button label.
- Character: high-contrast, expressive, literary.

Primary body font:
- Instrument Sans (fallback: Arial, sans-serif)
- Use for body copy, helper text, and metadata.
- Character: neutral but modern; supports readability.

Prediction emphasis style:
- Body font by default with selective italic phrases.
- Optional punctuation emphasis through weight shifts, not color noise.

### Font Hierarchy

- Display XL: 56/60, weight 600, tight tracking for hero title.
- Display L: 42/46, weight 600, for major statements.
- Action Label: 20/24, weight 700, all caps for MAKE MY DAY.
- Prediction Text: 28/36, weight 500, mixed case.
- Supporting Text: 16/24, weight 400.
- Meta Text: 13/18, weight 500.

Type rules:
- Maximum line length for prediction copy: ~28 characters per line on desktop, ~22 on mobile.
- Avoid long paragraphs; keep reveal copy to 1-3 short lines.

### Spacing Philosophy

Use an 8px base with selective 4px adjustments for optical alignment.

Core spacing scale:
- 4, 8, 12, 16, 24, 32, 48, 64, 96

Layout rhythm:
- Large outer whitespace.
- Tight spacing inside single components.
- Distinct vertical gap between button and result card.

### Border Radius

- Global small radius: 10px (secondary surfaces).
- Primary interactive radius: 18px (main button).
- Prediction card radius: 22px.
- Avoid fully pill-shaped UI except where intentionally playful.

### Shadows

Use shadows as depth cues, not decoration.

- Resting button shadow: 0 8px 0 rgba(0,0,0,0.18)
- Pressed button shadow: 0 3px 0 rgba(0,0,0,0.2)
- Card shadow: 0 10px 30px rgba(26, 24, 20, 0.14)

No layered neon glow stacks.

### Backgrounds

Background system should feel physical and editorial:

- Base canvas: warm paper tone.
- One subtle directional gradient band allowed.
- Optional micro-grain texture at very low opacity.

Do not use heavy gradients across all components.

### Color Palette

Core palette:
- Paper: #F7F2E8
- Ink: #1F1A17
- Accent Red: #D94F35
- Accent Teal: #1F7A72
- Accent Mustard: #E5B93D
- Soft Edge: #D9CCB8

Usage rules:
- Keep most text in Ink.
- Use Accent Red for primary action.
- Use Teal/Mustard sparingly for emphasis and rare-state accents.
- Maintain strong contrast for readability.

### Button Treatment

Primary button is object-like, not flat UI.

- Fill: Accent Red.
- Text: near-white (#FFF9F2).
- Radius: 18px.
- Border: 2px solid Ink at low opacity.
- Shadow: deep offset to imply physical press.
- Width: content-driven with generous horizontal padding.

Interaction cues:
- Hover: slight lift and increased saturation.
- Press: 2-4px downward translation and shorter shadow.
- Disabled during reveal suspense for under 1 second.

### Card / Result Treatment

Prediction appears in a single framed card.

- Card fill: warm off-white.
- Border: 1.5px solid Soft Edge.
- Radius: 22px.
- Optional top label: "TODAY'S FORECAST" in small caps.
- Prediction text centered with strong line-height.
- Optional footer metadata: serial-style tag for shareability.

Avoid generic feature-card styling or multi-card grids.

### Animation Style

Motion language:
- Snappy and confident.
- Slightly springy for playful tactility.
- Minimal ambient movement.

Signature motions:
- Button compresses on press.
- Tiny suspense pulse before reveal.
- Result card enters with subtle rise + settle.
- Text reveals in quick stagger (line or phrase based).

### Transition Durations

- Micro hover transitions: 120-160ms.
- Press feedback: 80-120ms.
- Suspense beat: 400-700ms.
- Card reveal entrance: 320-480ms.
- Stagger gap between text chunks: 40-70ms.

Easing guidance:
- Use ease-out for entry.
- Use ease-in-out for ambient transitions.
- Avoid long cinematic timings.

### Hover / Press States

Hover:
- Slight upward shift (1-2px).
- Shadow deepens subtly.
- Color saturation increases slightly.

Press:
- Downward shift (2-4px).
- Shadow compresses.
- Label remains legible and stable.

Focus-visible:
- High-contrast outline ring in Teal.
- Keep ring outside component edge for accessibility.

### Mobile Behaviour

Mobile keeps the same emotional hierarchy, not a simplified utility version.

- Center button remains dominant above the fold.
- Prediction card appears directly below with adequate margin.
- Large tap targets (minimum 44px height).
- Type scales down proportionally, not abruptly.
- Reduce motion amplitude on small screens while preserving sequence timing.

### Deliberate Constraints (Must Avoid)

- Excessive gradients.
- Global glassmorphism effects.
- Floating blob backgrounds.
- Generic SaaS card systems.
- Icon-heavy decoration.
- Dashboard structures.
- Long explanatory text blocks.

### Success Check

If someone sees a screenshot without context, it should read as:

"A beautifully designed tiny fortune toy I want to press immediately."

---

## Concrete System Blueprint (Execution-Ready)

This section converts the direction above into strict design rules for production.

### A. Design Tokens

Color tokens:
- Canvas base: #F7F2E8
- Canvas tint band: #F1E7D7
- Text primary: #1F1A17
- Text secondary: #5C5146
- Action primary: #D94F35
- Action primary hover: #C6462F
- Action primary press: #AF3E2A
- Accent support teal: #1F7A72
- Accent support mustard: #E5B93D
- Surface card: #FBF7F0
- Surface stroke: #D9CCB8
- Focus ring: #1F7A72

Typography tokens:
- Display family: Fraunces, Georgia, serif
- Body family: Instrument Sans, Arial, sans-serif
- Weight display: 600
- Weight strong: 700
- Weight regular: 400
- Tracking display: -0.02em
- Tracking button caps: 0.04em

Size tokens:
- Type display xl: 56/60
- Type display l: 42/46
- Type action: 20/24
- Type prediction: 28/36
- Type body: 16/24
- Type meta: 13/18

Spacing tokens:
- xxs: 4
- xs: 8
- sm: 12
- md: 16
- lg: 24
- xl: 32
- 2xl: 48
- 3xl: 64
- 4xl: 96

Radius tokens:
- Radius sm: 10
- Radius button: 18
- Radius card: 22

Shadow tokens:
- Button rest: 0 8px 0 rgba(0, 0, 0, 0.18)
- Button press: 0 3px 0 rgba(0, 0, 0, 0.20)
- Card: 0 10px 30px rgba(26, 24, 20, 0.14)

Motion tokens:
- Fast: 100ms
- Quick: 140ms
- Standard: 220ms
- Reveal: 420ms
- Suspense: 560ms
- Stagger: 56ms

Easing tokens:
- Enter: cubic-bezier(0.2, 0.8, 0.2, 1)
- Press: cubic-bezier(0.3, 0.0, 0.2, 1)
- Ambient: ease-in-out

### B. Viewport and Layout Rules

Breakpoints:
- Mobile: 320-767
- Tablet: 768-1023
- Desktop: 1024-1440+

Canvas behavior:
- Minimum height: full viewport height.
- Main content column max width: 760.
- Horizontal page padding: 20 (mobile), 32 (tablet), 48 (desktop).
- Vertical safe zone top and bottom: at least 32.

Composition order:
1. Tiny brand/title line.
2. Primary action button (hero object).
3. Result card area.
4. Replay affordance.

Vertical rhythm:
- Title to button: 32-48.
- Button to reveal area: 28-40.
- Reveal card internal padding: 24-32.
- Reveal text to metadata: 16.

### C. Component Anatomy

Primary action button anatomy:
- Height: 68 desktop, 62 mobile.
- Horizontal padding: 32 desktop, 26 mobile.
- Border: 2 solid with low-opacity ink tone.
- Label: all caps, weight 700, 20/24 desktop and 18/22 mobile.
- Hit area must never be below 44 height.

Prediction card anatomy:
- Width: fluid, max 680.
- Minimum height: 180 desktop, 152 mobile.
- Internal structure:
1. Optional eyebrow label in meta style.
2. Prediction text block centered.
3. Optional serial footer.

Copy constraints in card:
- 1-3 lines preferred.
- Hard cap around 140 characters.
- No paragraph-like wrapping.

Replay affordance:
- Secondary textual button style.
- Placed directly under card with 16-20 spacing.
- Tone should invite, not command.

### D. Interaction State Matrix

Primary button states:
- Idle: base fill, rest shadow, no translation.
- Hover: y -2, saturation +4 to +6 percent, shadow slightly stronger.
- Press: y +3, press shadow, fill darkens to press tone.
- Busy: pointer disabled, label swaps to suspense copy, subtle pulse.
- Focus-visible: 2-3 outer ring using focus token color.

Result card states:
- Hidden: reserved space only.
- Revealing: enters with rise and settle.
- Visible: static readable state.
- Rare reveal: optional accent underline or stamp treatment only.

### E. Motion Choreography

On click sequence timeline:
1. 0ms: button press compression.
2. 80ms: release to busy state.
3. 80-560ms: suspense micro-state (short pulse, no spinner).
4. 560ms: card enters over 420ms.
5. 620ms onward: text lines appear with 56ms stagger.
6. 980-1100ms: replay affordance fades in.

Motion limits:
- No continuous looping hero animation.
- Maximum displacement for UI objects: 12.
- Avoid rotation above 1.5 degrees for main card.

### F. Background and Atmosphere Rules

Atmosphere layers (max 3):
1. Base paper canvas color.
2. One soft directional tint band.
3. Optional micro-grain texture under 6 percent opacity.

Strict limits:
- Do not apply gradients to button, card, and page simultaneously.
- Do not use floating blob motifs.
- Do not introduce glass blur surfaces.

### G. Editorial Character Rules

To keep the design distinctive:
- Use strong type contrast between display and body.
- Keep element count low and scale contrast high.
- Prefer typographic drama over decorative iconography.
- Use asymmetry sparingly, then lock composition for screenshot consistency.

### H. Mobile Behavior Specifics

Mobile composition:
- Keep CTA in immediate view without scroll on common devices.
- Result should appear below CTA, not in a blocking modal.
- Preserve the same sequence and tone as desktop.

Mobile scaling rules:
- Display xl scales down to 40/44.
- Prediction text scales down to 24/32.
- Card radius adjusts from 22 to 18.
- Vertical spacing compresses by 10-18 percent.

Touch behavior:
- No hover-only dependencies.
- Press feedback must remain visible for at least 80ms.

### I. Accessibility and Readability Guardrails

- Body and prediction text contrast should meet WCAG AA at minimum.
- Primary action label must maintain high contrast in all states.
- Focus ring must be visible against both canvas and card backgrounds.
- Respect reduced-motion preference by shortening or removing non-essential motion while keeping reveal clarity.

### J. Anti-Pattern Red Flags

If any of these appear, the system is drifting:
- Multiple competing cards.
- Decorative icon rows.
- Marketing feature sections.
- Full-screen glass panels.
- Long explanatory copy blocks.
- Generic dashboard spacing or nav chrome.

### K. Review Checklist Before UI Build

1. Is there exactly one dominant action at first glance?
2. Does the button feel tactile in both mouse and touch contexts?
3. Does reveal happen under 1.2 seconds total?
4. Is the prediction card typographically beautiful at mobile width?
5. Is the screenshot composition stable and distinctive?
6. Could this be mistaken for a SaaS landing page? If yes, simplify.
