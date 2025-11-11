import type React from "react"
import type { Metadata } from "next"
import { Anta } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const anta = Anta({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextStage - E-sports Platform",
  description: "Your gateway to competitive gaming",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${anta.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
