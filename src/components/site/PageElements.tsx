import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { medicalDisclaimer, whatsappLink } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-7"><ol className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground"><li><Link to="/">Home</Link></li>{items.map((item)=><li key={item.label} className="before:mr-2 before:content-['/']">{item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return <header className="mx-auto max-w-7xl px-6 py-14 md:py-20"><div className="rule-bronze mb-6" />{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1 className="mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl md:text-7xl">{title}</h1>{children && <div className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">{children}</div>}</header>;
}

export function CTA({ title="Ready to Begin Your Skin Journey?", body="Book a consultation to discuss your concerns with Dr. Shreedha Khatavkar and understand which options may be appropriate for you." }: { title?: string; body?: string }) {
  return <section className="bg-ink text-ink-foreground"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-20"><div><p className="eyebrow text-bronze">Start a conversation</p><h2 className="mt-4 text-4xl md:text-5xl">{title}</h2></div><div className="md:border-l md:border-ink-foreground/20 md:pl-12"><p className="max-w-2xl leading-7 text-ink-foreground/70">{body}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/book-appointment" className="inline-flex min-h-12 items-center justify-center gap-2 bg-background px-7 py-3 text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-bronze hover:text-bronze-foreground">Book Appointment <ArrowRight className="size-4" /></Link><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink-foreground/35 px-7 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:border-bronze hover:text-bronze"><MessageCircle className="size-4" /> Chat on WhatsApp</a></div></div></div></section>;
}

export function MedicalNotice() { return <aside className="border-l-2 border-bronze bg-muted px-5 py-4 text-sm leading-6 text-muted-foreground"><strong className="font-medium text-foreground">Medical information notice.</strong> {medicalDisclaimer}</aside>; }

export function Section({ eyebrow, title, children, tone="plain" }: { eyebrow?: string; title?: string; children: React.ReactNode; tone?: "plain"|"muted"|"ink" }) {
  const toneClass=tone==="ink"?"bg-ink text-ink-foreground":tone==="muted"?"bg-cream":"";
  return <section className={toneClass}><div className="mx-auto max-w-7xl px-6 py-16 md:py-24">{eyebrow&&<p className={`eyebrow ${tone==="ink"?"text-bronze":""}`}>{eyebrow}</p>}{title&&<h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">{title}</h2>}<div className="mt-8">{children}</div></div></section>;
}
