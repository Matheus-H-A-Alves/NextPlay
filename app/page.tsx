"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CAROUSEL_IMAGES = [
  {
    src: "/esports/lol-worlds-2.webp",
    alt: "League of Legends World Championship",
    title: "LoL Worlds Championship"
  },
  {
    src: "/esports/csgo-major-2.webp",
    alt: "CS:GO Major Tournament",
    title: "CS:GO Major"
  },
  {
    src: "/esports/dota-international-2.webp",
    alt: "Dota 2 The International",
    title: "The International"
  },
  {
    src: "/esports/valorant-champions-2.webp",
    alt: "Valorant Champions",
    title: "Valorant Champions"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de busca
    console.log("Buscando por:", searchQuery);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );
  };

  return (
    <main>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 24px',
        borderBottom: '1px solid #333',
        gap: '24px',
        backgroundColor: '#000',
        color: 'white'
      }}>
        {/* Logo no canto esquerdo */}
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image src="/NextStage-logo-2.jpg" alt="Logo" width={80} height={80} />
        </div>

      {/* Barra de pesquisa */}
      <form onSubmit={handleSearch} style={{ 
        flex: '1',
        maxWidth: '600px',
        position: 'relative',
        display: 'flex'
      }}>
        <input
          type="search"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 16px',
            paddingRight: '40px',
            border: '2px solid #eaeaea',
            borderRadius: '20px',
            outline: 'none',
            fontSize: '14px',
            transition: 'border-color 0.2s',
          }}
        />
        <button type="submit" style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          color: '#666'
        }}>
          🔍
        </button>
      </form>

        {/* Links de navegação à direita do logo */}
        <nav style={{ 
          display: 'flex', 
          gap: '24px', 
          alignItems: 'center',
          marginLeft: 'auto',
          flexShrink: 0
        }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}>Home</Link>
          <Link href="/register" style={{ textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}>Register</Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}>Contact</Link>
          <Link href="/login" style={{ textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}>Login</Link>
        </nav>
      </header>

      {/* Carrossel de imagens */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        backgroundColor: '#000'
      }}>
        {/* Imagens do carrossel */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}>
          {CAROUSEL_IMAGES.map((image, index) => (
            <div
              key={image.src}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{
                  objectFit: 'cover',
                }}
                priority={index === 0}
              />
              {/* Título da imagem */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '1.2rem'
              }}>
                {image.title}
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}
        >
          →
        </button>

        {/* Indicadores de slide */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 2
        }}>
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
