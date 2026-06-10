'use client'

import { useState, useEffect } from 'react'
import { useApp } from '@/contexts/AppContext'
import { useReveal } from '@/hooks/useReveal'

export default function Contact() {
  const { t } = useApp()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const leftRef = useReveal(0)
  const rightRef = useReveal<HTMLFormElement>(150)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3500)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    const handler = () => {
      const ids = ['name', 'email', 'message']
      ids.forEach((id, i) => {
        setTimeout(() => {
          const el = document.getElementById(id)
          if (!el) return
          el.classList.add('field-highlight')
          setTimeout(() => el.classList.remove('field-highlight'), 2000)
        }, i * 100)
      })
    }
    window.addEventListener('highlight-form', handler)
    return () => window.removeEventListener('highlight-form', handler)
  }, [])

  return (
    <section id="contact">
      <div className="section-label">{t('contact.label')}</div>
      <div className="contact-grid">
        <div className="reveal" ref={leftRef}>
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-sub">{t('contact.sub')}</p>
          <div className="contact-links">
            <a href="mailto:xken.dev@gmail.com?subject=Portfolio%20Inquiry" className="contact-link">
              <span className="contact-link-icon">✉</span>
              xken.dev@gmail.com
            </a>
            <a href="https://linkedin.com/in/ken-charles-049602344" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-link-icon">in</span>
              linkedin.com/in/ken-charles-049602344
            </a>
            <a href="https://github.com/Kenelor12" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-link-icon">⌥</span>
              github.com/Kenelor12
            </a>
          </div>
        </div>

        <form className="reveal" ref={rightRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name.label')}</label>
            <input id="name" name="name" type="text" placeholder={t('contact.name.ph')} value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email.label')}</label>
            <input id="email" name="email" type="email" placeholder={t('contact.email.ph')} value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.msg.label')}</label>
            <textarea id="message" name="message" placeholder={t('contact.msg.ph')} value={form.message} onChange={handleChange} />
          </div>
          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'sending' || status === 'sent'}
            style={{ width: '100%', textAlign: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent ✓' : t('contact.submit')}
          </button>
          {status === 'error' && (
            <p style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: '#f87171' }}>
              Something went wrong. Please try again or email directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
