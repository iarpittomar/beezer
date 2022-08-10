const db = require('../config/db-config');

exports.getAllApps = async (req, res) => {};

exports.createApp = async (req, res) => {
  try {
    const newApp = await db.collection('app').add(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        app: req.body,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};

exports.getAllApps = async (req, res) => {
  try {
    const snapshot = await db.collection('app').get();
    const list = snapshot.docs.map((item) => item.data());
    res.status(200).json({
      status: 'success',
      data: {
        appsList: list,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};
