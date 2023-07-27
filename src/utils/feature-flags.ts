export type Features = 'Send to Email' | 'Hide Images';

export const featureFlags: Record<Features, boolean> = {
  'Send to Email': false,
  'Hide Images': true,
};
