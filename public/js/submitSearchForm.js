document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const keyword = document.querySelector('#searchInput').value;
    navigateTo(keyword);
  }
});

function navigateTo(keyword) {
  const sanitizedKeyword = sanitizeHTML(keyword);
  const destination = isURL(sanitizedKeyword) ? sanitizedKeyword : buildSearchURL(sanitizedKeyword);
  window.location.href = destination;
}

function isURL(str) {
  const urlPattern = new RegExp(/^(https?:\/\/)?([\w.-]+\.[a-zA-Z]{2,6})(\/[\w.-]*)*\/?$/);
  return urlPattern.test(str);
}

function sanitizeHTML(text) {
  const htmlEntities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, char => htmlEntities[char]);
}

function buildSearchURL(keyword) {
  return `https://www.google.com/search?q=${encodeURIComponent(keyword)}`;
}
