const ftoc = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  c = Math.round(celsius * 10) / 10;
  return c;
}

const ctof = function (celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  f = Math.round(fahrenheit * 10) / 10;
  return f;
}

module.exports = {
  ftoc,
  ctof
}
