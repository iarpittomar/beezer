const admin = require('../config/firebase-config');

const decodeToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    if (decodeValue) {
      return next();
    }
    return res.json({ message: 'Unauthorized' });
  } catch {
    return res.json({ message: 'Internal server error' });
  }
};

module.exports = decodeToken;
