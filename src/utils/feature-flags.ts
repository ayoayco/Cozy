export type Feature = 'Send to Email' | 'Hide Images' | 'AI Insights';

export const featureFlags: Record<Feature, boolean> = {
  'Send to Email': false,
  'Hide Images': false,
  'AI Insights': false,
};
