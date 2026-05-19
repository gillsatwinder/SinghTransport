import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as default SMTP service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email app password
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address (must be the authenticated user)
      to: 'singhtransport0032@gmail.com', // Always send messages TO the client's email
      replyTo: email, // customer's email for easy replies
      subject: `New Contact Form Submission from ${name}`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body
    });

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
