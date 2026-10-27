import { NextResponse } from 'next/server';

const esc = (s: unknown) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c]!);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || body.company) return NextResponse.json({ ok: true }); // honeypot
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: 'Email not configured' }, { status: 500 });

  const html = ['name', 'email', 'phone', 'location', 'dates', 'message']
    .map((k) => `<p><strong>${k}:</strong> ${esc(body[k])}</p>`)
    .join('');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.REQUEST_FROM_EMAIL,
      to: process.env.REQUEST_TO_EMAIL,
      reply_to: body.email,
      subject: `New request from ${esc(body.name)}`,
      html,
    }),
  });
  return res.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: 'Send failed' }, { status: 502 });
}
