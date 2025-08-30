import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DatabaseIcon } from './icons/database.svg'

export function CreateNotePage() {
  const [noteText, setNoteText] = useState('');

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
      flexDirection: 'column'
    }}>

      {/* Шапка */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            marginRight: '15px'
          }}
        >
          ←
        </Link>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 600
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
          marginBottom: '20px'
        }}
        rows={10}
      />

      {/* Кнопка сохранения */}
      <button style={{
        background: '#ffffff',
        border: 'none',
        padding: '16px 24px 16px 20px', // Больше отступов слева для иконки
        borderRadius: '25px',
        color: '#000000',
        fontSize: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px', // Отступ между иконкой и текстом
        lineHeight: '1', // Убираем лишние отступы у текста
        height: '48px' // Фиксированная высота для выравнивания
      }}>
        <DatabaseIcon
          style={{
            width: '24px',
            height: '24px',
            fill: '#000000',
            flexShrink: 0
          }}
        />
        Сохранить заметку
      </button>

    </div>
  );
}