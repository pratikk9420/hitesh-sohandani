import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { legalNav, mainNav, site } from "@/lib/site";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="bg-ink pb-14 text-ink-foreground lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="Xkinovate logo"
              width={44}
              height={44}
              loading="lazy"
              className="size-11 rounded-full"
            />
            <span className="leading-tight">
              <span className="block font-display text-xl tracking-[0.18em]">XKINOVATE</span>
              <span className="block text-[9px] tracking-[0.3em] text-bronze">
                {site.tagline}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">
            Dermatology and aesthetic care in Juhu, Mumbai.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-bronze">Quick Links</h2>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="opacity-80 transition-opacity hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-bronze">Visit &amp; Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bronze" />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
                {site.address.full}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bronze" />
              <a href={site.phoneHref} className="opacity-80 hover:opacity-100">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bronze" />
              <a href={site.emailHref} className="opacity-80 hover:opacity-100">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs opacity-70 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-4">
            {legalNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()} Xkinovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
