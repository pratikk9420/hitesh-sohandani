import { createFileRoute } from "@tanstack/react-router";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { getTeamDoctor } from "@/lib/doctors";
import { pageHead, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const doctor = getTeamDoctor("/doctor/dr-navneel-rai");
const path = doctor.slug;
const title = "Dr. Navneel Rai | Aesthetic Physician in Juhu, Mumbai";
const description =
  "Dr. Navneel Rai is an MBBS aesthetic physician at Xkinovate, Juhu, with experience in emergency and critical care and training in injectables, lasers, chemical peels and skin rejuvenation.";

export const Route = createFileRoute("/doctor/dr-navneel-rai")({
  head: () =>
    pageHead(title, description, path, [
      breadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Doctors", item: "/doctors" },
        { name: doctor.name, item: path },
      ]),
      physicianSchema(doctor.name, doctor.specialty),
    ]),
  component: Page,
});

function Page() {
  return <DoctorProfile doctor={doctor} />;
}

function physicianSchema(name: string, medicalSpecialty: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    medicalSpecialty,
    worksFor: { "@type": "MedicalClinic", name: site.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
  };
}
