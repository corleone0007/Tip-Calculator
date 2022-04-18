const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  console.log(`
    Sum before tip: ${formatter(locale, currency, sum)}
    Tip percentage: ${percentage}%
    Tip:            ${formatter(locale, currency, tip)}
    Total:          ${formatter(locale, currency, total)}
  `);
};

console.log(tipCalculator(29.95, 18, "de-DE", "EUR"));
