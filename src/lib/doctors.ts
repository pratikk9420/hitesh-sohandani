import navneel from "@/assets/dr-navneel-rai.jpg";
import manisha from "@/assets/dr-manisha-thakur.jpg";
import shifa from "@/assets/dr-shifa-nallamandu.jpg";

export type DoctorExperience = {
  role: string;
  detail: string;
  points: string[];
};

export type ClinicDoctor = {
  slug: "/doctor/dr-navneel-rai" | "/doctor/dr-manisha-thakur" | "/doctor/dr-shifa-nallamandu";
  name: string;
  role: string;
  credential: string;
  image: string;
  cardBlurb: string;
  summary: string[];
  qualifications: string[];
  experience: DoctorExperience[];
  interests: string[];
  credentials: string[];
  languages: string;
  specialty: string;
};

export const teamDoctors: ClinicDoctor[] = [
  {
    slug: "/doctor/dr-navneel-rai",
    name: "Dr. Navneel Rai",
    role: "Aesthetic Physician",
    credential: "MBBS, Diploma in Aesthetic Medicine",
    image: navneel,
    cardBlurb:
      "MBBS doctor with hospital experience in emergency and critical care, and training in aesthetic procedures including injectables, lasers and chemical peels.",
    summary: [
      "Dr. Navneel Rai is an aesthetic physician at Xkinovate. He is an MBBS graduate with more than five and a half years of clinical experience in emergency medicine, critical care, internal medicine and patient care, along with specialised training in aesthetic medicine.",
      "His aesthetic practice covers consultation and treatment planning based on the concern, skin type and goals. That work includes growth factor concentrate (GFC) therapy, botulinum toxin, dermal fillers, laser therapies, chemical peels, skin rejuvenation and anti-ageing procedures, as well as IV drips and wellness treatments for skin, hair, immunity and general health. He focuses on informed consent, procedure safety and post-procedure care.",
    ],
    qualifications: [
      "MBBS — Volgograd State Medical University, Russia (2018)",
      "Medical internship — Nanavati Max Superspeciality Hospital, Mumbai (December 2019 – December 2020)",
      "Diploma in Aesthetic Medicine — Aesthetic Theory by Dr. Nadeer Ahmed, Mumbai (2026)",
    ],
    experience: [
      {
        role: "Aesthetic Physician",
        detail: "Mumbai · 2026 – present",
        points: [
          "Aesthetic consultations and individualised treatment plans",
          "GFC therapy, botulinum toxin, dermal fillers, laser therapies and chemical peels",
          "Skin rejuvenation and anti-ageing procedures tailored to the patient",
          "IV drips and wellness treatments for skin, hair, immunity and overall health",
          "Informed consent, safety checks and post-procedure care",
        ],
      },
      {
        role: "ICU Registrar",
        detail: "Surya Hospitals, Mumbai · February 2024 – present",
        points: [
          "Care of critically ill patients in the ICU under intensivist guidance",
          "Patients on mechanical ventilation, inotropes and advanced life support",
          "Invasive procedures including central lines, arterial lines, intubation and chest drains",
          "Emergency codes, rapid response and coordination with multidisciplinary teams",
        ],
      },
      {
        role: "Attending Consultant, Emergency and Critical Care",
        detail: "Nanavati Max Superspeciality Hospital, Mumbai · 2020 – 2025",
        points: [
          "Medical emergencies and critically ill patients in emergency, wards and ICU",
          "Acute and chronic medical conditions, with invasive lines and ventilator management",
          "Care of adults, adolescents and older patients, including emergency duty cover",
        ],
      },
      {
        role: "Chief Medical Officer",
        detail: "Rane Hospital and Mumbai Heart Clinic, Mumbai · 2019 – 2020",
        points: [
          "Care of patients after myocardial infarction, angioplasty and CABG",
          "Consultations, treatment and recovery monitoring with multidisciplinary teams",
          "Medical leadership for community health initiatives and medical camps",
        ],
      },
      {
        role: "Medical Content Writer",
        detail: "PrepLadder, Delhi · August 2019 – December 2019",
        points: [
          "Research, writing and editing for patient education, medical marketing and healthcare publications",
        ],
      },
    ],
    interests: [
      "Aesthetic consultation",
      "GFC therapy",
      "Botulinum toxin",
      "Dermal fillers",
      "Laser and energy-based treatments",
      "Chemical peels and skin rejuvenation",
      "IV wellness treatments",
      "Emergency and critical care",
    ],
    credentials: [
      "ACLS and BLS certification",
      "COVID-19 Warrior Certification, State Medical Council of India",
      "Aesthetic and skin training workshops",
      "Doctor of the Month (Star of the Month) — Academic Achievement Award",
      "Best Team in Critical Care Unit for Patient Management and Care",
    ],
    languages: "English · Hindi · Marathi · Russian",
    specialty: "Aesthetic Medicine",
  },
  {
    slug: "/doctor/dr-manisha-thakur",
    name: "Dr. Manisha Thakur",
    role: "Aesthetic Physician",
    credential: "MBBS, Diploma in Aesthetic Medicine",
    image: manisha,
    cardBlurb:
      "MBBS doctor with resident medical officer experience in Mumbai hospitals, and aesthetic training in injectables, lasers, chemical peels and IV therapy.",
    summary: [
      "Dr. Manisha Thakur is an aesthetic physician at Xkinovate. She is an MBBS doctor with clinical experience in emergency medicine, internal medicine and inpatient care, and further training in aesthetic medicine.",
      "Her aesthetic work includes growth factor concentrate (GFC) therapy, botulinum toxin, dermal fillers, laser therapies and chemical peels, with treatment plans for skin rejuvenation, anti-ageing and IV wellness therapies for skin, hair and general health. She also counsels patients on aesthetic and preventive skin care.",
      "She founded The Vow Med Concierge, an on-site medical service for weddings and events. That work covers emergency care, IV hydration and recovery, medication support and guest wellness, including medical cover for two destination weddings.",
    ],
    qualifications: [
      "MBBS — Maharashtra University of Health Sciences",
      "Diploma in Aesthetic Medicine — Aesthetic Theory by Dr. Nadeer Ahmed, Mumbai (2026)",
    ],
    experience: [
      {
        role: "Aesthetic Physician",
        detail: "Mumbai · 2026 – present",
        points: [
          "GFC therapy, botulinum toxin, dermal fillers, laser therapies and chemical peels",
          "Skin rejuvenation and anti-ageing treatments",
          "IV drips and wellness therapies for skin, hair and overall health",
          "Personalised treatment plans, aftercare and preventive skin-care counselling",
        ],
      },
      {
        role: "Founder and Medical Director",
        detail: "The Vow Med Concierge, Mumbai · 2026 – present",
        points: [
          "On-site medical concierge for weddings and events",
          "Emergency care, IV hydration and recovery therapy, medication support and guest wellness",
          "Medical services managed for two weddings",
        ],
      },
      {
        role: "Resident Medical Officer",
        detail: "Surya Hospital, Chembur · September 2023 – present",
        points: [
          "Emergency, inpatient and outpatient care across departments",
          "Chief medical officer for health camps, including screening, vaccination and health education",
          "Minor procedures, wound care, suturing and bedside care",
          "Medical records, discharge planning and follow-up",
        ],
      },
      {
        role: "Resident Medical Officer",
        detail: "Fortis Hiranandani Hospital, Navi Mumbai · September 2021 – July 2023",
        points: [
          "Medical and surgical patients in inpatient, outpatient and emergency care",
          "Patient evaluation, treatment and follow-up in a high-volume tertiary hospital",
          "Assistance in procedures and support to senior consultants",
        ],
      },
      {
        role: "Duty Medical Officer",
        detail: "Outpatient, inpatient and emergency cover",
        points: [
          "Outpatient, inpatient and emergency care",
          "Assistance in COVID-19 care",
        ],
      },
      {
        role: "Medical Intern",
        detail: "March 2020 – May 2021",
        points: [
          "Outpatient and casualty work",
          "Emergency and ward care",
          "Assistance in minor and major procedures",
          "Participation in health surveys",
        ],
      },
    ],
    interests: [
      "Aesthetic injectables",
      "Laser and energy-based treatments",
      "Chemical peels and skin rejuvenation",
      "IV therapy and nutritional drips",
      "Preventive skin care",
      "Emergency and inpatient medicine",
    ],
    credentials: [
      "Certification in IV Therapy (IV drip therapy and nutritional medicine)",
      "ACLS and BLS certification",
      "COVID-19 Warrior Certification, State Medical Council of India",
      "Certificate of Training in Chemical Peels",
      "Aesthetic and skin training workshops",
      "Chief medical officer for multiple health camps",
    ],
    languages: "English · Hindi · Marathi",
    specialty: "Aesthetic Medicine",
  },
  {
    slug: "/doctor/dr-shifa-nallamandu",
    name: "Dr. Shifa Nallamandu",
    role: "Clinical Cosmetologist",
    credential: "BUMS, Fellowship in Facial Aesthetic and Clinical Cosmetology",
    image: shifa,
    cardBlurb:
      "BUMS graduate and clinical cosmetologist with hospital duty-doctor experience and hands-on work in skin analysis, peels, medi-facials and laser treatments.",
    summary: [
      "Dr. Shifa Shakeel Ahmed Nallamandu is a clinical cosmetologist at Xkinovate. She is a Bachelor of Unani Medicine and Surgery (BUMS) graduate with more than three years in clinical care and about one year in aesthetic medicine.",
      "Her aesthetic work includes skin analysis, consultation, chemical peels, medi-facials and laser treatments. She builds treatment plans around the individual skin concern, explains skincare routines and post-procedure care, and follows infection-control and patient-safety protocols.",
      "Before that aesthetic work she was a duty doctor in multi-speciality hospitals in Solapur and Vijayapura for three years, covering outpatient, inpatient and emergency care.",
    ],
    qualifications: [
      "BUMS — Rajiv Gandhi University of Health Sciences, Bengaluru",
      "Rotatory internship — District Hospital, Vijayapura, with rotations in general medicine, general surgery, ICU and casualty, obstetrics and gynaecology, paediatrics, orthopaedics, dermatology, ENT and ophthalmology",
      "Fellowship in Facial Aesthetic and Clinical Cosmetology",
    ],
    experience: [
      {
        role: "Clinical Cosmetologist and Aesthetic Practitioner",
        detail: "Pune · June 2025 – March 2026, and Solapur · April 2026 – July 2026",
        points: [
          "Skin analysis and aesthetic consultations",
          "Chemical peels, medi-facials and laser treatments",
          "Treatment records, follow-up and post-procedure counselling",
          "Infection control and patient safety protocols",
        ],
      },
      {
        role: "Duty Doctor",
        detail: "Multi-speciality hospitals, Solapur and Vijayapura · 3 years",
        points: [
          "Outpatient, inpatient and emergency ward care",
          "History, examination and clinical assessment",
          "Medical records, discharge summaries and progress notes",
          "Coordination with consultants and the wider clinical team",
        ],
      },
    ],
    interests: [
      "Skin analysis",
      "Chemical peels",
      "Medi-facials",
      "Laser treatments",
      "Acne management",
      "Pigmentation",
      "Anti-ageing and skin rejuvenation",
      "Patient counselling",
    ],
    credentials: [
      "Fellowship in Facial Aesthetic and Clinical Cosmetology",
      "Clinical rotations during internship included dermatology",
    ],
    languages: "English · Hindi · Marathi · Urdu",
    specialty: "Clinical Cosmetology",
  },
];

export function getTeamDoctor(slug: ClinicDoctor["slug"]) {
  const doctor = teamDoctors.find((item) => item.slug === slug);
  if (!doctor) throw new Error(`Unknown doctor: ${slug}`);
  return doctor;
}
