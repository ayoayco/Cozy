export function isURL(str: string): boolean {
  // TODO: improve pls
  return str.includes("http://") || str.includes("https://");
}
