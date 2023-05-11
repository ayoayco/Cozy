export function getParams(url: URL): { [key: string]: string } | undefined {
  if (url.search === "") return;

  return Object.fromEntries(
    url.search
      .replace("?", "")
      .split("&")
      .map((paramstr) => paramstr.split("="))
      .map(([key, value]) => [
        key,
        decodeURIComponent(value?.replace(/\+/g, "%20")),
      ])
  );
}
