import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { mainNav, site, whatsappLink } from "@/lib/site";
import { images } from "@/lib/images";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 shadow-soft backdrop-blur-xl">
      <div className="hidden bg-ink text-ink-foreground xl:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[10px] tracking-[0.16em]">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-3.5 text-bronze" />
            {site.address.short}
          </span>
          <span className="flex items-center gap-6">
            <a className="flex items-center gap-2 hover:text-bronze" href={site.phoneHref}>
              <Phone aria-hidden="true" className="size-3.5 text-bronze" />
              {site.phoneDisplay}
            </a>
            <a className="flex items-center gap-2 hover:text-bronze" href={site.emailHref}>
              <Mail aria-hidden="true" className="size-3.5 text-bronze" />
              {site.email}
            </a>
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Xkinovate home">
          <img
            src={images.logo}
            alt="Xkinovate logo"
            width={72}
            height={72}
            className="size-16 rounded-full xl:size-[4.5rem]"
          />
          <span className="leading-tight">
            <span className="block font-display text-2xl tracking-[0.14em] xl:text-[1.7rem]">XKINOVATE</span>
            <span className="mt-1 hidden text-[9px] tracking-[0.28em] text-muted-foreground sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="border-b border-transparent py-2 text-[10px] font-medium tracking-[0.19em] uppercase transition-colors hover:border-bronze hover:text-bronze"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            className="bg-ink px-6 py-3.5 text-[10px] font-medium tracking-[0.2em] text-ink-foreground uppercase shadow-soft transition-colors hover:bg-bronze"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center border border-border bg-background xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-cream px-4 pb-6 xl:hidden"
        >
          <ul className="divide-y divide-border">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm tracking-[0.14em] uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3">
            <Link
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="bg-ink px-5 py-4 text-center text-[11px] tracking-[0.18em] text-ink-foreground uppercase"
            >
              Book Appointment
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-5 py-4 text-center text-[11px] tracking-[0.18em] uppercase"
            >
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
