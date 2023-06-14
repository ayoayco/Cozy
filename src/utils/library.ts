export function getPostCard(html: HTMLHtmlElement) {
  const title =
    html
      .querySelector('meta[property="cozy:title"]')
      ?.getAttribute("content") ||
    html.querySelector("title")?.innerHTML?.replace("Cozy 🧸 | ", "");

  const description = html
    .querySelector('meta[property="cozy:description"]')
    ?.getAttribute("content");
  const image = html
    .querySelector('meta[property="cozy:image"]')
    ?.getAttribute("content");
  const source = html
    .querySelector('meta[property="cozy:source"]')
    ?.getAttribute("content");
  const published = html
    .querySelector('meta[property="cozy:published"]')
    ?.getAttribute("content");

  const postCard = `
      <div class="post-card">
          <div class="post-card__image">
        ${
          image
            ? `
            <img src="${image}" alt="${title} | ${description}" />
          `
            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path fill="currentColor" d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>'
        }
          </div>
        <div class="post-card__content">
          ${
            source || published
              ? `
          <div class="post-card__meta">
            ${
              source
                && `
                <p class="post-card__source">${source}</p>
              `
            }
            ${
              published
                && `
                <p class="post-card__published">${
                  new Date(published)?.toLocaleDateString() || ""
                }</p>
              `
            }
          </div>
          `
              : ""
          }
          <h3 class="post-card__title">${title}</h3>
          ${
            description
              ? `
            <p class="post-card__description">${description}</p>`
              : ""
          }
        </div>
      </div>
    `;
  return postCard;
}
