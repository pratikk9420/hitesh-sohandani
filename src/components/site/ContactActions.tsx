import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/** Floating WhatsApp control (desktop) + sticky booking bar (mobile). */
export function ContactActions() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-50 hidden size-14 items-center justify-center rounded-full bg-bronze text-bronze-foreground shadow-lift transition-transform hover:scale-105 lg:flex"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background lg:hidden">
        <Link
          to="/book-appointment"
          className="flex min-h-14 items-center justify-center bg-ink text-[11px] tracking-[0.18em] text-ink-foreground uppercase"
        >
          Book Appointment
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 bg-bronze text-[11px] tracking-[0.18em] text-bronze-foreground uppercase"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
