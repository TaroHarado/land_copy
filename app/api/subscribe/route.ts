import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, twitter } = body;

    // Валидация
    if (!email || !twitter) {
      return NextResponse.json(
        { error: "Email and Twitter are required" },
        { status: 400 }
      );
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const timestamp = Date.now();
    const subscriberData = {
      email: email.toLowerCase().trim(),
      twitter: twitter.trim().replace("@", ""),
      date: new Date().toISOString(),
      timestamp,
    };

    // Вариант 1: Vercel KV (Redis) - Рекомендуется
    // Раскомментируйте после настройки Vercel KV:
    /*
    try {
      const { kv } = await import("@vercel/kv");
      await kv.set(`subscriber:${timestamp}`, subscriberData);
      await kv.lpush("subscribers:list", timestamp);
    } catch (kvError) {
      console.error("KV error (optional):", kvError);
      // Продолжаем выполнение даже если KV не настроен
    }
    */

    // Вариант 2: Логирование (всегда работает, видно в Vercel Logs)
    console.log("📧 New subscription:", JSON.stringify(subscriberData, null, 2));

    // Вариант 3: Отправка на email через Resend (опционально)
    // Раскомментируйте после настройки:
    /*
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "noreply@yourdomain.com",
        to: "your-email@example.com",
        subject: "New Early Access Signup",
        html: `<p>Email: ${email}</p><p>Twitter: ${twitter}</p><p>Date: ${subscriberData.date}</p>`,
      });
    }
    */

    return NextResponse.json(
      { success: true, message: "Subscription saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving subscription:", error);
    return NextResponse.json(
      { error: "Failed to save subscription" },
      { status: 500 }
    );
  }
}

