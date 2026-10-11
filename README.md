# Резюме Сапара

React + TypeScript + Vite.

Сайт: https://acse07.github.io/react-resume5dz/

## Локальная разработка

```sh
npm ci
npm run dev
```

## Проверка и сборка

```sh
npm run typecheck
npm run build
npm run preview
```

## Деплой

GitHub Actions автоматически собирает и публикует сайт в GitHub Pages
после каждого push в `main`. Деплой также можно запустить вручную
во вкладке Actions → Deploy to GitHub Pages → Run workflow.

В Settings → Pages должен быть выбран источник GitHub Actions.
В `vite.config.ts` задан `base: '/react-resume5dz/'` для пути репозитория.
