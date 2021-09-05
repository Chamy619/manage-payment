export function calculate(payment, pi, ps, bonus, ratio, year) {
  const PAYMENT = parseInt(payment);
  const month = year * 12;
  const PI = !pi ? 0 : pi * 2;
  const PS = !ps ? 0 : parseInt(ps);
  const BONUS = !bonus ? 0 : bonus * 2;
  const RATIO = !ratio ? 1 : 1 + parseInt(ratio) / 100;
  let result = 0;

  for (let m = 0; m < month; m++) {
    if (m % 12 === 11) {
      result += PI;
      result += PS;
      result += BONUS;
      result *= RATIO;
    }
    result = result + PAYMENT;
  }

  result *= 10000;

  return parseInt(result).toLocaleString();
}
