import { useState } from 'react';
import './FAQAccordion.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What services does Supporting Our Seniors provide?',
    answer: 'We provide comprehensive support services including financial support, medical coordination, household assistance, conservator services, and caregiver support. Our services are tailored to help seniors maintain independence and quality of life while providing peace of mind to their families.',
  },
  {
    question: 'How do I know if my loved one needs senior support services?',
    answer: 'Signs that support may be needed include difficulty managing daily tasks, missed appointments, unpaid bills, declining personal hygiene, confusion with medications, isolation, or caregiver burnout. We offer free consultations to assess your specific situation and recommend appropriate services.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve the Waterbury, Connecticut area and surrounding communities. However, we may be able to accommodate clients in other areas depending on their specific needs. Please contact us to discuss your location.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Service costs vary depending on the type and frequency of support needed. We offer flexible arrangements and will work with you to create a plan that fits your budget. Contact us for a free consultation and personalized quote based on your specific needs.',
  },
  {
    question: 'Are your services covered by insurance or Medicare?',
    answer: 'Some services may be covered depending on your specific insurance plan. We can help you navigate insurance benefits and understand what coverage may be available. We also work with families to explore funding options including long-term care insurance and veterans benefits.',
  },
  {
    question: 'What qualifications does your team have?',
    answer: 'Our founder, Tamath Rossi, has over 20 years of experience in senior services and 30 years as a paralegal. She previously served as Director of Senior Services for the Town of Southbury and has extensive experience with healthcare coordination, legal matters, and crisis management.',
  },
  {
    question: 'Can you help with legal matters like Power of Attorney or conservatorship?',
    answer: 'Yes, we have extensive experience with legal matters affecting seniors. While we are not attorneys, we work closely with a network of qualified attorneys and can help coordinate legal services, serve as conservators when needed, and ensure proper documentation and compliance.',
  },
  {
    question: 'How quickly can services begin?',
    answer: 'We understand that needs can arise suddenly. After an initial consultation, we can often begin services within a few days, depending on the complexity of the situation and service requirements. For urgent situations, we will work to accommodate needs as quickly as possible.',
  },
  {
    question: 'Do you provide 24/7 care?',
    answer: 'We coordinate support services but do not provide direct 24/7 personal care. However, we can help arrange and manage round-the-clock care through trusted partner agencies if that level of support is needed.',
  },
  {
    question: 'What makes Supporting Our Seniors different from other senior services?',
    answer: 'Our comprehensive approach combines professional expertise with genuine compassion. We bring together experience in healthcare coordination, legal matters, financial management, and family support. We don\'t just address immediate needs - we help plan for the future and provide ongoing advocacy and coordination.',
  },
  {
    question: 'Can you help with transitioning to assisted living or nursing care?',
    answer: 'Absolutely. We have extensive knowledge of local facilities and can help assess options, coordinate tours, manage the transition process, and ensure that your loved one receives appropriate care. We also help families understand their options and make informed decisions.',
  },
  {
    question: 'What if our needs change over time?',
    answer: 'Our services are flexible and can be adjusted as needs evolve. We regularly reassess situations and adapt our support accordingly. Whether needs increase or decrease, we work with families to ensure appropriate levels of assistance at every stage.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqData.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? 'active' : ''}`}
        >
          <button
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <svg
              className="faq-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}