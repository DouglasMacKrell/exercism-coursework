// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  console.log("birdsPerDay: " + birdsPerDay)
  console.log("week: " + week)
  let total = 0;
  let weekEndIndex = week * 7
  let weekStartIndex = weekEndIndex - 7;
  console.log("weekEndIndex: " + weekEndIndex)
  console.log("weekStartIndex: " + weekStartIndex)
  for (let i = weekEndIndex - 1; i >= weekStartIndex; i--) {
    total += birdsPerDay[i];
  }
  console.log("total: " + total)
  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function isEvenIndex(index) {
  if (index === 0) {
    return true;
  }
  if (index % 2 === 0) {
    return true;
  }
  return false;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (isEvenIndex(i)) {
      birdsPerDay[i] += 1;
    }
  }
  return birdsPerDay;
}
