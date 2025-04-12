# ASTRACAT - Брутальная цифровая безопасность

![ASTRACAT Preview](https://i.imgur.com/JfQiQ2U.png)

**Официальный сайт проектов ASTRACAT DNS и VPN GEn**  
Брутальный технологичный дизайн для элитных решений безопасности

## 🚀 О проекте

ASTRACAT - это коллекция высокотехнологичных решений для цифровой безопасности и анонимности:

- **ASTRACAT DNS**: Продвинутый DNS-сервис с защитой от угроз, рекламы и трекеров
- **VPN GEn**: Мощный генератор Veles-конфигов с уникальными возможностями настройки

## ✨ Особенности сайта

- 💥 Брутальный технологичный дизайн
- 🌌 Эффекты прозрачности и стеклянного морфинга
- 🔥 Глитч-эффекты и плавные анимации
- 📱 Полная адаптивность под все устройства
- 🛡️ Строгий, агрессивный стиль хакерской тематики

## 🛠️ Технологии

- Чистый HTML5 и CSS3 (без JavaScript)
- Font Awesome для иконок
- Google Fonts (Rajdhani)
- Современные CSS-эффекты:
  - `backdrop-filter` для стеклянного эффекта
  - CSS-анимации и переходы
  - CSS Grid и Flexbox для макетов
  - Псевдоэлементы для декоративных эффектов

## 🌐 Живая версия

Сайт доступен по адресу:  
[https://astracat2022.github.io](https://astracat2022.github.io)

## 📌 Проекты

1. **ASTRACAT DNS**  
   Быстрый и безопасный DNS на базе Cloudflare Zero Trust  
   [https://astracat2022.github.io/dns](https://astracat2022.github.io/dns)

2. **VPN GEn**  
   Генератор Veles-конфигов с возможностью амнистии прокси  
   [https://astracat2022.github.io/vpngen/](https://astracat2022.github.io/vpngen/)

## 📬 Контакты

- Telegram: [@astracatui](https://t.me/astracatui)
- Email: [astracat2019@gmail.com](mailto:astracat2019@gmail.com)
- GitHub: [ASTRACAT2022](https://github.com/ASTRACAT2022)

## 🎨 Особенности дизайна

```css
/* Основная цветовая схема */
:root {
  --primary: #1a1a1a;
  --accent: #ff4d00; /* агрессивный оранжевый */
  --secondary: #00ccff; /* техно-голубой */
  --glass: rgba(30, 30, 30, 0.7); /* стеклянный эффект */
}

/* Глитч-эффект для логотипа */
.glitch::before, .glitch::after {
  content: 'ASTRACAT';
  position: absolute;
  /* анимация смещения */
  animation: glitch-effect 3s infinite linear alternate-reverse;
}
