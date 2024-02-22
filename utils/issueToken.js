const jwt = require("jsonwebtoken");

const issueToken = (user) => {
  const _id = user._id;
  const expiresIn = "2d";

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

module.exports = issueToken;
