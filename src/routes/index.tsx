import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CTA, Section } from "@/components/site/PageElements";
import { images } from "@/lib/images";
import { articles } from "@/lib/articles";
import { treatments } from "@/lib/treatments";
import { pageHead } from "@/lib/seo";
import { teamDoctors } from "@/lib/doctors";
import { site, whatsappLink } from "@/lib/site";
import editorialHero from "@/assets/editorial-hero-woman.jpg";
import editorialSkin from "@/assets/editorial-skin-woman.jpg";
import editorialProfile from "@/assets/editorial-profile-woman.jpg";
import editorialSculptural from "@/assets/editorial-sculptural-woman.jpg";
import editorialJawline from "@/assets/editorial-jawline-woman.jpg";
import editorialMature from "@/assets/editorial-mature-woman.jpg";

const title="Aesthetic Clinic in Juhu, Mumbai | Xkinovate";
const description="Xkinovate offers skin, hair and aesthetic care in Juhu, Mumbai, with personalised treatment plans and evidence-based clinical care.";
const treatmentImages=[editorialSkin,editorialSculptural,editorialProfile,editorialJawline,editorialMature,editorialHero];
const journalImages=[editorialMature,editorialJawline,editorialSculptural];

export const Route=createFileRoute("/")({head:()=>pageHead(title,description,"/",[{"@context":"https://schema.org","@type":"MedicalClinic",name:site.name,description,address:{"@type":"PostalAddress",streetAddress:`${site.address.line1}, ${site.address.line2}`,addressLocality:site.address.locality,addressRegion:site.address.region,postalCode:site.address.postalCode,addressCountry:site.address.country},telephone:site.phoneDisplay,email:site.email,url:site.url,hasMap:site.mapsUrl}]),component:Home});

