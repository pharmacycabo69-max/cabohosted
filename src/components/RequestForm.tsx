'use client';

import { useState } from 'react';

const field = 'w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-sm focus:border-terracotta focus:outline-none';

export default function RequestForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return <p className="rounded-3xl bg-white p-8 text-lg">Thank you! We received your request and will reply shortly.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
      <input name="name" required placeholder="Your name" className={field} />
      <input name="email" type="email" required placeholder="Email" className={field} />
      <input name="phone" placeholder="WhatsApp / phone (optional)" className={field} />
      <input name="location" placeholder="Where are you staying?" className={field} />
      <input name="dates" placeholder="Dates" className={field} />
      <textarea name="message" required rows={4} placeholder="What do you need?" className={field} />
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
        {status === 'sending' ? 'Sending...' : 'Start my request'}
      </button>
      {status === 'error' && <p className="text-sm text-terracotta">Something went wrong. Please message us on WhatsApp instead.</p>}
    </form>
  );
}
