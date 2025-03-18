const { saveNotification } = require('../models/Notification');

const sendNotification = async (req, res) => {
  const { userId, message } = req.body;

  saveNotification(userId, message, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error sending notification', error: err });
    }
    res.status(200).json({ message: 'Notification sent successfully' });
  });
};

module.exports = { sendNotification };
