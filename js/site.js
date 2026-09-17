(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.dataset.open !== 'true';
      links.dataset.open = String(open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const setPrimaryNavigationState = () => {
    const navigation = document.querySelector('.nav-links');
    if (!navigation) return;

    const anchors = Array.from(navigation.querySelectorAll('a'));
    const page = location.pathname.split('/').pop() || 'index.html';
    const pageSection = {
      'poc.html': 'poc.html',
      'investigations.html': 'investigations.html',
      'intelligence.html': 'index.html#product',
      'knowledge.html': 'knowledge.html',
      'qapi.html': 'knowledge.html',
      'plans-of-correction.html': 'knowledge.html',
      'survey-deficiencies.html': 'knowledge.html',
      'investigation-resources.html': 'knowledge.html',
      'casper-facility-intelligence.html': 'knowledge.html',
      'how-to-write-plan-of-correction.html': 'knowledge.html',
      'what-is-qapi.html': 'knowledge.html',
      'nursing-home-deficiency-examples.html': 'knowledge.html',
      'incident-investigation-report-example.html': 'knowledge.html',
      'regulatory-references.html': 'regulatory-references.html'
    };

    let section = pageSection[page] || '';
    if (page === 'index.html') {
      section = location.hash === '#product' || location.hash === '#access'
        ? `index.html${location.hash}`
        : '';
    }

    anchors.forEach((anchor) => anchor.removeAttribute('aria-current'));
    if (!section) return;

    const current = anchors.find((anchor) => {
      const target = new URL(anchor.href, location.href);
      const targetPage = target.pathname.split('/').pop() || 'index.html';
      return `${targetPage}${target.hash}` === section;
    });
    if (current) current.setAttribute('aria-current', page === 'index.html' ? 'location' : 'page');
  };

  setPrimaryNavigationState();
  addEventListener('hashchange', setPrimaryNavigationState);

  const article = document.querySelector('.documentation-surface');
  if (article && article.querySelector('h1') && article.querySelectorAll('h2').length) {
    const children = Array.from(article.children);
    const body = document.createElement('article');
    body.className = 'article-body';
    children.forEach((child) => body.appendChild(child));

    const headings = Array.from(body.querySelectorAll('h2'));
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `section-${index + 1}`;
    });

    const toc = document.createElement('nav');
    toc.className = 'article-toc';
    toc.setAttribute('aria-label', 'On this page');
    toc.innerHTML = `<strong>On this page</strong><ol>${headings.map((heading) => `<li><a href="#${heading.id}">${heading.textContent}</a></li>`).join('')}</ol>`;

    const meta = document.createElement('div');
    meta.className = 'article-meta';
    meta.innerHTML = '<span>Maven Compliance Field Manual</span><span>Administrator reference</span><span>Review against current requirements and facility policy</span>';
    const h1 = body.querySelector('h1');
    h1.insertAdjacentElement('afterend', meta);

    const provenance = document.createElement('aside');
    provenance.className = 'provenance-note';
    provenance.innerHTML = '<strong>Practice-informed guidance</strong><p>This material reflects nursing-home administrative and QAPI operating experience. It supports professional work; it does not replace current regulation, legal advice, licensure requirements, or facility-specific policy.</p>';
    body.appendChild(provenance);

    article.append(toc, body);
    article.classList.add('manual-enhanced');

    const progress = document.createElement('div');
    progress.className = 'article-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = `${max > 0 ? Math.min(100, scrollY / max * 100) : 0}%`;
    };
    addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }
})();
