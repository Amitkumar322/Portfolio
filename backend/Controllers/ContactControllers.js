const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields required' });
    }

    // Save in DB
    await Contact.create({ name, email, subject, message });

    // Send Email
    await sendEmail({ name, email, subject, message });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully ✅'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error ❌'
    });
  }
};

module.exports = { submitContact };