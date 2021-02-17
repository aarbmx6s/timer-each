/**
 * @param {Function} cb
 * @param {Number} interval ms
 * @param {Number} shift ms
 * @param {Object[]} args
 * @returns {Number} timeout id
 */
function timeoutEachShift(cb, interval, shift, ...args) {
    const d = Math.floor(interval - Date.now() % interval) + shift;
    const tid = setTimeout.apply(setTimeout, [cb, d].concat(args || []));
    return tid;
}

/**
 * @param {Function} cb
 * @param {Number} interval ms
 * @param {Object[]} args
 * @returns {Number} timeout id
 */
function timeoutEach(cb, interval, ...args) {
    return timeoutEachShift(cb, interval, 0, args);
}

module.exports = {
    timeoutEachShift,
    timeoutEach,
};