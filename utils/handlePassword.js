const bcrypt = require("bcrypt");

const validPassword = async (password, hashedPassword) => {
  const isValid = bcrypt.compare(password, hashedPassword);
  return isValid;
};

const genPassword = async (password) => {
  const hashedPassword = bcrypt.hash(password, 10);

  return hashedPassword;
};

module.exports = {
  validPassword,
  genPassword,
};
