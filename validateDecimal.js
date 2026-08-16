function validateDecimal(val) {
  const num = Number(val);
  return !isNaN(num) && Number.isInteger(num) && num >= 0;
}

module.exports = validateDecimal;