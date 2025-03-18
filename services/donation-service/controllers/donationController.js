const Donation = require('../models/Donation');

const donate = async (req, res) => {
  const { userId, amount } = req.body;

  const newDonation = new Donation({ userId, amount });
  newDonation.save()
    .then(() => res.status(200).json({ message: 'Donation successful' }))
    .catch(err => res.status(500).json({ message: 'Error processing donation', error: err }));
};

module.exports = { donate };
