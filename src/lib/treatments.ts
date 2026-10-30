export type Faq = { q: string; a: string };

export type Treatment = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  cardBlurb: string;
  intro: string;
  approach: string;
  faqs: Faq[];
  related: string[];
};

const commonExpect =
  "Your appointment begins with a consultation and assessment. The clinician will discuss the concern, relevant history, suitable options and realistic expectations. If treatment is appropriate, you will receive guidance on the proposed plan and follow-up.";

const commonResults =
  "Results vary between individuals. Where genuine patient photographs are available and appropriate consent has been obtained, the website may display treatment journeys and follow-up images.";

export const expectCopy = commonExpect;
export const resultsCopy = commonResults;

export const treatments: Treatment[] = [
  {
    slug: "acne-treatment",
    name: "Acne Treatment",
    h1: "Acne Treatment",
    metaTitle: "Acne Treatment in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about acne treatment at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Clinical Dermatology",
    cardBlurb:
      "Address active acne and the appearance of post-acne marks with an individualised approach.",
    intro:
      "Acne is a common inflammatory skin condition that can affect teenagers and adults. At Xkinovate, the first step is understanding the type and severity of acne, associated factors and the patient's skin and treatment goals.",
    approach:
      "Acne treatment may involve skincare, topical or medical approaches and selected procedures depending on the individual assessment. The plan is adjusted according to response and tolerance.",
    related: ["acne-scars", "chemical-peels", "pigmentation"],
    faqs: [
      {
        q: "What type of acne do I have?",
        a: "Acne can include blackheads and whiteheads, inflammatory spots such as papules and pustules, or deeper nodules and cysts. A dermatologist assesses the type, severity, areas involved, scarring and other factors before recommending treatment.",
      },
      {
        q: "When should I see a dermatologist for acne?",
        a: "Consider a dermatology consultation if acne is persistent, painful, leaving marks or scars, affecting your confidence, or not improving with suitable skincare. Earlier assessment can also help when there are deeper or widespread lesions.",
      },
      {
        q: "Can acne treatment help reduce new breakouts?",
        a: "Yes. Depending on the type of acne, treatment can help reduce active inflammation and the formation of new lesions. The appropriate approach depends on the severity and cause, and improvement usually takes time.",
      },
      {
        q: "How long does acne treatment take?",
        a: "Acne often needs ongoing treatment rather than a single session. The time to improvement varies with severity, treatment response and consistency with the plan, and your dermatologist can review progress at follow-up.",
      },
      {
        q: "Can acne treatment be combined with scar treatment?",
        a: "Often, but active acne is usually assessed and controlled first when appropriate. Once the skin is suitable, scar-focused treatments may be added according to the type and depth of scarring.",
      },
    ],
  },
  {
    slug: "acne-scars",
    name: "Acne Scars",
    h1: "Acne Scars",
    metaTitle: "Acne Scars in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about acne scars at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Clinical Dermatology",
    cardBlurb:
      "Assess the type and depth of post-acne scarring before choosing an appropriate plan.",
    intro:
      "Acne scars can remain after active acne has settled and may appear as changes in texture, depressions or persistent marks. The right approach depends on the type and depth of the scar and whether active acne is still present.",
    approach:
      "A dermatologist may consider a combination of topical care and procedures when appropriate. Treatment is individualised and improvement generally requires time and multiple steps.",
    related: ["acne-treatment", "skin-rejuvenation", "chemical-peels"],
    faqs: [
      {
        q: "What are the different types of acne scars?",
        a: "Acne scars are commonly described as depressed or atrophic scars, including ice-pick, boxcar and rolling scars, or raised scars in some patients. Persistent dark or red marks after acne are different from true scars and are assessed separately.",
      },
      {
        q: "Can acne scars be completely removed?",
        a: "Acne-scar treatment aims to make scars less noticeable and improve skin texture, but complete removal cannot be guaranteed. The likely degree of improvement depends on the scar type, depth, skin characteristics and treatment plan.",
      },
      {
        q: "When should active acne be controlled first?",
        a: "If new inflammatory acne is continuing, controlling active disease is often an important first step before starting some scar procedures. The timing is decided after examination because the right sequence varies between patients.",
      },
      {
        q: "How many sessions might be needed?",
        a: "There is no single number that suits everyone. The number of sessions depends on scar type, depth, treatment selected and how your skin responds. Your dermatologist can outline a likely course after assessment.",
      },
      {
        q: "What affects the outcome?",
        a: "Outcomes can be influenced by scar type and depth, skin type, active acne, treatment choice, healing response, sun exposure, aftercare and consistency with follow-up. Improvement is generally gradual rather than immediate.",
      },
    ],
  },
  {
    slug: "pigmentation",
    name: "Pigmentation",
    h1: "Pigmentation",
    metaTitle: "Pigmentation in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about pigmentation at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Clinical Dermatology",
    cardBlurb:
      "Identify the cause of uneven pigmentation before selecting treatment and skincare.",
    intro:
      "Pigmentation can have many causes, including post-inflammatory changes, sun exposure and other skin conditions. Correct identification of the cause is important before selecting treatment.",
    approach:
      "Xkinovate focuses on assessment, appropriate skincare and clinically suitable procedures when indicated. The goal is gradual, responsible improvement rather than aggressive treatment without diagnosis.",
    related: ["melasma", "chemical-peels", "skin-rejuvenation"],
    faqs: [
      {
        q: "What causes facial pigmentation?",
        a: "Facial pigmentation can have several causes, including sun exposure, post-inflammatory changes after acne or irritation, melasma and other skin conditions. Correct diagnosis is important because treatment differs according to the cause.",
      },
      {
        q: "Is pigmentation treatment suitable for every skin type?",
        a: "Many pigmentation concerns can be managed across different skin types, but treatment must be selected carefully. In darker skin tones, avoiding unnecessary irritation and tailoring procedures can be particularly important because post-inflammatory pigmentation may occur.",
      },
      {
        q: "How important is sun protection?",
        a: "Sun protection is an important part of managing many pigmentation concerns. Regular broad-spectrum sunscreen use and sensible sun-avoidance measures can help reduce ongoing pigment stimulation and support maintenance.",
      },
      {
        q: "Can pigmentation return?",
        a: "Yes. Pigmentation can recur when the underlying trigger continues, particularly with sun exposure or conditions such as melasma. Long-term maintenance and management of the underlying cause may therefore be needed.",
      },
      {
        q: "When should pigmentation be evaluated by a dermatologist?",
        a: "A dermatologist should assess persistent, worsening, recurrent or unexplained pigmentation, especially when the appearance is changing or when over-the-counter products have not helped. Diagnosis should come before aggressive treatment.",
      },
    ],
  },
  {
    slug: "melasma",
    name: "Melasma",
    h1: "Melasma",
    metaTitle: "Melasma in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about melasma at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Clinical Dermatology",
    cardBlurb:
      "Long-term, maintenance-focused management of patchy facial pigmentation.",
    intro:
      "Melasma is a common condition involving patches of increased pigmentation, often on the face. It can be influenced by sunlight, hormones and other factors.",
    approach:
      "Management is usually long-term and may involve sun protection, skincare and selected treatments based on the individual's skin and condition. Recurrence can occur, so maintenance matters.",
    related: ["pigmentation", "chemical-peels", "skin-rejuvenation"],
    faqs: [
      {
        q: "Is melasma permanent?",
        a: "Melasma is usually a chronic, relapsing condition rather than something that can be permanently cured with one treatment. It can often be improved and controlled, but maintenance and trigger management are important.",
      },
      {
        q: "Can melasma come back after treatment?",
        a: "Yes. Melasma can recur even after improvement. Sun and visible-light exposure, hormonal influences and other individual triggers can contribute, so ongoing maintenance is often part of management.",
      },
      {
        q: "Does sun exposure affect melasma?",
        a: "Yes. Ultraviolet exposure can worsen melasma and contribute to recurrence. Consistent sun protection is therefore an important part of a melasma-management plan.",
      },
      {
        q: "How is melasma diagnosed?",
        a: "Diagnosis is usually based on the pattern and appearance of the pigmentation and the patient's history. A dermatologist may use close examination and, when useful, additional assessment to distinguish melasma from other causes of facial pigmentation.",
      },
      {
        q: "What can I do to maintain improvement?",
        a: "Follow the recommended skincare and sun-protection plan, avoid unnecessary irritation and attend follow-up when advised. Because melasma can recur, maintenance is often as important as the initial treatment.",
      },
    ],
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    h1: "Chemical Peels",
    metaTitle: "Chemical Peels in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about chemical peels at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Skin Rejuvenation",
    cardBlurb:
      "Professionally selected exfoliation at a controlled depth, based on skin needs.",
    intro:
      "Chemical peels use selected chemical agents to exfoliate the skin at a controlled depth. The formulation and strength should be chosen according to the skin concern and clinical suitability.",
    approach:
      "Peels may be considered for selected concerns such as uneven tone, texture or acne-related issues. The expected peeling, recovery and number of sessions depend on the formulation and individual response.",
    related: ["acne-treatment", "pigmentation", "skin-rejuvenation"],
    faqs: [
      {
        q: "Are chemical peels safe for Indian skin?",
        a: "Chemical peels can be used in Indian skin when the peel, concentration, preparation and aftercare are appropriately selected. Because some skin types have a higher risk of post-inflammatory pigmentation, professional assessment and conservative treatment selection are important.",
      },
      {
        q: "How much peeling should I expect?",
        a: "Peeling varies with the type and strength of the peel and your individual skin response. Some peels cause little visible peeling, while others may produce more noticeable dryness or shedding. Your clinician will explain what to expect for the selected peel.",
      },
      {
        q: "How often can a peel be done?",
        a: "The interval depends on the type of peel, your skin condition, the strength used and how your skin has recovered. A dermatologist should determine the appropriate schedule rather than following a fixed interval for everyone.",
      },
      {
        q: "What should I avoid after a peel?",
        a: "Avoid unnecessary sun exposure, picking or peeling the skin, and irritating products until the skin has recovered. Follow the specific aftercare instructions provided by the clinic, including recommended sun protection and skincare.",
      },
      {
        q: "Who should not have a chemical peel?",
        a: "Suitability depends on the individual's skin and medical history. Active skin infections, significant irritation or certain medications and skin conditions may make a peel unsuitable or require postponement. A consultation is needed before treatment.",
      },
    ],
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    h1: "Skin Rejuvenation",
    metaTitle: "Skin Rejuvenation in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about skin rejuvenation at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Skin Rejuvenation",
    cardBlurb:
      "Support healthier-looking skin quality with a plan suited to your concerns.",
    intro:
      "Skin rejuvenation is a broad term covering treatments intended to improve selected aspects of skin quality such as texture, tone, hydration or signs of photoageing.",
    approach:
      "The appropriate approach depends on the skin concern and may involve skincare, peels, microneedling or other clinically suitable procedures available at the clinic.",
    related: ["chemical-peels", "pigmentation", "acne-scars"],
    faqs: [
      {
        q: "What does skin rejuvenation mean?",
        a: "Skin rejuvenation is a broad term for treatments intended to improve selected aspects of skin quality, such as texture, tone, hydration or signs of photoageing. The appropriate approach depends on the actual concern being treated.",
      },
      {
        q: "Which treatment is right for me?",
        a: "There is no single rejuvenation treatment that is right for everyone. Your dermatologist can assess your skin, concerns, medical history and goals before recommending suitable options and explaining their expected benefits and limitations.",
      },
      {
        q: "How many sessions might I need?",
        a: "The number of sessions depends on the treatment selected, the concern being addressed and your response. Some approaches may involve a single treatment while others are planned as a series or require maintenance.",
      },
      {
        q: "Can rejuvenation treatments be combined?",
        a: "Some treatments can be combined or sequenced when clinically appropriate, while others should be separated to allow the skin to recover. The combination and timing should be decided after assessment rather than using a fixed package for everyone.",
      },
      {
        q: "How important is daily skincare?",
        a: "Daily skincare can support the results of professional treatment and help maintain skin health. A simple, consistent routine suited to your skin type is generally more useful than using many potentially irritating products.",
      },
    ],
  },
  {
    slug: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    h1: "Laser Hair Reduction",
    metaTitle: "Laser Hair Reduction in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about laser hair reduction at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Laser & Hair Reduction",
    cardBlurb:
      "A dermatologist-guided approach to reducing unwanted hair over a course of treatments.",
    intro:
      "Laser hair reduction uses light energy to target hair follicles and reduce unwanted hair over a course of treatments. Results vary according to hair colour, thickness, skin characteristics and hormonal factors.",
    approach:
      "Treatment parameters should be selected by an appropriately trained professional. A consultation helps determine suitability, expected treatment course and aftercare.",
    related: ["skin-rejuvenation", "pigmentation", "hair-loss"],
    faqs: [
      {
        q: "Is laser hair reduction permanent?",
        a: "Laser hair reduction is intended to produce long-term reduction in hair growth, but it should not be described as guaranteed permanent hair removal. Some regrowth can occur and maintenance treatments may be needed.",
      },
      {
        q: "How many sessions are usually needed?",
        a: "The number of sessions varies with hair colour, thickness, body area, skin type, hormonal factors and the treatment plan. Multiple sessions are commonly needed because hair responds best at particular growth phases.",
      },
      {
        q: "Is laser hair reduction painful?",
        a: "Comfort varies by person and treatment area. Many patients describe the sensation as brief warmth or snapping, but some areas can feel more sensitive. The clinician can discuss comfort measures and appropriate settings.",
      },
      {
        q: "Can it be performed on darker skin tones?",
        a: "Laser hair reduction can be considered for darker skin tones when an appropriate device and treatment settings are selected. Careful assessment and conservative parameter selection are important because darker skin has a greater risk of pigment changes after some laser treatments.",
      },
      {
        q: "What should I do before and after treatment?",
        a: "Follow the clinic's preparation and aftercare instructions. Depending on the treatment plan, this may include avoiding waxing or plucking for a period before treatment, protecting the skin from sun exposure, and avoiding unnecessary irritation immediately afterwards.",
      },
    ],
  },
  {
    slug: "botulinum-toxin",
    name: "Botulinum Toxin",
    h1: "Botulinum Toxin",
    metaTitle: "Botulinum Toxin in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about botulinum toxin at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Aesthetic Dermatology",
    cardBlurb:
      "Injectable treatment considered after consultation, with attention to proportion and safety.",
    intro:
      "Botulinum toxin is an injectable treatment used for selected facial expression lines and other medical or aesthetic indications. Suitability depends on anatomy, goals and clinical assessment.",
    approach:
      "A consultation should cover the intended treatment area, expected effect, limitations, potential risks and aftercare before treatment is performed.",
    related: ["dermal-fillers", "skin-rejuvenation", "chemical-peels"],
    faqs: [
      {
        q: "How does botulinum toxin work?",
        a: "Botulinum toxin temporarily reduces activity in selected muscles. In aesthetic dermatology it may be used to soften certain dynamic facial lines by reducing repeated muscle contraction. Treatment should be tailored to the individual's anatomy and goals.",
      },
      {
        q: "How long do results usually last?",
        a: "Results are temporary and vary between individuals. The effect commonly lasts for several months, after which muscle activity gradually returns. Your clinician can advise on follow-up based on the treatment area and response.",
      },
      {
        q: "Is everyone a candidate?",
        a: "No. Suitability depends on your medical history, the treatment area, medications, expectations and the specific concern being treated. A consultation is required to determine whether it is appropriate.",
      },
      {
        q: "What should I expect after treatment?",
        a: "Temporary swelling, redness, tenderness or bruising can occur after injections. The treated area may take time to settle, and you will receive specific aftercare instructions. Seek prompt medical attention for severe or unusual symptoms.",
      },
      {
        q: "Are results intended to look natural?",
        a: "The aim can be a balanced result that respects your facial movement and individual anatomy. The amount and placement of treatment should be determined during consultation rather than using a one-size-fits-all approach.",
      },
    ],
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    h1: "Dermal Fillers",
    metaTitle: "Dermal Fillers in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about dermal fillers at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Aesthetic Dermatology",
    cardBlurb:
      "Conservative, anatomy-led planning for selected volume-related concerns.",
    intro:
      "Dermal fillers are injectable products used for selected aesthetic indications such as restoring or enhancing volume. Different products and techniques are used for different areas.",
    approach:
      "Treatment should be planned conservatively and based on facial anatomy, goals and medical suitability. The aim is appropriate proportion rather than a one-size-fits-all result.",
    related: ["botulinum-toxin", "skin-rejuvenation", "acne-scars"],
    faqs: [
      {
        q: "Where can dermal fillers be used?",
        a: "Depending on the product and clinical indication, dermal fillers may be used to restore or enhance selected areas such as the lips, cheeks, chin or other facial contours. The appropriate area and product depend on an individual assessment.",
      },
      {
        q: "How long do fillers last?",
        a: "Longevity varies with the filler material, treatment area, amount used, metabolism and individual factors. Your clinician can explain the expected duration for the specific product and area being considered.",
      },
      {
        q: "Are fillers reversible?",
        a: "Reversibility depends on the filler used. Many hyaluronic-acid fillers can be reduced or dissolved with an appropriate enzyme when clinically indicated, but not every filler is reversible in the same way. Product selection should therefore be discussed carefully before treatment.",
      },
      {
        q: "What should I expect after treatment?",
        a: "Temporary swelling, redness, tenderness or bruising can occur after filler injections. The treated area may take time to settle, and you will receive specific aftercare instructions. Seek prompt medical attention for severe or unusual symptoms.",
      },
      {
        q: "Who should avoid fillers?",
        a: "Fillers are not suitable for everyone. Suitability may be affected by active infection or inflammation at the treatment site, certain allergies or medical conditions, some medications and other individual factors. A detailed consultation is needed before treatment.",
      },
    ],
  },
  {
    slug: "hair-loss",
    name: "Hair Fall & Hair Loss",
    h1: "Hair Fall & Hair Loss",
    metaTitle: "Hair Fall & Hair Loss in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about hair fall & hair loss at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Hair & Scalp",
    cardBlurb:
      "Diagnosis first: assessment of history, scalp and hair pattern before treatment.",
    intro:
      "Hair fall can have many causes, from temporary shedding to nutritional, hormonal, inflammatory or pattern-related conditions. Correct diagnosis is more important than choosing a procedure first.",
    approach:
      "A dermatologist may assess the history, scalp and hair pattern and recommend investigations or treatment where appropriate. Procedures such as PRP or GFC may be considered for selected patients.",
    related: ["prp-hair", "gfc-hair", "skin-rejuvenation"],
    faqs: [
      {
        q: "When is hair fall considered abnormal?",
        a: "Some daily hair shedding is normal, but persistent, sudden, excessive or visibly progressive shedding deserves assessment. Hair loss accompanied by scalp symptoms or patchy areas should also be evaluated by a dermatologist.",
      },
      {
        q: "What causes hair loss?",
        a: "Hair loss can have many causes, including genetic or pattern-related hair loss, temporary shedding after illness or stress, nutritional or hormonal factors, inflammatory scalp conditions and other medical causes. Identifying the cause is important before choosing treatment.",
      },
      {
        q: "Should I get blood tests?",
        a: "Blood tests are not necessary for every person with hair fall. A dermatologist may recommend selected investigations when the history or examination suggests a nutritional, hormonal, systemic or other underlying cause.",
      },
      {
        q: "Can PRP help?",
        a: "PRP may be considered for selected types of hair loss, but it is not suitable for every cause and response varies. It should be considered after a diagnosis and discussion of other appropriate treatment options.",
      },
      {
        q: "How long does hair treatment take?",
        a: "Hair treatment usually requires patience because hair grows slowly and different causes respond at different rates. The timeframe depends on the diagnosis and treatment plan, and progress is normally assessed over follow-up visits.",
      },
    ],
  },
  {
    slug: "prp-hair",
    name: "PRP for Hair",
    h1: "PRP for Hair",
    metaTitle: "PRP for Hair in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about PRP for hair at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Hair & Scalp",
    cardBlurb:
      "Considered for selected hair-loss conditions after clinical assessment.",
    intro:
      "Platelet-rich plasma (PRP) uses a patient's own blood-derived platelet concentrate and may be considered as part of a treatment plan for selected hair-loss conditions.",
    approach:
      "Suitability depends on the diagnosis, hair-loss pattern and overall health. PRP is not appropriate for every cause of hair loss and should follow a clinical assessment.",
    related: ["hair-loss", "gfc-hair", "skin-rejuvenation"],
    faqs: [
      {
        q: "What is PRP for hair?",
        a: "PRP for hair uses a platelet-rich preparation made from the patient's own blood. It may be used as part of a treatment plan for selected hair-loss conditions after a clinical assessment.",
      },
      {
        q: "How many sessions may be required?",
        a: "The number of PRP sessions varies with the diagnosis, treatment protocol and individual response. Your dermatologist can recommend a schedule after assessing the pattern and cause of hair loss.",
      },
      {
        q: "When can results be assessed?",
        a: "Hair growth changes take time, so results are not usually judged immediately after treatment. Follow-up is generally planned over several months, with the timing adjusted to the individual treatment plan.",
      },
      {
        q: "Is PRP suitable for everyone?",
        a: "No. Suitability depends on the cause of hair loss, medical history, medications, scalp condition and other individual factors. A dermatologist should assess the patient before PRP is considered.",
      },
      {
        q: "Can PRP be combined with other treatment?",
        a: "PRP can sometimes be included alongside other hair-loss treatments when clinically appropriate. The combination should be based on the diagnosis and overall treatment plan rather than using multiple procedures automatically.",
      },
    ],
  },
  {
    slug: "gfc-hair",
    name: "GFC for Hair",
    h1: "GFC for Hair",
    metaTitle: "GFC for Hair in Juhu, Mumbai | Xkinovate",
    metaDescription:
      "Learn about GFC for hair at Xkinovate in Juhu, Mumbai. Treatment is selected after individual dermatological assessment and personalised planning.",
    category: "Hair & Scalp",
    cardBlurb:
      "Growth factor concentrate, considered for selected hair concerns after assessment.",
    intro:
      "Growth factor concentrate (GFC) refers to a procedure using growth-factor-rich material prepared from the patient's own blood. It may be considered for selected hair concerns after assessment.",
    approach:
      "The treatment plan depends on the diagnosis and individual factors. Results vary and should not be presented as guaranteed.",
    related: ["hair-loss", "prp-hair", "skin-rejuvenation"],
    faqs: [
      {
        q: "What is GFC for hair?",
        a: "GFC, or growth factor concentrate, refers to a procedure using growth-factor-rich material prepared from the patient's own blood. It may be considered for selected hair concerns after assessment.",
      },
      {
        q: "How is GFC different from PRP?",
        a: "Both approaches use material derived from the patient's own blood, but the preparation and composition are different. The choice depends on the clinical indication, treatment protocol and individual factors, and should be discussed with the dermatologist.",
      },
      {
        q: "Who may be suitable?",
        a: "Suitability depends on the type and cause of hair loss, scalp findings, medical history and treatment goals. A consultation is needed before deciding whether GFC is appropriate.",
      },
      {
        q: "How many sessions are usually considered?",
        a: "There is no fixed number of sessions for everyone. The treatment schedule depends on the diagnosis, protocol and response, and should be determined after clinical assessment.",
      },
      {
        q: "When should results be reviewed?",
        a: "Hair growth changes are gradual, so follow-up is usually planned over time rather than immediately after a session. Your dermatologist can set the review schedule according to the treatment plan and individual response.",
      },
    ],
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export const treatmentCategories: { name: string; items: string[] }[] = [
  {
    name: "Clinical Dermatology",
    items: [
      "Acne",
      "Acne scars",
      "Pigmentation",
      "Melasma",
      "Uneven skin tone",
      "Common skin concerns",
      "Skin health and maintenance",
    ],
  },
  {
    name: "Skin Rejuvenation",
    items: [
      "Chemical peels",
      "Medical facial treatments",
      "Microneedling where clinically appropriate",
      "Skin rejuvenation plans",
      "Texture and tone-focused care",
    ],
  },
  {
    name: "Laser & Hair Reduction",
    items: [
      "Laser hair reduction",
      "Laser-based skin treatments where clinically appropriate",
    ],
  },
  {
    name: "Aesthetic Dermatology",
    items: [
      "Botulinum toxin",
      "Dermal fillers",
      "Selected injectable aesthetic treatments",
      "Aesthetic consultation and treatment planning",
    ],
  },
  {
    name: "Hair & Scalp",
    items: [
      "Hair fall assessment",
      "Hair loss evaluation",
      "PRP where clinically appropriate",
      "GFC where clinically appropriate",
      "Scalp-focused dermatology care",
    ],
  },
];
