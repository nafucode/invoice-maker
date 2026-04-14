const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

function convertChunk(n: number): string {
  if (n === 0) return '';
  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 10];
  if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
  return ones[Math.floor(n / 100)] + ' hundred' + (n % 100 !== 0 ? ' and ' + convertChunk(n % 100) : '');
}

export function numberToWords(num: number): string {
  if (typeof num !== 'number') return '';
  if (num === 0) return 'zero';

  const numStr = num.toString();
  const [integerPart, decimalPart] = numStr.split('.');
  const integer = parseInt(integerPart, 10);

  if (integer === 0) {
    const decimalWords = decimalPart ? ' point ' + decimalPart.split('').map(d => ones[parseInt(d, 10)]).join(' ') : '';
    return decimalWords.trim();
  }

  let words = '';
  let i = 0;
  let tempInt = integer;

  while (tempInt > 0) {
    if (tempInt % 1000 !== 0) {
      words = convertChunk(tempInt % 1000) + ' ' + thousands[i] + ' ' + words;
    }
    tempInt = Math.floor(tempInt / 1000);
    i++;
  }

  words = words.trim();

  if (decimalPart) {
    const cents = parseInt(decimalPart.slice(0, 2), 10);
    if (cents > 0) {
      words += ' and ' + convertChunk(cents) + ' cents';
    }
  }

  return words.toUpperCase() + ' ONLY';
}
