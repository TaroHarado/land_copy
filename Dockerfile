# Builder stage - сборка приложения
FROM node:22.16.0-alpine AS builder

# Включаем inline cache для BuildKit
ARG BUILDKIT_INLINE_CACHE=1

# Установка необходимых build-инструментов
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Копируем package.json и устанавливаем ВСЕ зависимости (включая dev для сборки)
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Копируем исходники (без .env, он в .gitignore)
COPY . .

# Копируем .env ПОСЛЕ исходников (чтобы не перезаписался)
# Next.js автоматически прочитает все NEXT_PUBLIC_* переменные при сборке
COPY .env* ./

# Собираем приложение (все NEXT_PUBLIC_* из .env встроятся в клиентский код)
RUN npm run build

# Production stage - финальный образ БЕЗ dev зависимостей
FROM node:22.16.0-alpine AS production

# Создаём пользователя сразу
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# Копируем только необходимые файлы с правильным владельцем
COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.env* ./

# Переключаемся на непривилегированного пользователя
USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
