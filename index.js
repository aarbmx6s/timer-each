/**
 * @param {Function} cb
 * @param {Number} interval ms
 * @param {Object[]} args
 * @returns {Number} timeout id
 */
function timeoutEach(cb, interval, ...args) {
    let d = Math.floor(interval - Date.now() % interval);
    let tid = setTimeout.apply(setTimeout, [cb, d].concat(args || []));
    return tid;
}

module.exports = {
    timeoutEach,
};