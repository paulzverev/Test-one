import { useState, useEffect } from 'react';

export function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Создаем много частиц
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 4
  }));

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      color: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Анимированные частицы */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.4)',
            animation: `floatParticle ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* Основной контент */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease-out',
        maxWidth: '400px',
        width: '100%'
      }}>
        
        {/* Минималистичный логотип овсяного зернышка */}
        <div style={{
          width: '70px',
          height: '70px',
          margin: '0 auto 25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Контур зернышка */}
          <div style={{
            width: '45px',
            height: '25px',
            borderRadius: '50%',
            border: '3px solid white',
            transform: 'rotate(0deg)',
            position: 'relative'
          }}>
            {/* Линии внутри зернышка */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '25%',
              width: '15px',
              height: '2px',
              background: 'white',
              transform: 'rotate(45deg) translateY(-50%)'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '12px',
              height: '2px',
              background: 'white',
              transform: 'rotate(-45deg) translateY(-50%) translateX(-50%)'
            }} />
          </div>
        </div>

        {/* Название компании */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
          fontWeight: 700,
          margin: '0 0 12px 0',
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1.1
        }}>
          OatNote
        </h1>

        <p style={{
          fontSize: 'clamp(0.95rem, 4vw, 1.1rem)',
          opacity: 0.8,
          margin: '0 0 40px 0',
          fontWeight: 400,
          color: '#cccccc',
          lineHeight: 1.4,
          whiteSpace: 'nowrap' // Предотвращаем перенос строк
        }}>
          Простое пространство для ваших мыслей
        </p>

        {/* Кнопка создания заметки */}
        <button style={{
          background: '#ffffff',
          border: 'none',
          padding: '16px 40px',
          borderRadius: '25px',
          color: '#000000',
          fontSize: 'clamp(1rem, 4vw, 1.1rem)',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginBottom: '25px',
          boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
        }}>
          📝 Создать первую заметку
        </button>

        {/* Дополнительный текст */}
        <p style={{
          fontSize: '0.9rem',
          opacity: 0.6,
          margin: '0',
          fontWeight: 300,
          color: '#999999'
        }}>
          Начните записывать мысли в один клик
        </p>

      </div>

      {/* CSS анимации для частиц */}
      <style>
        {`
          @keyframes floatParticle {
            0%, 100% { 
              transform: translateY(0px) translateX(0px);
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-30px) translateX(15px);
              opacity: 0.8;
            }
          }

          /* Адаптация для мобильных */
          @media (max-width: 768px) {
            button {
              padding: 14px 35px !important;
            }
          }

          /* Адаптация для компьютеров */
          @media (min-width: 769px) {
            button:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3) !important;
            }
          }
        `}
      </style>
    </div>
  );
}