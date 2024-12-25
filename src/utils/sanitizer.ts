import { parse, render, transform, walkSync } from 'ultrahtml'
import sanitize from 'ultrahtml/transformers/sanitize'

export async function cozify(html: string, baseUrl: string): Promise<string> {
  // remove target="_blank" from links
  const ast = parse(html)
  walkSync(ast, (node) => {
    if (node.name === 'a') {
      node.attributes.href = `${baseUrl}?url=${node.attributes.href}`
      node.attributes.prefetch = true
    }
  })

  const newHtml = await render(ast)

  return transform(newHtml, [
    sanitize({
      dropElements: ['script'],
      dropAttributes: {
        target: ['a'],
      },
    }),
  ])
}
