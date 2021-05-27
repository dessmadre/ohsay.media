import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 465,
  secure: true,
  auth: {
    user: 'apikey',
    pass: `${process.env.SENDGRID}`,
  },
});

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const msg = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.text}
  `;

  const data = {
    to: 'iam@joseduarte.io',
    from: 'iam@joseduarte.io',
    subject: 'New contact form submission',
    text: msg,
    html: msg.replace(/\r\n/g, '<br>'),
  };

  transport.sendMail(data);

  console.log(body);
  res.status(200).json({ status: 'ok' });
};