function Home(){return <>
  <section className="relative min-h-[76vh] overflow-hidden bg-cream">
    <img src={editorialHero} alt="Decorative beauty editorial portrait" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[68%_center]" fetchPriority="high"/>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/5"/>
    <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-6 hidden font-display text-[18rem] leading-none text-background/20 xl:block">X</span>
    <div className="relative mx-auto flex min-h-[76vh] max-w-7xl items-center px-6 py-20">
      <div className="max-w-2xl">
        <p className="eyebrow border-l-2 border-bronze pl-4 text-bronze">Where science meets artistry</p>
        <h1 className="mt-7 text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">Elevate your<br/><em className="inline-block pt-2 font-normal text-bronze">best self.</em></h1>
        <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground">Advanced dermatology and aesthetic care designed around your skin, your concerns and your goals.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link to="/book-appointment" className="inline-flex min-h-14 items-center justify-center gap-3 bg-ink px-8 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground shadow-lift transition-colors hover:bg-bronze">Book a consultation <ArrowRight className="size-4"/></Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 px-6 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-bronze"><span className="flex size-10 items-center justify-center rounded-full border border-border"><MessageCircle className="size-4"/></span>Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-ink text-ink-foreground"><ul className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink-foreground/15 px-6 py-7 text-center text-[10px] uppercase tracking-[0.17em] md:grid-cols-4"><li className="p-3">In-clinic consultations</li><li className="p-3">Personalised treatment plans</li><li className="p-3">Dermatology and aesthetic care</li><li className="p-3">JVPD, Juhu</li></ul></section>

  <Section eyebrow="Our specialisations" title="Science. Precision. Personalised Care.">
    <div className="mt-12 grid gap-8 md:grid-cols-3">{treatments.slice(0,6).map((t,i)=><Link key={t.slug} to="/treatments/$slug" params={{slug:t.slug}} className="group block"><div className="relative aspect-[4/5] overflow-hidden bg-muted"><img src={treatmentImages[i]} alt="Decorative beauty editorial portrait" width={1200} height={1504} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent"/><p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.2em] text-ink-foreground">{t.category}</p></div><h3 className="mt-6 text-3xl leading-tight">{t.name}</h3><p className="mt-3 leading-7 text-muted-foreground">{t.cardBlurb}</p><span className="mt-5 block h-px w-12 bg-bronze transition-all duration-500 group-hover:w-full"/></Link>)}</div>
    <Link to="/treatments" className="mt-12 inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs uppercase tracking-[0.16em]">View all treatments <ArrowRight className="size-4"/></Link>
  </Section>

  <section className="grid bg-cream md:grid-cols-2">
    <div className="relative min-h-[440px] md:min-h-[620px]"><img src={editorialProfile} alt="Decorative beauty editorial portrait" width={1200} height={1408} loading="lazy" className="absolute inset-0 size-full object-cover"/></div>
    <div className="flex items-center px-6 py-16 md:px-16"><div className="max-w-xl"><p className="eyebrow">The Xkinovate X Factor</p><h2 className="mt-5 text-5xl md:text-6xl">More Than Treatments.<br/><em>A Thoughtful Approach.</em></h2><p className="mt-7 text-lg leading-8 text-muted-foreground">Good aesthetic care is not about changing everyone in the same way. It is about understanding the skin, identifying the concern, discussing realistic options and choosing an appropriate treatment plan.</p><Link to="/the-x-factor" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs uppercase tracking-[0.16em]">Discover the X Factor <ArrowRight className="size-4"/></Link></div></div>
  </section>

  <Section eyebrow="Meet the doctors" title="The Xkinovate clinical team" tone="muted">
    <div className="grid gap-8 md:grid-cols-3">
      {teamDoctors.map((doctor) => (
        <Link key={doctor.slug} to={doctor.slug} className="group block">
          <img src={doctor.image} alt={doctor.name} width={800} height={1000} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-bronze">{doctor.role}</p>
          <h3 className="mt-2 text-3xl">{doctor.name}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{doctor.cardBlurb}</p>
        </Link>
      ))}
    </div>
    <Link to="/doctors" className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs uppercase tracking-[0.16em]">Meet the doctors <ArrowRight className="size-4" /></Link>
  </Section>

  <section className="grid bg-ink text-ink-foreground md:grid-cols-2"><img src={images.space} alt="Abstract architectural detail representing the calm Xkinovate clinic environment" width={1200} height={900} loading="lazy" className="min-h-[400px] size-full object-cover opacity-80"/><div className="flex items-center px-6 py-16 md:px-16"><div><p className="eyebrow text-bronze">Our clinic</p><h2 className="mt-5 text-5xl">A Space Designed Around You</h2><p className="mt-7 max-w-xl text-lg leading-8 text-ink-foreground/70">Xkinovate Aesthetic Clinic is on the first floor of Juhu Supreme Shopping Centre, Gulmohar Road 9, JVPD, Juhu. The clinic is designed to provide a calm, professional environment for dermatology and aesthetic consultations.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-bronze pb-2 text-xs uppercase tracking-[0.16em] text-bronze">Visit Xkinovate <ArrowRight className="size-4"/></Link></div></div></section>

  <Section eyebrow="From the Xkinovate journal" title="Practical Insights for Healthier Skin & Hair" tone="muted"><div className="grid gap-px bg-border md:grid-cols-3">{articles.slice(0,3).map((a,i)=><Link key={a.slug} to="/journal/$slug" params={{slug:a.slug}} className="group bg-background"><img src={journalImages[i]} alt="Decorative beauty editorial portrait" width={1200} height={1504} loading="lazy" className="aspect-[16/10] w-full object-cover transition-opacity group-hover:opacity-85"/><div className="p-7"><h3 className="text-2xl leading-tight">{a.title}</h3><p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">{a.excerpt}</p></div></Link>)}</div><Link to="/journal" className="mt-9 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em]">Read the journal <ArrowRight className="size-4"/></Link></Section>
  <CTA/>
</>}