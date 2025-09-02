import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CreateFirstNotePage() {
  const [noteText, setNoteText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [placeholderOpacity, setPlaceholderOpacity] = useState(1);

  const placeholders = [
    "Начните писать вашу заметку...",
    "Опишите свои мысли...",
    "Что у вас на уме?",
    "Запишите идею..."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderOpacity(0);
      setTimeout(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        setPlaceholderOpacity(1);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      height: '100vh', // Фиксируем высоту
      overflow: 'hidden', // Убираем прокрутку
      background: '#000000',
      fontFamily: '"Inter", sans-serif',
      color: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
    }}>

      {/* Шапка */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            marginRight: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            lineHeight: '1'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
          </svg>
        </Link>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 600,
          lineHeight: '1'
        }}>
          Первая заметка
        </h1>
      </div>

      {/* Поле ввода */}
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder={placeholders[currentPlaceholder]}
        style={{
          flex: 1,
          background: 'transparent',
          border: '1px solid #333',
          borderRadius: '12px',
          padding: '20px',
          color: 'white',
          fontSize: '1.1rem',
          resize: 'none',
          outline: 'none',
          marginBottom: '20px',
          fontFamily: '"Inter", sans-serif',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
          transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
        }}
        rows={10}
      />

      {/* Контейнер для кнопки с адаптацией */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s'
      }}>
        {/* Кнопка сохранения */}
        <button style={{
          background: '#ffffff',
          border: 'none',
          padding: '16px 35px 16px 30px',
          borderRadius: '25px',
          color: '#000000',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          lineHeight: '1',
          marginBottom: '25px',
          boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease',
          height: '52px',
          maxWidth: '400px',
          width: '100%'
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              flexShrink: 0,
              position: 'relative',
              top: '0.5px'
            }}
          >
            <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
            <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
            <path d="M7 3v4a1 1 0 0 0 1 1h7" />
          </svg>

          <span style={{
            position: 'relative',
            top: '0.5px'
          }}>
            Сохранить заметку
          </span>
        </button>
      </div>

      {/* Стили для анимированного placeholder и запрета прокрутки */}
      <style>
        {`
          textarea::placeholder {
            color: #888;
            opacity: ${placeholderOpacity};
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Запрет прокрутки для всей страницы */
          body {
            overflow: hidden;
            margin: 0;
            padding: 0;
          }

          /* Предотвращаем zoom на iOS */
          @viewport {
            width: device-width;
            zoom: 1.0;
          }

          /* Адаптация для горизонтального режима */
          @media (max-width: 768px) and (orientation: landscape) {
            textarea {
              font-size: 1rem;
              padding: 15px;
            }
            
            button {
              padding: 14px 30px 14px 25px;
              font-size: 1rem;
              height: 48px;
            }
          }

          /* Адаптация для очень широких экранов */
          @media (min-width: 1024px) {
            div[style*="justify-content: center"] {
              max-width: 500px;
              margin: 0 auto;
            }
          }
        `}
      </style>

    </div>
  );
}