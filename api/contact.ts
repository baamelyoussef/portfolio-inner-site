import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'hi@youssefbaamel.com',
            subject: `Portfolio contact from ${name}${company ? ` (${company})` : ''}`,
            html: `
                <p><b>Name:</b> ${name}</p>
                ${company ? `<p><b>Company:</b> ${company}</p>` : ''}
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (e) {
        return res.status(500).json({ success: false, error: 'Failed to send message' });
    }
}
