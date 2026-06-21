// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const CONTRACTOR_COST = dayRate(ratePerHour);
  return Math.floor(budget / CONTRACTOR_COST);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function projectMonths(numDays) {
  return Math.floor(numDays / 22);
}

export function projectDaysOverage(numDays) {
  const MONTHS = projectMonths(numDays);
  const BILLABLE_DAYS_IN_MONTHS = MONTHS * 22
  return numDays - BILLABLE_DAYS_IN_MONTHS;
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const MONTHS_IN_PROJECT = projectMonths(numDays);
  const DAYS_OVERAGE = projectDaysOverage(numDays);
  const CONTRACTOR_DAY_RATE = dayRate(ratePerHour);
  const BILLABLE_DAYS_WITHIN_MONTHS = MONTHS_IN_PROJECT * 22;
  const FULL_RATE_OVERAGE_COST = DAYS_OVERAGE * CONTRACTOR_DAY_RATE;
  const ORIGINAL_PRICE_WITHIN_MONTHS = BILLABLE_DAYS_WITHIN_MONTHS * CONTRACTOR_DAY_RATE;
  const SAVINGS = ORIGINAL_PRICE_WITHIN_MONTHS * discount;
  const FINAL_MONTHLY_DISCOUNTED_PRICE = ORIGINAL_PRICE_WITHIN_MONTHS - SAVINGS;
  const TOTAL_PRICE = FINAL_MONTHLY_DISCOUNTED_PRICE + FULL_RATE_OVERAGE_COST;
  return Math.ceil(TOTAL_PRICE);
}
