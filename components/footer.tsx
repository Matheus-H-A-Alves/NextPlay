import { Github, Twitter, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-gradient-to-t from-[var(--background)] to-transparent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NextStage</h3>
            <p className="text-[var(--muted-foreground)] text-sm">
              A plataforma definitiva de e-sports para jogos competitivos.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-[var(--muted-foreground)] text-sm">
              <li>
                <button className="hover:text-[var(--primary)] transition">Torneios</button>
              </li>
              <li>
                <button className="hover:text-[var(--primary)] transition">Classificações</button>
              </li>
              <li>
                <button className="hover:text-[var(--primary)] transition">Transmissões</button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-[var(--muted-foreground)] text-sm">
              <li>
                <button className="hover:text-[var(--primary)] transition">Sobre</button>
              </li>
              <li>
                <button className="hover:text-[var(--primary)] transition">Blog</button>
              </li>
              <li>
                <button className="hover:text-[var(--primary)] transition">Carreiras</button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow</h4>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-[var(--border)] rounded transition">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[var(--border)] rounded transition">
                <Youtube className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[var(--border)] rounded transition">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[var(--border)] rounded transition">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 text-center text-[var(--muted-foreground)] text-sm">
          <p>&copy; 2025 NextStage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
