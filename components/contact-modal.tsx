"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[var(--muted)] border border-[var(--primary)] rounded-lg p-8 max-w-md w-full neon-glow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold neon-text">Contato-nos</h2>
          <button onClick={onClose} className="p-1 hover:bg-[var(--border)] rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[var(--background)] border border-[var(--border)] rounded px-4 py-2 focus:outline-none focus:border-[var(--primary)] transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[var(--background)] border border-[var(--border)] rounded px-4 py-2 focus:outline-none focus:border-[var(--primary)] transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Assunto</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[var(--background)] border border-[var(--border)] rounded px-4 py-2 focus:outline-none focus:border-[var(--primary)] transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Mensagem</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-[var(--background)] border border-[var(--border)] rounded px-4 py-2 focus:outline-none focus:border-[var(--primary)] transition resize-none"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full mt-6">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  )
}
