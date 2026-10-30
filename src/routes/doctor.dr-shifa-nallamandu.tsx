import { createFileRoute } from "@tanstack/react-router";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { getTeamDoctor } from "@/lib/doctors";
import { pageHead, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const doctor = getTeamDoctor("/doctor/dr-shifa-nallamandu");
const path = doctor.slug;
const title = "Dr. Shifa Nallamandu | Clinical Cosmetologist in Juhu, Mumbai";
const description =
  "Dr. Shifa Nallamandu is a BUMS graduate and clinical cosmetologist at Xkinovate, Juhu, with experience in skin analysis, chemical peels, medi-facials and laser treatments.";

export const Route = createFileRoute("/doctor/dr-shifa-nallamandu")({
  head: () =>
    pageHead(title, description, path, [
      breadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Doctors", item: "/doctors" },
        { name: doctor.name, item: path },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.specialty,
        worksFor: { "@type": "MedicalClinic", name: site.name },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: site.address.locality,
          postalCode: site.address.postalCode,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
      },
    ]),
  component: Page,
});

function Page() {
  return <DoctorProfile doctor={doctor} />;
}
