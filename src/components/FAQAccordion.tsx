import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: 'Why do you need a Senior Advocate ("S.A") / Geriatric Care Manager ("G.C.M") and how can one be helpful?',
    answer: (
      <div className="space-y-4">
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>To open communication with healthcare.</li>
          <li>To help your concerns be heard.</li>
          <li>To process what goes on with your loved one.</li>
          <li>To seek requests for care for loved one.</li>
          <li>To have a support system.</li>
          <li>To seek out referrals for the patient.</li>
          <li>To act as a main point of contact for the many calls for coordination, minutia of planning and minimize the stress on the family by communicating the remarkable items to the family in one call.</li>
          <li>To provide a seasoned network of known professionals that can provide an array of services.</li>
          <li>To guide you and provide professional advice.</li>
          <li>To provide clarity of the future beyond the "immediate or emergency" situation. Create stability, a plan and knowledge for moving forward.</li>
          <li>To ensure accountability for all involved, "keeping watch" and ease that burden on the loved ones.</li>
        </ul>
        <p>A SA/GCM can help provide support, experienced knowledge and action in the medical and home setting. They provide knowledge and resources regarding options, service care providers and strategic future planning for your loved one. Coordination of specialist appointments, needed transportation, further medical support systems can be managed and coordinated by the SA/GCM, freeing the family of the stress and burden. The health care system can be overwhelming and complicated to navigate through and the emotions and worry of a loved one can add to the stress. The SA/GCM allows the family to focus on the loved one by leading all coordination and communications and provide constant support and recommendations on the situation and next steps.</p>
      </div>
    ),
  },
  {
    question: 'How does a SA/GCM work?',
    answer: (
      <div className="space-y-4">
        <p>After an initial consult, Supporting Our Seniors provides a proposal and draft Service Agreement as a "springboard" in creation of a final agreement that meets the family's goals and expectations. Upon signing of agreement and retaining of Supporting Our Seniors, a Certificate of Insurance endorsed to the client is provided.</p>
        <p>Typical Actions can include meetings with doctors, facility staff, meeting with the patient, coordination of care and facilities.</p>
        <p>In some cases, a client may reach out during an emergent and "time is of the essence" situation. Supporting Our Seniors has experience with these situations and is able to fast track the intake process and to "hit the ground running" to provide immediate support to the senior and family.</p>
        <p>No two situations are alike and there are no cookie cutter scenarios! Supporting Our Seniors approaches each case and situation individually and creatively to create the best support and service to ensure the goals of the senior and family are met.</p>
      </div>
    ),
  },
  {
    question: 'What is a Certified Dementia Practitioner?',
    answer: (
      <p>A Certified Dementia Practitioner, or CDP, is someone with a certification demonstrating achievement and specialized training in the areas of Alzheimer's and dementia care. The CDP program recognizes the need for standards in the area of Alzheimer's and dementia education, and it helps improve the services provided by health care professionals and frontline staff. Ongoing continuing education is required to maintain certification.</p>
    ),
  },
  {
    question: 'What is a Conservator?',
    answer: (
      <div className="space-y-4">
        <p>A <strong>"conservator of the person"</strong> is appointed by the Probate Court to supervise the personal affairs of an individual who is found by the court to be unable to meet essential requirements for personal needs. These needs may include, but are not limited to, food, clothing, shelter, health care and safety.</p>
        <p>A <strong>"conservator of the estate"</strong> is appointed by the Probate Court to supervise the finances of an individual who is found by the court to be incapable of managing his or her own finances. This may include, but is not limited to, actions to manage assets, income and public assistance benefits.</p>
      </div>
    ),
  },
  {
    question: 'Why do people have conservatorships?',
    answer: (
      <div className="space-y-4">
        <p>A conservatorship is a way for someone to assume legal guardianship over an adult. Families often use conservatorships to help deal with the mounting medical, financial and mental health needs of a parent. The status of a conservatorship is dependent on the capacity of the individual to make decisions on their own.</p>
        <p>Supporting Our Seniors has experience in both Conservatorship of the Person and Estate as well as voluntary, involuntary and contested involuntary Conservatorships. Tamath is also a vetted and approved Regulation 16 Conservator by the State of Connecticut which applies to the compensation of a conservator for a person under conservatorship who is unable to pay for the services of the conservator.</p>
        <p>If you are considering a Conservatorship for a loved one, Supporting Our Seniors can guide and assist the family/concerned parties of the senior to consider all options and make a decision that is the right fit for the senior and the specific situation.</p>
      </div>
    ),
  },
  {
    question: 'What is a Daily Money Manager?',
    answer: (
      <p>A daily money manager is a person who takes over someone's day-to-day financial tasks including reviewing bills, bill paying and reviewing of mail. A variety of people employ daily money managers, ranging from older clients to those simply too busy to maintain total control and accuracy of their financial needs.</p>
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