import { useState } from "react";
import Icon from "@/components/ui/icon";

const TICKET_REQUEST_URL = "https://functions.poehali.dev/14263d4c-0670-4e32-8830-be033cbaaeb9";

interface TicketFormProps {
  theaterName: string;
  theaterAccent: string;
  onClose: () => void;
}

export default function TicketForm({ theaterName, theaterAccent, onClose }: TicketFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", seats: "1", comment: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(TICKET_REQUEST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, theater: theaterName }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Что-то пошло не так");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Ошибка соединения. Попробуйте ещё раз.");
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg border border-border bg-background p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-6">🎭</div>
            <h3 className="font-display text-2xl uppercase tracking-widest mb-3" style={{ color: theaterAccent }}>
              Заявка принята!
            </h3>
            <p className="font-body text-lg italic text-foreground/60">
              Мы свяжемся с вами в ближайшее время для подтверждения бронирования.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 font-display text-xs tracking-widest uppercase border border-border hover:border-primary/50 hover:text-primary transition-all"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <p className="font-display text-xs tracking-[0.4em] uppercase mb-1" style={{ color: theaterAccent }}>
              Запись на спектакль
            </p>
            <h3 className="font-display text-xl uppercase tracking-wide mb-8">{theaterName}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-display text-xs tracking-widest uppercase text-foreground/50 block mb-2">
                  Ваше имя *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Иван Иванов"
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              <div>
                <label className="font-display text-xs tracking-widest uppercase text-foreground/50 block mb-2">
                  Телефон *
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (999) 123-45-67"
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              <div>
                <label className="font-display text-xs tracking-widest uppercase text-foreground/50 block mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              <div>
                <label className="font-display text-xs tracking-widest uppercase text-foreground/50 block mb-2">
                  Количество билетов
                </label>
                <select
                  name="seats"
                  value={form.seats}
                  onChange={handleChange}
                  className="w-full bg-background border border-border px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? "билет" : n < 5 ? "билета" : "билетов"}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-display text-xs tracking-widest uppercase text-foreground/50 block mb-2">
                  Комментарий
                </label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Название спектакля, желаемая дата, пожелания..."
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="font-body text-sm text-red-400 italic">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 font-display text-sm tracking-widest uppercase transition-all hover:opacity-80 disabled:opacity-50"
                style={{ background: theaterAccent, color: "#0d0d0d" }}
              >
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
