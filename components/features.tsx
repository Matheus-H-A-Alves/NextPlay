import { Trophy, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Trophy,
    title: "Torneios",
    description: "Compita em torneios diários com prêmios reais",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Conecte-se com jogadores ao redor do mundo",
  },
  {
    icon: Zap,
    title: "Estatísticas em Tempo Real",
    description: "Acompanhe seu desempenho com análises ao vivo",
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    description: "Jogo justo garantido com detecção avançada",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[rgba(0,212,255,0.02)] to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 neon-text">Por quê escolher o NextStage?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="card-neon">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent-alt)] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[var(--muted-foreground)]">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
