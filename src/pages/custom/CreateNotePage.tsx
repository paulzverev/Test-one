import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CreateNotePage() {
  const [noteText, setNoteText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Задержка для плавного появления после монтирования компонента
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      height: '100vh',
      overflow: 'hidden',
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
          ←
        </Link>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 600,
          lineHeight: '1'
        }}>
          Новая заметка
        </h1>
      </div>

      {/* Поле ввода */}
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Начните писать вашу заметку..."
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
        transition: 'all 0.3s ease, opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s',
        height: '52px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
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
  );
}