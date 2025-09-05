import './style.css'

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year')
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
})
