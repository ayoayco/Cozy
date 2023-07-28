export type Feature = 'Send to Email' | 'Hide Images';

export const featureFlags: Record<Feature, boolean> = {
  'Send to Email': false,
  'Hide Images': false,
};
