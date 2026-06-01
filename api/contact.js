const { Resend } = require('resend');

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY is not set');
        return res.status(500).json({ success: false, error: 'Server misconfiguration' });
    }

    const { name, email, company, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'hi@youssefbaamel.com',
            subject: `Portfolio contact from ${name}${company ? ` (${company})` : ''}`,
            html: `
                <p><b>Name:</b> ${name}</p>
                ${company ? `<p><b>Company:</b> ${company}</p>` : ''}
                <p><b>Reply to:</b> ${email}</p>
                <p><b>Message:</b></p>
                <p>${String(message).replace(/\n/g, '<br/>')}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (e) {
        console.error('Resend error:', e);
        return res.status(500).json({ success: false, error: 'Failed to send message' });
    }
};
