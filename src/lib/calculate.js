export const calculate = (payment, pi, ps, bonus, ratio, year) => {
  const PAYMENT = parseInt(payment);
  const month = year * 12;
  const PI = pi * 2;
  const PS = parseInt(ps);
  const BONUS = bonus * 2;
  const RATIO = 1 + parseInt(ratio) / 100;
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
};
