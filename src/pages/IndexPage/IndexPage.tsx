import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      height: '100vh', // Фиксируем высоту
      overflow: 'hidden', // Убираем прокрутку
      background: '#000000',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      color: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative'
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
        width: '100%',
        marginBottom: 'env(safe-area-inset-bottom, 20px)' // Безопасные отступы
      }}>

        {/* Вертикальный логотип кофейного зернышка */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto 25px',
          gap: '15px'
        }}>
          {/* Кофейное зернышко */}
          <div style={{
            width: '40px',
            height: '30px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Основная форма зернышка */}
            <div style={{
              width: '35px',
              height: '25px',
              borderRadius: '50%',
              border: '2.5px solid white',
              position: 'relative',
              transform: 'rotate(0deg)'
            }}>
              {/* Изгиб в центре как у кофейного зерна */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '18px',
                height: '2px',
                background: 'white',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                borderRadius: '1px'
              }} />
            </div>
          </div>

          {/* Название компании */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
            fontWeight: 700,
            margin: '0',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            OatNote
          </h1>
        </div>

        <p style={{
          fontSize: 'clamp(0.95rem, 4vw, 1.1rem)',
          opacity: 0.8,
          margin: '0 0 40px 0',
          fontWeight: 400,
          color: '#cccccc',
          lineHeight: 1.4,
          whiteSpace: 'nowrap'
        }}>
          Простое пространство для ваших идей
        </p>

        {/* Кнопка создания заметки */}
        <Link
          to="/create-note"
          style={{
            display: 'inline-flex', // ← меняем на flex
            alignItems: 'center',   // ← выравниваем по вертикали
            justifyContent: 'center', // ← выравниваем по горизонтали
            gap: '10px',            // ← отступ между иконкой и текстом
            background: '#ffffff',
            border: 'none',
            padding: '16px 35px 16px 30px', // ← больше отступа слева
            borderRadius: '25px',
            color: '#000000',
            fontSize: 'clamp(1rem, 4vw, 1.1rem)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '25px',
            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
            textDecoration: 'none',
            lineHeight: '1'        // ← убираем лишние отступы у текста
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              flexShrink: 0,
              marginBottom: '1px' // ← микро-коррекция выравнивания
            }}
          >
            <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M3 15h6" />
            <path d="M6 12v6" />
          </svg>
          Создать первую заметку
        </Link>

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

          /* Убираем возможность скролла */
          body {
            overflow: hidden;
            margin: 0;
            padding: 0;
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

          /* Предотвращаем zoom на iOS */
          @viewport {
            width: device-width;
            zoom: 1.0;
          }
        `}
      </style>
    </div>
  );
}