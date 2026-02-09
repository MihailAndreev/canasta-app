import './style.css'
import { renderRulesPage } from '../scripts/pages/rulesPage.js'

// Simple routing based on current URL
function routePage() {
  const appEl = document.querySelector('#app')
  const pathname = window.location.pathname

  if (pathname.includes('rules.html') || pathname === '/rules.html') {
    renderRulesPage(appEl)
  }
  // Add other pages here as needed
}
// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', routePage)
} else {
  routePage()
}