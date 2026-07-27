'use client';

import { useState } from 'react';

type Field = 'name' | 'email' | 'budget' | 'message';

const fields: { name: Field; label: string; placeholder: string; multiline?: boolean }[] = [
  { name: 'name', label: 'Name', placeholder: 'Your name' },
  { name: 'email', label: 'Work email', placeholder: 'you@company.com' },
  { name: 'budget', label: 'Investment range', placeholder: '$15k–$50k, $50k+, or retained growth partner' },
  { name: 'message', label: 'Opportunity', placeholder: 'Tell us about the launch, growth target, or system you want to build.', multiline: true },
];

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <main className="container section page-shell">
      <p className="eyebrow">Contact</p>
      <h1 className="h1">Start your growth sprint.</h1>
      <div className="grid-auto contact-grid">
        <form
          className="glass card contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          {fields.map((field) => (
            <label key={field.name} className="field-label">
              {field.label}
              {field.multiline ? (
                <textarea name={field.name} className="field-input" placeholder={field.placeholder} required minLength={10} />
              ) : (
                <input
                  name={field.name}
                  className="field-input"
                  placeholder={field.placeholder}
                  required
                  type={field.name === 'email' ? 'email' : 'text'}
                />
              )}
            </label>
          ))}
          <button className="btn primary" type="submit">Send inquiry</button>
          {sent && <p className="success-note">Thanks — we will respond within one business day.</p>}
        </form>
        <aside className="glass card contact-aside">
          <p className="eyebrow">Response window</p>
          <h2>Senior team, no sales theatre.</h2>
          <p className="muted">Share the ambition. We will respond with the clearest next sprint, success metrics, and team shape.</p>
          <a className="btn glass" href="mailto:hello@magnifymedia.example">hello@magnifymedia.example</a>
        </aside>
      </div>
    </main>
  );
}
