export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 text-center mt-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">LEVEL UP</span>
          <br />
          <span className="neon-text">NEXTSTAGE</span>
        </h1>
        <p className="text-xl text-[var(--muted-foreground)] mb-8 leading-relaxed">
          Compita em torneios, conecte-se com jogadores profissionais e domine a cena dos e-sports. Sua jornada para a grandeza começa aqui.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Começar a Jogar</button>
          <button className="btn-secondary">Assistir Torneios</button>
        </div>
      </div>
    </section>
  )
}
