import { Calendar, Users, Trophy } from "lucide-react"

const events = [
  {
    game: "VALORANT",
    tournament: "Champions League Season 5",
    date: "15-20 Dez",
    prizePool: "$500K",
    players: 128,
  },
  {
    game: "LEAGUE OF LEGENDS",
    tournament: "Mundial 2025",
    date: "22 Dez-5 Jan",
    prizePool: "$1M",
    players: 160,
  },
  {
    game: "DOTA 2",
    tournament: "Qualificatórios Internacionais",
    date: "10-15 Dez",
    prizePool: "$300K",
    players: 96,
  },
]

export default function Events() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 neon-text">Próximos Eventos</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="card-neon group hover:scale-105">
              <div className="mb-4 pb-4 border-b border-[var(--border)]">
                <p className="text-[var(--primary)] text-sm font-bold mb-2">{event.game}</p>
                <h3 className="text-xl font-bold">{event.tournament}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <Calendar className="w-5 h-5 text-[var(--primary)]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <Trophy className="w-5 h-5 text-[var(--accent-alt)]" />
                  <span>{event.prizePool} Prêmio</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <Users className="w-5 h-5 text-[var(--primary)]" />
                  <span>{event.players} Jogadores</span>
                </div>
              </div>

              <button className="btn-secondary w-full mt-6">Participar do Evento</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
