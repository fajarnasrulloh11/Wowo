export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope and complexity. A simple landing page can be completed in 1–2 weeks, while a full web application or custom software typically takes 4–12 weeks. We provide a detailed timeline estimate during our discovery phase.",
  },
  {
    question: "Can you work with an existing system?",
    answer:
      "Yes. We regularly integrate with or extend existing systems. Our process starts with a technical audit to understand your current architecture before proposing any changes.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We offer ongoing maintenance and support plans. After launch, we can handle updates, bug fixes, performance monitoring, and feature additions based on your needs.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "Yes. We have experience integrating local Indonesian payment gateways (Midtrans, Xendit, DOKU) as well as international ones (Stripe, PayPal), depending on your requirements.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Yes. We are happy to sign a Non-Disclosure Agreement before any detailed discussions if required. Client confidentiality is something we take seriously.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Simply reach out via our contact form or WhatsApp. We'll schedule a free discovery call to understand your project, goals, and requirements — then provide a proposal within a few business days.",
  },
  {
    question: "Do you work with startups and SMEs?",
    answer:
      "Absolutely. We work with businesses of all sizes — from early-stage startups building their first MVP to established enterprises modernizing their systems. Our packages are designed to accommodate different budgets and needs.",
  },
];
