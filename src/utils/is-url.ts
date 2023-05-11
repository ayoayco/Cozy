export function isURL(str: string): boolean {
  // TODO: improve pls
  if (!str) return false;
  return str.includes("http://") || str.includes("https://");
}
