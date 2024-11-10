import { describe, expect, test } from "vitest";
import { cozify } from "../src/utils/sanitizer";

describe("cozify()", async () => {
  const baseUrl = "https://cozy.pub";

  test("should remove scripts", async () => {
    const html = "<h1>HELLO</h1><script>console.log()</script>";
    const result = await cozify(html, baseUrl);
    expect(result).not.toContain("<script>");
  });

  test("should remove target=_blank from links", async () => {
    const html = "<a href=# target='_blank'>hey</a>";
    const result = await cozify(html, baseUrl);
    expect(result).not.toContain("target");
    console.log(result);
  });

  test("should add base url to href of links", async () => {
    const html = "<a href=#>hey</a>";
    const result = await cozify(html, baseUrl);
    expect(result).toContain('href="https://cozy.pub?url=#"');
  });

  test("should add prefetch=true to links", async () => {
    const html = "<a href=#>hey</a>";
    const result = await cozify(html, baseUrl);
    expect(result).toContain('prefetch="true"');
  });
});
