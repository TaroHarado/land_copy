"use client";

import { useState } from "react";
import { Button } from "@/src/shared/ui/Button";
import { Input } from "@/src/shared/ui/Input";

export const TextBlock = () => {
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, twitter }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setEmail("");
        setTwitter("");
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      // Можно добавить уведомление об ошибке
    }
  };

  return (
    <div className="relative -top-0 sm:-top-20 md:-top-32 lg:-top-52 flex min-h-[235px] lg:h-[235px] flex-col gap-6 sm:gap-12 md:gap-16 lg:gap-[80px] mb-8 sm:mb-0">
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-4">
        <p className="text-white-1 text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight bg-gradient-to-r from-white-1 to-blue bg-clip-text text-transparent animate-slide-in-left">
          Axiom for Polymarket
        </p>
        <div className="text-white-1 font-onest w-full sm:w-full md:w-[600px] lg:w-[700px] text-base sm:text-lg md:text-xl lg:text-[32px] leading-tight fade-in-up delay-200">
          Copy top traders, track wallets, and trade prediction markets in
          seconds.
          <span className="text-grey ml-1 block sm:inline">
            Charts, alerts, arbitrage — all in one terminal
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full sm:w-fit lg:w-fit">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-[280px] lg:w-[300px] bg-darkBlue/50 border border-blue/40 rounded-xl sm:rounded-2xl lg:rounded-2xl px-4 sm:px-5 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base lg:text-lg text-white-1 placeholder:text-grey focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/50 transition-all duration-300 hover:border-blue/60"
            />
            <Input
              type="text"
              placeholder="Twitter username (without @)"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value.replace("@", ""))}
              required
              className="w-full sm:w-[280px] lg:w-[300px] bg-darkBlue/50 border border-blue/40 rounded-xl sm:rounded-2xl lg:rounded-2xl px-4 sm:px-5 lg:px-5 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base lg:text-lg text-white-1 placeholder:text-grey focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/50 transition-all duration-300 hover:border-blue/60"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="bg-blue hover:bg-blue/80 text-darkBlue font-onest text-base sm:text-lg lg:text-2xl font-medium flex w-full sm:w-fit lg:w-fit items-center justify-center gap-3 sm:gap-4 lg:gap-4 rounded-xl sm:rounded-2xl lg:rounded-2xl px-6 sm:px-8 lg:px-9 py-2.5 sm:py-3 lg:py-3.5 transition-all duration-300 disabled:opacity-50 hover-glow active:scale-95"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : isSuccess ? (
              "✓ Submitted!"
            ) : (
              "Get Early Access"
            )}
          </Button>
          {isSuccess && (
            <p className="text-green-500 text-xs sm:text-sm lg:text-sm">
              Thank you! We'll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
