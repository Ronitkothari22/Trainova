import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const PORT = Number(process.env.PORT) || 3001;
const MAIL_TO = process.env.MAIL_TO || 'attendx22@gmail.com';

const app = express();

const corsOrigin = process.env.CORS_ORIGIN;
app.use(
  cors({
    origin: corsOrigin ? corsOrigin.split(',').map((s) => s.trim()) : true,
    credentials: true,
  })
);
app.use(express.json({ limit: '48kb' }));

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );
}

function buildTransporter() {
  if (!smtpConfigured()) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

const transporter = buildTransporter();

function sanitize(str, max) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, max);
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/api/contact', async (req, res) => {
  if (!transporter) {
    console.error('Contact API: set SMTP_HOST, SMTP_USER, SMTP_PASS in .env');
    return res.status(503).json({ error: 'Mail is not configured on the server.' });
  }

  const name = sanitize(req.body?.name, 200);
  const email = sanitize(req.body?.email, 320);
  const query = sanitize(req.body?.query, 8000);
  const mode = req.body?.mode === 'pricing' ? 'pricing' : 'demo';

  if (!name || !email || !query) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!emailRe.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const subject =
    mode === 'demo'
      ? 'New Demo Request — Trainova'
      : 'Pricing Inquiry — Trainova';

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Type: ${mode}`,
    '',
    query,
  ].join('\n');

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Type:</strong> ${escapeHtml(mode)}</p>
    <hr />
    <pre style="font-family: sans-serif; white-space: pre-wrap;">${escapeHtml(query)}</pre>
  `;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || `"Trainova" <${process.env.SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
      html,
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error('Nodemailer error:', err);
    return res.status(500).json({ error: 'Could not send message. Try again later.' });
  }
});

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.listen(PORT, () => {
  console.log(`Trainova mail API listening on http://localhost:${PORT}`);
  if (!smtpConfigured()) {
    console.warn('SMTP not configured: set SMTP_HOST, SMTP_USER, SMTP_PASS in .env');
  }
});
