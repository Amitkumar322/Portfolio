const Contact = require('../models/Contact');
const sendEmail = require('../Utils/sendEmail');

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // DB mein save
    await Contact.create({ name, email, subject, message });

    // Gmail pe bhejo
    await sendEmail({ name, email, subject, message });

    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { submitContact };