import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, CTA, PageIntro, Section } from "@/components/site/PageElements";
import { teamDoctors } from "@/lib/doctors";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Doctors at Xkinovate | Aesthetic Clinic in Juhu";
const description =
  "Meet the Xkinovate clinical team in Juhu, Mumbai: aesthetic physicians Dr. Navneel Rai and Dr. Manisha Thakur, and clinical cosmetologist Dr. Shifa Nallamandu.";

export const Route = createFileRoute("/doctors")({
  head: () =>
    pageHead(title, description, "/doctors", [
      breadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Doctors", item: "/doctors" },
      ]),
    ]),
  component: Page,
});

function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Doctors" }]} />
      <PageIntro eyebrow="Clinical team" title="Doctors at Xkinovate">
        <p>
          Consultations at the Juhu clinic are with Dr. Navneel Rai, Dr. Manisha Thakur and Dr. Shifa
          Nallamandu. Each profile is drawn from that clinician’s training and experience.
        </p>
      </PageIntro>
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {teamDoctors.map((doctor) => (
            <Link key={doctor.slug} to={doctor.slug} className="group block">
              <img
                src={doctor.image}
                alt={doctor.name}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-bronze">{doctor.role}</p>
              <h2 className="mt-2 text-3xl">{doctor.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.1em] text-muted-foreground">{doctor.credential}</p>
              <p className="mt-4 leading-7 text-muted-foreground">{doctor.cardBlurb}</p>
              <span className="mt-5 inline-block border-b border-foreground pb-1 text-xs uppercase tracking-[0.16em] group-hover:border-bronze group-hover:text-bronze">
                View profile
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTA title="Book a consultation with the Xkinovate team." />
    </>
  );
}
