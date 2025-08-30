import { Link } from 'react-router-dom';
import { Card, Cell, Title, Text } from '@telegram-apps/telegram-ui';

import { routes } from '@/navigation/routes.tsx';

export function IndexPage() {
  return (
    <>
      <Title>Добро пожаловать!</Title>
      <Card>
        <Text>
          Это мое первое мини-приложение в Telegram! 🚀
        </Text>
        <Text>
          Здесь я буду экспериментировать и создавать крутые фичи!
        </Text>
      </Card>

      {/* Мои эксперименты */}
      <Title level="2">Мои эксперименты</Title>
      <Card>
        <Cell
          Component={Link}
          href="/my-feature" // ← Используем href вместо to
          description="Моя первая фича"
        >
          🎨 Моя фича
        </Cell>
      </Card>

      <Title level="2">Примеры из шаблона</Title>
      {routes
        .filter((route) => route.path !== '/')
        .map((route, index) => (
          <Cell
            key={index}
            Component={Link}
            href={route.path} // ← Используем href вместо to
            description={route.title}
            before={route.icon}
          >
            {route.title}
          </Cell>
        ))}
    </>
  );
}