const togglePriceBtn = document.querySelector('#pricing-toggle-checkbox');
const annualPrice = document.querySelector('.annually');
const monthlyPrice = document.querySelector('.monthly');

togglePriceBtn.addEventListener('change', (e) => {
  if (e.target.checked) {
    if (!monthlyPrice.classList.contains('is-hidden')) {
      monthlyPrice.classList.add('is-hidden');
      annualPrice.classList.remove('is-hidden');
    }
  } else if (!e.target.checked) {
    monthlyPrice.classList.remove('is-hidden');
    annualPrice.classList.add('is-hidden');
  }
});
