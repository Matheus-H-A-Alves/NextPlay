"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Carousel from "@/components/carousel"
import Features from "@/components/features"
import Events from "@/components/events"
import Footer from "@/components/footer"
import RegisterModal from "@/components/register-modal"
import LoginModal from "@/components/login-modal"
import ContactModal from "@/components/contact-modal"

export default function Home() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header
        onRegister={() => setShowRegister(true)}
        onLogin={() => setShowLogin(true)}
        onContact={() => setShowContact(true)}
      />
      <Hero />
      <Carousel />
      <Features />
      <Events />
      <Footer />

      <RegisterModal open={showRegister} onClose={() => setShowRegister(false)} />
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
      <ContactModal open={showContact} onClose={() => setShowContact(false)} />
    </div>
  )
}
