# Personal Budget System

## О проекте

Personal Budget System — это простой и удобный сервис для учета доходов и расходов пользователя. Проект предоставляет структурированный и наглядный способ анализа бюджета благодаря визуальным графикам.

## Основные функции

1. Отслеживание доходов и расходов.

2. Анализ расходов по категориям с отображением на графиках.

3. Возможность добавлять новые расходы и доходы.

4. Конвертация валют (основная валюта — RUB).

5. Авторизация/регистрация/аунтификация пользователей.

6. Сохранения бюджета локально относительно пользователя.

## Технологии

1. React + TypeScript + Vite

2. State Management: Hookstate

3. UI: Ant Design (Antd)

4. Графики: Chart.js

5. Архитектура: модульная

6. Тестирование:

  - Unit и интеграционные тесты

  - Vitest + React Testing Library (для компонентного тестирования)

7. Сервер: NGINX (кастомная конфигурация)

8. Контейнеризация: Docker + Docker Compose

## Установка и запуск

1. Склонировать репозиторий

```
https://gitlab.itnap.ru/a.enin/personalbudgetsystem.git
```

2. Запуск

```
docker-compose up -d
```

После чего проект можно открыть на http://localhost

## Запуск в режиме разработки

1. Склонировать репозиторий

```
https://gitlab.itnap.ru/a.enin/personalbudgetsystem.git
```

2. Установки завимостей

```
npm install
```

3. Запуск в режиме разработки

``` 
npm run dev
```

После чего проект можно открыть на http://localhost:5173

## Запуск тестов

``` 
npm run test
```

Или

``` 
npx vitest
```
