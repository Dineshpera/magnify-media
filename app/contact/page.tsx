'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  budget: z.string().min(1, 'Please select or describe a budget.'),
  message: z.string().min(10, 'Tell us a little more about the opportunity.'),
});

type Form = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Form>({ resolver: zodResolver(schema) });

  return (
    <main className="container section">
      <p className="eyebrow">Contact</p>
      <h1 className="h1">Start your growth sprint.</h1>
      <div className="grid-auto">
        <form className="glass card" onSubmit={handleSubmit(() => undefined)} noValidate>
          {(['name', 'email', 'budget', 'message'] as const).map((field) => (
            <label key={field} style={{ display: 'block', marginBottom: 14, textTransform: 'capitalize' }}>
              {field}
              <input {...register(field)} className="glass" style={{ display: 'block', width: '100%', padding: 14, borderRadius: 14, color: 'var(--fg)' }} />
              <small>{errors[field]?.message}</small>
            </label>
          ))}
          <button className="btn primary">Send inquiry</button>
          {isSubmitSuccessful && <p>Thanks — we will respond within one business day.</p>}
        </form>
        <aside className="glass card">
          <h2>Office</h2>
          <p className="muted">Remote-first · US compatible hours</p>
          <a className="btn primary" href="https://wa.me/10000000000">WhatsApp</a>
          <p className="muted">Calendly and Google Maps integration points are reserved for production environment variables.</p>
        </aside>
      </div>
    </main>
  );
}
