// Search functionality using Lunr.js
(function() {
  const searchToggle = document.getElementById('search-toggle');
  const searchClose = document.getElementById('search-close');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  let searchIndex;
  let searchDocuments;

  // Toggle search overlay
  if (searchToggle) {
    searchToggle.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      searchInput.focus();

      // Load search index on first open
      if (!searchIndex) {
        loadSearchIndex();
      }
    });
  }

  // Close search overlay
  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  // Close on overlay click
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });

  function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
  }

  // Load search index
  async function loadSearchIndex() {
    try {
      const response = await fetch('/nostr-ux-research/index.json');
      searchDocuments = await response.json();

      // Build Lunr index
      searchIndex = lunr(function() {
        this.ref('url');
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('tags', { boost: 5 });

        searchDocuments.forEach((doc) => {
          this.add(doc);
        });
      });
    } catch (error) {
      console.error('Failed to load search index:', error);
      searchResults.innerHTML = '<p class="search-error">Search is currently unavailable.</p>';
    }
  }

  // Perform search
  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      const query = e.target.value.trim();

      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }

      if (!searchIndex) {
        searchResults.innerHTML = '<p>Loading search index...</p>';
        return;
      }

      try {
        const results = searchIndex.search(query);

        if (results.length === 0) {
          searchResults.innerHTML = '<p class="search-no-results">No results found.</p>';
          return;
        }

        const html = results.slice(0, 10).map(result => {
          const doc = searchDocuments.find(d => d.url === result.ref);
          if (!doc) return '';

          const excerpt = getExcerpt(doc.content, query);

          return `
            <div class="search-result">
              <h4><a href="${doc.url}">${doc.title}</a></h4>
              <p>${excerpt}</p>
            </div>
          `;
        }).join('');

        searchResults.innerHTML = html;
      } catch (error) {
        console.error('Search error:', error);
        searchResults.innerHTML = '<p class="search-error">Search error occurred.</p>';
      }
    }, 300));
  }

  // Get excerpt around query term
  function getExcerpt(text, query, maxLength = 200) {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);

    if (index === -1) {
      return text.substring(0, maxLength) + '...';
    }

    const start = Math.max(0, index - 80);
    const end = Math.min(text.length, index + maxLength - 80);

    let excerpt = text.substring(start, end);

    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';

    // Highlight query term
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    excerpt = excerpt.replace(regex, '<strong>$1</strong>');

    return excerpt;
  }

  // Debounce helper
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Escape regex special characters
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
})();
