"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { get } from "http"
import { deleteCookie, getCookie } from "@/lib/cookies"

interface HeaderProps {
  onRegister: () => void
  onLogin: () => void
  onContact: () => void
}

export default function Header({ onRegister, onLogin, onContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState({
    nome: "",
    email: "",
    contato: "",
  })

  useEffect(() => {
    const cookies = getCookie("user");
    if (cookies) {
      try {
        const valor = JSON.parse(cookies);
        setUser(valor);
      } catch (error) {
        console.error("Erro ao fazer parse do cookie 'user':", error);
        // Se o JSON for inválido, mantém o estado padrão
      }
    }
  }, []);


  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[rgba(10,14,39,0.8)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent-alt)] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">NS</span>
            </div>
            <span className="neon-text text-2xl hidden sm:block">NextStage</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button className="hover:text-[var(--primary)] transition-colors">Home</button>
            <button onClick={onRegister} className="hover:text-[var(--primary)] transition-colors">
              Cadastro
            </button>
            <button onClick={onContact} className="hover:text-[var(--primary)] transition-colors">
              Contato
            </button>
            {user.nome.length > 0 ?
              <div className="flex flex-row items-center justify-center gap-1 border border-[var(--primary)]/50 px-2 py-1 rounded-lg">
                <div className="flex justify-center items-center size-10 border shadow-lg rounded-full">
                  {user.nome.slice(0, 3)}
                </div>
                <div className="flex flex-col justify-center items-start leading-5 gap-1">
                  <p>
                    {user.nome ? `Olá, ${user.nome.toUpperCase()}` : 'Bem-vindo!'}
                  </p>
                  {user.email ? <p>({user.email}) </p> : ''}
                </div>
              </div>
              :
              null
            }
            {user.nome.length == 0 ?
              <button onClick={onLogin} className="btn-primary text-sm">
                Login
              </button>
              :
              null
            }
            <button className="cursor-pointer" onClick={() => {
              deleteCookie("user");
              setUser({
                nome: "",
                email: "",
                contato: "",
              })
            }}>
              Sign Out
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--border)]">
            <nav className="flex flex-col gap-4 pt-4">
              <button className="hover:text-[var(--primary)] transition-colors">Home</button>
              <button onClick={onRegister} className="hover:text-[var(--primary)] transition-colors">
                Cadastro
              </button>
              <button onClick={onContact} className="hover:text-[var(--primary)] transition-colors">
                Contato
              </button>
              <button onClick={onLogin} className="btn-primary w-full text-sm">
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
