"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const games = [
  {
    name: "VALORANT",
    description: "Tactical 5v5 shooter",
    color: "from-pink-500 to-red-500",
    image: "/valorant-champions-2.webp",
  },
  {
    name: "LEAGUE OF LEGENDS",
    description: "Multiplayer Online Battle Arena",
    color: "from-blue-500 to-purple-500",
    image: "/lol-worlds-2.webp",
  },
  {
    name: "DOTA 2",
    description: "Strategic Team Battle",
    color: "from-green-500 to-cyan-500",
    image: "/dota-international-2.webp",
  },
  {
    name: "CS:GO",
    description: "Competitive Tactical Shooter",
    color: "from-orange-500 to-yellow-500",
    image: "/csgo-major-2.webp",
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % games.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + games.length) % games.length)
    setAutoPlay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % games.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative h-96 rounded-xl overflow-hidden neon-glow cursor-pointer"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Carousel Images */}
          {games.map((game, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="neon-text text-4xl mb-2">{game.name}</h2>
                <p className="text-[var(--muted-foreground)]">{game.description}</p>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-[var(--primary)] p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-[var(--primary)] p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {games.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? "bg-[var(--primary)] w-8" : "bg-white/30 w-2 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
