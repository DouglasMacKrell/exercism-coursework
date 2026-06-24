// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const JUICE_LIST = {
    'Tropical Island': 3,
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'All or Nothing': 5
  };
  if (JUICE_LIST[name]) {
    return JUICE_LIST[name];
  } else {
    return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const LIME_SIZE = {
    'small': 6,
    'medium': 8,
    'large': 10
  }
  let limeCounter = 0;
  let wedgeCounter = wedgesNeeded;
  while (limes.length && wedgeCounter > 0) {
    if (wedgeCounter > 0) {
      wedgeCounter -= LIME_SIZE[limes[0]];
      limeCounter += 1
      limes.shift();
    }
  }
  return limeCounter;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let remainingTime = timeLeft;
  while (orders.length && remainingTime > 0) {
    if (remainingTime > 0) {
      remainingTime -= timeToMixJuice(orders[0]);
      orders.shift();
    }
  }
  return orders;
}
