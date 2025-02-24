"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most email templates are completed within 2-3 business days. For more complex projects or multiple templates, we'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is included in the design process?",
    answer:
      "Our design process includes initial consultation, wireframing, design mockups, responsive coding, testing across all major email clients, and revisions based on your feedback. We also provide documentation and integration support.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide 30 days of post-launch support for all templates. This includes bug fixes, minor adjustments, and technical assistance. Extended support packages are also available.",
  },
  {
    question: "Can I customize the package?",
    answer:
      "We can tailor our services to meet your specific needs. Whether you need additional templates, custom features, or specialized integrations, we'll create a package that works for you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. For larger projects, we can arrange milestone-based payments to better suit your budget.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bricolage font-heading-bold mb-6">
            Frequently <span className="text-gray-400">Asked</span> Questions
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            We&apos;ve gathered the most common questions to make things simple. If you don&apos;t find your answer
            here, feel free to{" "}
            <a href="#contact" className="text-black hover:text-gray-800">
              reach out!
            </a>
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm border rounded-2xl px-6 py-4 shadow-sm data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline [&[data-state=open]>div>svg]:rotate-45">
                  <span className="text-left text-xl font-medium">{faq.question}</span>
                  <div className="shrink-0 ml-6">
                    <Plus className="h-6 w-6 text-black transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pt-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

