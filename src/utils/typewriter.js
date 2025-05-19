export function initTypewriter(selector, finalText, delay = 4000) {
  const el = document.querySelector(selector);
  if (!el) return;
  setTimeout(() => {
    el.style.animation = 'none';
    el.style.width = 'auto';
    el.innerText = finalText;
  }, delay);
}
