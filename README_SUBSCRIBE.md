# Сбор данных подписчиков

## Текущая реализация

API route создан в `app/api/subscribe/route.ts`. Сейчас данные просто логируются в консоль.

## Варианты хранения данных:

### 1. **Vercel KV (Redis) - Рекомендуется для Vercel**

1. Установите Vercel KV:
   ```bash
   npm install @vercel/kv
   ```

2. В Vercel Dashboard:
   - Перейдите в Settings → Storage → Create Database → KV
   - Скопируйте переменные окружения

3. Добавьте в `.env.local`:
   ```
   KV_URL=your_kv_url
   KV_REST_API_URL=your_rest_api_url
   KV_REST_API_TOKEN=your_token
   ```

4. Обновите `app/api/subscribe/route.ts`:
   ```typescript
   import { kv } from '@vercel/kv';
   
   await kv.set(`subscriber:${Date.now()}`, { email, twitter });
   ```

### 2. **Google Sheets API - Простой способ**

1. Создайте Google Sheet
2. Настройте Google Cloud Project и получите credentials
3. Используйте библиотеку `googleapis`

### 3. **Email уведомления - Простой способ**

Используйте Resend (бесплатный тариф):
```bash
npm install resend
```

Добавьте в `.env.local`:
```
RESEND_API_KEY=your_api_key
```

### 4. **Webhook - Для интеграции с внешними сервисами**

Отправляйте данные на ваш webhook URL (например, Zapier, Make.com, или ваш сервер).

## Просмотр данных

Для Vercel KV можно создать админ-панель или использовать Vercel Dashboard для просмотра данных.

