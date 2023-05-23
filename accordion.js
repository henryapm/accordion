const buttons = Array.from(document.querySelectorAll('h2'));

function handleToggleClick(e) {
  const expanded = e.currentTarget.getAttribute('aria-expanded') === 'true' || false;
  e.currentTarget.setAttribute('aria-expanded', !expanded)
}

buttons.forEach(button => button.addEventListener('click', handleToggleClick));