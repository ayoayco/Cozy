export function getPostCard(html: HTMLHtmlElement) {
  const {title, description, image, source, published} = getPostMeta(html);
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

export function renderPost(responseText: string | null, url, postDivSelector: string, preventPushState = false) {
  const postDiv = document.querySelector<HTMLDivElement>(`#${postDivSelector}`);
  let postText = '';
  let cozyUrl = '/';
  let cozyTitle = 'Cozy';
  if (responseText) {
    const html = document.createElement('html');
    html.innerHTML = responseText;
    const newPost = html.querySelector('body')?.querySelector('#post');
    postText = newPost?.innerHTML || '';
    cozyUrl = html.querySelector('meta[property="cozy:url"]')?.getAttribute('content') ?? '/';
    cozyTitle = `${getCozyTitle(html)} | Cozy`;
  }

  if (postDiv) {
    postDiv.innerHTML = postText;

    const appUrl = document.getElementById('app-url') as HTMLInputElement;
    const homeBtn = document.querySelector<HTMLButtonElement>('#app-home');
    const backBtn = document.querySelector<HTMLButtonElement>('#app-back');
    const submitBtn = document.querySelector<HTMLButtonElement>('#submit');
    
    clearInsights();

    console.log(
      {cozyUrl, submitBtn}
    )
    if(cozyUrl !== '/') {
      appUrl.value = cozyUrl || '';
      backBtn?.removeAttribute('disabled');
      submitBtn?.removeAttribute('disabled');
      homeBtn?.removeAttribute('disabled');
      document.title = cozyTitle;
    } else {
      appUrl.value = '';
      backBtn?.setAttribute('disabled', 'true');
      submitBtn?.setAttribute('disabled', 'true');
      homeBtn?.setAttribute('disabled', 'true');
      document.title = `Cozy`;
    }

    if(!preventPushState) {
      window.history.pushState({url}, '', url);
    }
  }
}

function clearInsights() {
  const insights = document.querySelector<HTMLDivElement>('#sidebar-wrapper');
  if(insights) {
    insights.innerHTML = '';
<<<<<<< HEAD
    insights.setAttribute('hidden', 'true');
=======
>>>>>>> 1b93670 (feat: implement iogpt)
  }
}

function getPostMeta(html: HTMLHtmlElement) {
  const title = getCozyTitle(html);
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

    return {title, description, image, source, published};
}

function getCozyTitle(html: HTMLHtmlElement): string | undefined {
  return html.querySelector('meta[property="cozy:title"]')?.getAttribute("content")
    /**
     * backwards compatibility for stuff before we implemented cozy:meta tags
     * REMOVE ON V1 release
     */
    ?? html.querySelector("title")?.innerHTML
        ?.replace("Cozy 🧸 | ", "")
    
}