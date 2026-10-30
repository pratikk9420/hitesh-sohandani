import { Link } from "@tanstack/react-router";
import { Breadcrumbs, CTA, PageIntro, Section } from "@/components/site/PageElements";
import { teamDoctors, type ClinicDoctor } from "@/lib/doctors";

export function DoctorProfile({ doctor }: { doctor: ClinicDoctor }) {
  const others = teamDoctors
    .filter((item) => item.slug !== doctor.slug)
    .map((item) => ({
      name: item.name,
      role: item.role,
      to: item.slug,
      image: item.image,
    }));

  return (
    <>
      <Breadcrumbs items={[{ label: "Doctors", to: "/doctors" }, { label: doctor.name }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
        <img
          src={doctor.image}
          alt={doctor.name}
          width={800}
          height={1000}
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <PageIntro eyebrow="Clinical team" title={doctor.name}>
          <p>{doctor.credential}</p>
          <p className="mt-3 text-base uppercase tracking-[0.16em] text-bronze">{doctor.role}</p>
        </PageIntro>
      </section>
      <Section>
        <div className="prose-clinic max-w-3xl space-y-4">
          {doctor.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
      <Section eyebrow="Qualifications & experience" title="Training and clinical work" tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-2xl">Qualifications</h3>
            <ul className="mt-5 space-y-3 leading-7 text-muted-foreground">
              {doctor.qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-10 text-2xl">Languages</h3>
            <p className="mt-5 leading-7 text-muted-foreground">{doctor.languages}</p>
          </div>
          <div className="space-y-8">
            {doctor.experience.map((job) => (
              <div key={`${job.role}-${job.detail}`}>
                <h3 className="text-2xl">{job.role}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-bronze">{job.detail}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section eyebrow="Clinical interests" title="Areas of practice">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {doctor.interests.map((item) => (
            <li className="border-b border-border py-4" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="Further credentials" title="Certificates and recognition" tone="ink">
        <ul className="max-w-3xl space-y-3 leading-7 text-ink-foreground/75">
          {doctor.credentials.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="The clinic team" title="Other doctors">
        <div className="grid gap-6 sm:grid-cols-2">
          {others.map((person) => (
            <Link key={person.to} to={person.to} className="group block">
              <img
                src={person.image}
                alt={person.name}
                width={640}
                height={800}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-bronze">{person.role}</p>
              <h3 className="mt-2 text-2xl group-hover:text-bronze">{person.name}</h3>
            </Link>
          ))}
        </div>
      </Section>
      <CTA
        title={`Discuss your concern with the Xkinovate team.`}
        body={`${doctor.name} consults at Xkinovate in Juhu. Book a consultation to talk through your skin concern and which options may be appropriate.`}
      />
    </>
  );
}
