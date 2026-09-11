import React from "react";
import Link from "next/link";

interface BillingLink {
  title: string;
  description: string;
  href: string;
}

const column1Links: BillingLink[] = [
  {
    title: "Estimate Your Bill",
    description: "Create an online estimate for the hospital fee portion of your care.",
    href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/cost-estimates",
  },
  {
    title: "Pay Your Bill",
    description: "Pay your bill online or by phone. Contact us with questions.",
    href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/pay-bill",
  },
  {
    title: "Federal Price Transparency",
    description: "View the list of standard hospital charges.",
    href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/pay-bill/charges-fees",
  },
];

const column2Links: BillingLink[] = [
  {
    title: "Insurance Information",
    description: "Review the list of insurance plans we accept.",
    href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/insurance-info",
  },
  {
    title: "Financial Assistance",
    description:
      "Explore ways to get help paying your medical bills. Learn about payment plans.",
    href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/financial-assistance",
  },
  {
    title: "No Surprises Act",
    description: "Learn about a new right you have as a patient.",
    href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/no-surprises-act",
  },
];

export function BillingAssistance() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-center text-[#222222] mb-10">
        Payments and Billing Assistance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Left Column */}
        <ul className="space-y-4">
          {column1Links.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0077C8] mt-2 mr-3 shrink-0" />
              <div className="text-[15px] sm:text-[16px] leading-relaxed text-[#333333]">
                <Link
                  href={item.href}
                  className="font-medium text-[#0077C8] hover:underline"
                >
                  {item.title}:
                </Link>{" "}
                <span>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Right Column */}
        <ul className="space-y-4">
          {column2Links.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0077C8] mt-2 mr-3 shrink-0" />
              <div className="text-[15px] sm:text-[16px] leading-relaxed text-[#333333]">
                <Link
                  href={item.href}
                  className="font-medium text-[#0077C8] hover:underline"
                >
                  {item.title}:
                </Link>{" "}
                <span>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
