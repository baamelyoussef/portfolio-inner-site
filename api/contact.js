const https = require('https');

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ success: false, error: 'Server misconfiguration' });
    }

    const { name, email, company, message } = req.body || {};
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const payload = JSON.stringify({
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

    try {
        await new Promise((resolve, reject) => {
            const req = https.request(
                {
                    hostname: 'api.resend.com',
                    path: '/emails',
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(payload),
                    },
                },
                (r) => {
                    let data = '';
                    r.on('data', (chunk) => { data += chunk; });
                    r.on('end', () => {
                        if (r.statusCode >= 200 && r.statusCode < 300) {
                            resolve(data);
                        } else {
                            reject(new Error(`Resend API error ${r.statusCode}: ${data}`));
                        }
                    });
                }
            );
            req.on('error', reject);
            req.write(payload);
            req.end();
        });

        return res.status(200).json({ success: true });
    } catch (e) {
        console.error('Resend error:', e.message);
        return res.status(500).json({ success: false, error: 'Failed to send message' });
    }
};
