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
  const pool = previousId
    ? predictionCatalog.filter((entry) => entry.id !== previousId)
    : [...predictionCatalog];

  const next = weightedPick(pool.length > 0 ? pool : predictionCatalog);

  return {
    ...next,
    categoryMeta: getCategoryMeta(next.category)
  };
}
