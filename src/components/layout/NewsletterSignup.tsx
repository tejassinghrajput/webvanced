import { useState } from "react";
import { Loader2, AlertCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { subscribeNewsletter } from "@/lib/leadService";
import { AnimatedCheckmark } from "@/components/ui/AnimatedCheckmark";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    const res = await subscribeNewsletter({ email: email.trim() });
    if (res.success) {
      setStatus("success");
      setMessage(res.message || "You're subscribed!");
    } else {
      setStatus("error");
      setMessage(res.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-emerald-500/20 text-sm text-emerald-400">
        <AnimatedCheckmark className="w-6 h-6 shrink-0" colorClass="text-emerald-500" />
        <span className="font-medium">{message}</span>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-semibold text-white mb-1">Stay in the loop</p>
      <p className="text-xs text-gray-400 mb-3">Insights on digital growth — no spam, ever.</p>
      <form onSubmit={handleSubmit} noValidate className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
          placeholder="you@company.com"
          className={cn(
            "flex-1 min-w-0 rounded-xl border bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all",
            status === "error" ? "border-red-500/60" : "border-white/10"
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          <span className="hidden sm:inline">Subscribe</span>
        </button>
      </form>
      {status === "error" && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
          <AlertCircle className="h-3 w-3 shrink-0" />
          {message}
        </p>
      )}
    </div>
  );
}
