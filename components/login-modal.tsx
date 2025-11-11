"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { setCookie } from "@/lib/cookies"

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    const response = await fetch("https://next-stage-api-zeta.vercel.app/entrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    if (response.ok) {
      setLoading(false)
      alert(data.msg)
      console.log(data.data);
      setCookie("user", JSON.stringify(data.data), 7);
      setFormData({ email: "", senha: "" })
      window.location.reload();
      onClose()
    } else {
      setLoading(false)
      alert(data.errors.default)
    }

  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[var(--muted)] border border-[var(--primary)] rounded-lg p-8 max-w-md w-full neon-glow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold neon-text">Login</h2>
          <button onClick={onClose} className="p-1 hover:bg-border rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-sm font-bold mb-2">Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="w-full bg-[var(--background)] border border-[var(--border)] rounded px-4 py-2 focus:outline-none focus:border-[var(--primary)] transition"
              required
            />
          </div>

          <button type="submit" className={`btn-primary w-full mt-6 cursor-pointer ${loading ? "animate-pulse" : ""}`}>
            {loading ? "Carregando..." : "Entrar"}
          </button>

          <p className="text-center text-[var(--muted-foreground)] text-sm">
            Esqueceu sua senha?{" "}
            <button type="button" className="text-[var(--primary)] hover:underline">
              Redefinir aqui
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
