export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.WEB3FORMS_KEY) {
    return res.status(500).json({ error: 'Server configuration error: Missing Web3Forms Key' });
  }

  try {
    // Send data to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name: name,
        email: email,
        message: message,
        subject: `New Contact Form Submission from ${name}`
      })
    });

    const data = await response.json();

    if (response.status === 200) {
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } else {
      console.error('Web3Forms Error:', data.message);
      res.status(500).json({ error: data.message || 'Failed to send email via Web3Forms' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to connect to email service' });
  }
}
