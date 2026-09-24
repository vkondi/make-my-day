import { predictionCatalog, type PredictionCategory, type PredictionEntry, type PredictionMood } from './predictions';

export type PredictionCategoryMeta = {
  label: string;
  emoji: string;
};

const categoryMeta: Record<PredictionCategory, PredictionCategoryMeta> = {
  wholesome: { label: 'Wholesome', emoji: '🌿' },
  weirdly_specific: { label: 'Weirdly Specific', emoji: '🕵️' },
  mildly_inconvenient: { label: 'Mildly Inconvenient', emoji: '🙃' },
  suspiciously_accurate: { label: 'Suspiciously Accurate', emoji: '🔮' },
  indian_edition: { label: 'Indian Edition', emoji: '🇮🇳' }
};

const SEEN_PREDICTIONS_KEY = 'make-my-day-seen-predictions';

export type PredictionResult = PredictionEntry & {
  categoryMeta: PredictionCategoryMeta;
};

export function getCategoryMeta(category: PredictionCategory): PredictionCategoryMeta {
  return categoryMeta[category];
}

export function formatMoodLabel(mood: PredictionMood): string {
  return `${mood.charAt(0).toUpperCase()}${mood.slice(1)} mood`;
}

export function getMoodEmoji(mood: PredictionMood): string {
  switch (mood) {
    case 'playful':
      return '😄';
    case 'warm':
      return '🫶';
    case 'absurd':
      return '🤹';
    case 'chaotic':
      return '⚡';
    case 'grounded':
      return '🙂';
    default:
      return '✨';
  }
}

function getSeenPredictions(): Set<string> {
  try {
    const stored = window.localStorage.getItem(SEEN_PREDICTIONS_KEY);
    return new Set(stored ? JSON.parse(stored) : []);
  } catch {
    return new Set();
  }
}

function saveSeenPrediction(predictionId: string): void {
  try {
    const seen = getSeenPredictions();
    seen.add(predictionId);
    window.localStorage.setItem(SEEN_PREDICTIONS_KEY, JSON.stringify(Array.from(seen)));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

function weightedPick(catalog: readonly PredictionEntry[]): PredictionEntry {
  const totalWeight = catalog.reduce((sum, entry) => sum + entry.rarity, 0);
  const target = Math.random() * totalWeight;

  let current = 0;
  for (const entry of catalog) {
    current += entry.rarity;
    if (target <= current) {
      return entry;
    }
  }

  return catalog[catalog.length - 1];
}

export function generatePrediction(previousId: string | null): PredictionResult {
  const seen = getSeenPredictions();
  const totalPredictions = predictionCatalog.length;
  const hasSeenAllPredictions = seen.size >= totalPredictions;

  let pool = [...predictionCatalog];

  // Filter out the previous prediction to avoid immediate consecutive duplicates
  if (previousId) {
    pool = pool.filter((entry) => entry.id !== previousId);
  }

  // Only allow unseen predictions until user has seen all predictions
  if (!hasSeenAllPredictions) {
    const unseenPool = pool.filter((entry) => !seen.has(entry.id));
    if (unseenPool.length > 0) {
      pool = unseenPool;
    }
  }

  const next = weightedPick(pool.length > 0 ? pool : predictionCatalog);
  
  // Track this prediction as seen
  saveSeenPrediction(next.id);

  return {
    ...next,
    categoryMeta: getCategoryMeta(next.category)
  };
}
