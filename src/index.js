module.exports = function reverse (n) {
  let a = n.toString();
  let b = a.split('').reverse().join('');

    return parseInt(b)
}
