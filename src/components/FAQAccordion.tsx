import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: 'What is a senior advocate?',
    answer: (
      <div className="space-y-3">
        <p>A senior advocate is a trusted professional who helps older adults and their families navigate aging-related challenges. This can include assistance with medical appointments, financial organization, household support, care coordination, and overall advocacy to ensure the senior's needs and wishes are respected.</p>
        <p>At Supporting Our Seniors, our role is to provide clarity, guidance, and peace of mind — acting as an extra layer of support for both seniors and their families.</p>
      </div>
    ),
  },
  {
    question: 'How can a senior advocate help my family?',
    answer: (
      <div className="space-y-3">
        <p>A senior advocate helps reduce stress by managing details that often become overwhelming. We help families stay organized, informed, and proactive rather than reactive. This may include:</p>
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>Attending medical appointments, advocating for the client and when applicable, reporting back to loved ones</li>
          <li>Helping organize finances and paperwork</li>
          <li>Coordinating care and services</li>
          <li>Advocating for the senior's best interests</li>
          <li>Supporting caregivers through complex decisions</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Do you replace an attorney, financial advisor, or healthcare provider?',
    answer: (
      <div className="space-y-3">
        <p>No. We do not replace legal, financial, or medical professionals. Instead, we work alongside them to ensure communication is clear, responsibilities are coordinated, and nothing is overlooked.</p>
        <p>Many families find that having a senior advocate improves collaboration between professionals, reduces confusion during critical moments, and allows family to be family.</p>
      </div>
    ),
  },
  {
    question: 'What types of seniors do you work with?',
    answer: (
      <div className="space-y-3">
        <p>We work with seniors at many different stages of aging, including those who:</p>
        <ul className="list-disc list-outside ml-5 space-y-1.5">
          <li>Want to age safely and comfortably at home</li>
          <li>Are managing chronic health conditions</li>
          <li>Are experiencing memory or cognitive changes</li>
          <li>Need help organizing finances or household responsibilities</li>
          <li>Require advocacy due to complex family or care situations</li>
        </ul>
        <p>Support can be short-term, long-term, or evolving as needs change.</p>
      </div>
    ),
  },
  {
    question: "Do you help clients with Alzheimer's, Dementia or memory loss?",
    answer: (
      <div className="space-y-3">
        <p>Yes. We are experienced in supporting seniors with dementia and cognitive decline. As Certified Dementia Practitioners — and having personal experience with loved ones affected by memory loss — we approach every situation with patience, empathy, and deep understanding.</p>
        <p>We also provide guidance and support to families and caregivers as they navigate the emotional and practical challenges that memory loss can bring.</p>
      </div>
    ),
  },
  {
    question: 'What is a Certified Dementia Practitioner (CDP)?',
    answer: (
      <p>A Certified Dementia Practitioner (CDP) is a professional who has completed specialized training in Alzheimer's and dementia care. This certification demonstrates a commitment to high standards in dementia education and person-centered care. Ongoing continuing education is required to maintain certification, ensuring current knowledge and best practices in dementia-related support.</p>
    ),
  },
  {
    question: 'What is the difference between a senior advocate and a caregiver?',
    answer: (
      <div className="space-y-3">
        <p>A caregiver typically provides hands-on personal care, such as bathing, dressing, or meal preparation. A senior advocate focuses on coordination, oversight, organization, and advocacy.</p>
        <p>Our role is to ensure that care plans are appropriate, services are coordinated, and the senior's voice is heard — often working in partnership with caregivers and home care agencies.</p>
      </div>
    ),
  },
  {
    question: 'Do you only work with seniors, or do you support family caregivers too?',
    answer: (
      <div className="space-y-3">
        <p>We support both seniors and their family caregivers. Caregiving can be emotionally and physically demanding, and many caregivers feel overwhelmed or unsure of next steps.</p>
        <p>Our services are designed to reduce family caregiver burnout by offering guidance, problem-solving, and an experienced advocate who can help shoulder the responsibility.</p>
      </div>
    ),
  },
  {
    question: 'How does a Senior Advocate / Geriatric Care Manager help in real life?',
    answer: (
      <div className="space-y-3">
        <p>A Senior Advocate or Geriatric Care Manager provides hands-on support, experienced knowledge, and proactive action in both medical and home settings. We help families understand available options, identify appropriate care providers, and create strategic plans for the future. This may include coordinating specialist appointments, arranging transportation, organizing medical information, and managing communication between providers.</p>
        <p>The healthcare system can be overwhelming and emotionally taxing. By leading coordination and communication, we allow families to focus on what matters most — spending quality time with their loved one — while receiving clear guidance, recommendations, and next steps.</p>
      </div>
    ),
  },
  {
    question: 'Do you assist in Medicaid Applications?',
    answer: (
      <div className="space-y-3">
        <p>Yes, We provide skilled, hands-on support with Medicaid applications and eligibility navigation. Our assistance is tailored to each client's unique financial, medical, and family circumstances, ensuring the process is handled accurately, with clarity and confidence.</p>
      </div>
    ),
  },
  {
    question: 'Is every situation handled the same way?',
    answer: (
      <div className="space-y-3">
        <p>No. There are no cookie-cutter solutions when it comes to senior care.</p>
        <p>Every situation is approached individually and thoughtfully. We tailor our services creatively and strategically to ensure the goals, values, and best interests of the senior and family are met.</p>
      </div>
    ),
  },
  {
    question: 'Can you help with conservatorship situations?',
    answer: (
      <div className="space-y-3">
        <p>Yes. Supporting Our Seniors provides experienced, court-informed Conservator services and support for families navigating Probate Court matters. We may serve directly as Conservator or assist a family member in that role.</p>
        <p>Our services include management of court filings and compliance, financial oversight, record organization, day-to-day coordination, and communication among family members and care providers. We approach each case with compassion, accountability, and a clear commitment to protecting the dignity and best interests of the individual.</p>
      </div>
    ),
  },
  {
    question: 'What is a Conservator?',
    answer: (
      <div className="space-y-3">
        <p>A <strong>Conservator of the Person</strong> is appointed by the Connecticut Probate Court to supervise the personal affairs of an individual who is unable to meet essential needs such as food, clothing, shelter, healthcare, and safety.</p>
        <p>A <strong>Conservator of the Estate</strong> is appointed to oversee the financial affairs of an individual who is unable to manage assets, income, or public assistance benefits.</p>
      </div>
    ),
  },
  {
    question: 'Why do people have conservatorships?',
    answer: (
      <div className="space-y-3">
        <p>Conservatorships allow a responsible individual to assume legal oversight when an adult can no longer safely manage personal or financial decisions. Families often pursue conservatorship to address increasing medical, financial, or mental health needs — and often when a Power of Attorney does not exist and is no longer a viable option.</p>
        <p>Supporting Our Seniors has experience with Conservatorship of the Person and Estate, including voluntary, involuntary, and contested involuntary conservatorships. Tamath is also a vetted and approved Regulation 16 Conservator by the State of Connecticut.</p>
      </div>
    ),
  },
  {
    question: 'Can you help families considering conservatorship?',
    answer: (
      <div className="space-y-3">
        <p>Yes. If you are considering conservatorship for a loved one, we help families explore all available options and understand the implications before moving forward.</p>
        <p>Our role is to guide and support families in making informed decisions that are in the best interest of the senior and appropriate for the specific situation.</p>
      </div>
    ),
  },
  {
    question: 'What is a Daily Money Manager?',
    answer: (
      <p>A Daily Money Manager assists with day-to-day financial tasks such as reviewing mail, organizing bills, and ensuring bills are paid accurately and on time. Daily money management services are commonly used by seniors, caregivers, and individuals who want added oversight, accuracy, and peace of mind when managing financial responsibilities.</p>
    ),
  },
  {
    question: 'How does the process work?',
    answer: (
      <div className="space-y-3">
        <p>We begin with an initial consultation to understand your concerns, goals, and the senior's unique situation. Following the consultation, Supporting Our Seniors provides a proposal and draft Service Agreement that serves as a starting point for a final agreement tailored to your family's needs.</p>
        <p>Once services are retained, a Certificate of Insurance endorsed to the client is provided. From there, support may include meetings with doctors, facility staff, the senior, and other professionals, as well as ongoing care coordination and advocacy.</p>
      </div>
    ),
  },
  {
    question: 'What if support is needed urgently?',
    answer: (
      <div className="space-y-3">
        <p>In some cases, families reach out during emergent or time-sensitive situations. Supporting Our Seniors has experience handling urgent circumstances and can fast-track the intake process when needed.</p>
        <p>Our ability to "hit the ground running" allows us to provide immediate support, guidance, and advocacy during critical moments.</p>
      </div>
    ),
  },
  {
    question: 'Where do you provide services?',
    answer: (
      <p>We provide senior advocacy and support services throughout New Haven, Litchfield, and Fairfield counties in Connecticut. Service availability may vary by need, and we are happy to discuss location-specific questions during a consultation.</p>
    ),
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto w-full px-4">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-white rounded-md mb-3 overflow-hidden transition-shadow duration-300 ${
              isOpen ? 'shadow-md' : 'shadow-sm hover:shadow-md'
            }`}
          >
            <button
              className={`w-full flex justify-between items-center gap-4 px-5 py-4 md:px-6 md:py-5 text-left font-semibold text-base md:text-lg transition-colors duration-200 ${
                isOpen
                  ? 'bg-[var(--color-primary)] text-[var(--color-primary)]'
                  : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]'
              }`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Animated answer panel */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-4 md:px-6 md:pb-6 text-[var(--color-text)] text-base md:text-[1.0625rem] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}