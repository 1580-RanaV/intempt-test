"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { useState } from "react";

const useCases = [
  {
    id: "autonomous-crm",
    name: "Autonomous CRM",
    description: "AI-powered customer relationship management that automates outreach, follow-ups, and deal progression",
    wistiaId: "placeholder1",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "inbound-led-outbound",
    name: "Inbound-Led Outbound",
    description: "",
    wistiaId: "placeholder2",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "lifecycle-retention",
    name: "Lifecycle & Retention",
    description: "",
    wistiaId: "placeholder3",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "commerce-experience",
    name: "Commerce Experience",
    description: "",
    wistiaId: "placeholder4",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: "subscription-analytics",
    name: "Subscription Analytics",
    description: "",
    wistiaId: "placeholder5",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "order-analytics",
    name: "Order Analytics",
    description: "",
    wistiaId: "placeholder6",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "testing-cro",
    name: "Testing & CRO",
    description: "",
    wistiaId: "placeholder7",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function ProductTourPage() {
  const [selectedUseCase, setSelectedUseCase] = useState(useCases[0]);
  const [formData, setFormData] = useState({
    fullName: "John Smith",
    workEmail: "john@company.com",
    companyName: "Acme Inc",
    companySize: "",
    useCaseInterest: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[white] text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Product Tours
                </div>
                <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
                  See GrowthOS in Action
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70 sm:mt-6 sm:text-lg lg:text-xl">
                  Explore 10-minute deep-dive videos for each of our 7 use cases
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Use Cases Tabs Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <AnimateIn>
                {/* Tabs Navigation - Centered */}
                <div className="flex flex-wrap items-center justify-center gap-2 px-2 sm:px-0">
                  {useCases.map((useCase) => (
                    <button
                      key={useCase.id}
                      onClick={() => setSelectedUseCase(useCase)}
                      className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-200 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs md:px-4 md:py-2.5 md:text-sm ${
                        selectedUseCase.id === useCase.id
                          ? "border-black/20 bg-[#0382ff] text-white shadow-sm"
                          : "border-black/10 bg-white text-black/70 hover:bg-white/90 hover:text-black"
                      }`}
                    >
                      <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 shrink-0">{useCase.icon}</span>
                      <span className="whitespace-nowrap">{useCase.name}</span>
                    </button>
                  ))}
                </div>
              </AnimateIn>

              {/* Selected Use Case Content */}
              <AnimateIn delayMs={80}>
                <div className="mt-6 rounded-sm border border-black/10 bg-white p-4 shadow-sm sm:mt-8 sm:p-6 lg:p-10">
                  <div className="mx-auto max-w-4xl">
                    {/* Title and Duration Row */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0382ff]/10 text-[#0382ff] shrink-0 sm:h-12 sm:w-12">
                          {selectedUseCase.icon}
                        </div>
                        <h2 className="text-xl font-semibold text-black sm:text-2xl lg:text-3xl xl:text-4xl truncate">
                          {selectedUseCase.name}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 rounded-sm bg-black/5 px-3 py-1.5 sm:px-4 sm:py-2 w-fit shrink-0">
                        <svg className="h-3.5 w-3.5 text-black/60 sm:h-4 sm:w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs font-semibold text-black/70 sm:text-sm whitespace-nowrap">10 min</span>
                      </div>
                    </div>
                    {selectedUseCase.description && (
                      <p className="text-base leading-7 text-black/70 sm:text-lg">
                        {selectedUseCase.description}
                      </p>
                    )}
                  </div>

                  {/* Video Placeholder - Centered */}
                  <div className="mt-6 mx-auto max-w-4xl overflow-hidden rounded-sm bg-[#1a1a2e] aspect-video flex items-center justify-center relative sm:mt-8">
                    <div className="text-center px-4">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0382ff]/20 sm:mb-4 sm:h-16 sm:w-16">
                        <svg className="h-6 w-6 text-[#0382ff] sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-white/80 sm:text-sm">Video coming soon</p>
                      <p className="mt-1 text-[10px] text-white/60 sm:text-xs">Wistia ID: {selectedUseCase.wistiaId}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </Container>
        </section>

        {/* Demo Booking Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <div className="mx-auto max-w-5xl">
              {/* Section Header - Centered */}
              <AnimateIn>
                <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
                  <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl lg:text-4xl xl:text-5xl">
                    Book a Tailored 1:1 Demo
                  </h2>
                  <p className="mt-3 text-base leading-7 text-black/70 sm:mt-4 sm:text-lg sm:leading-8">
                    Get a personalized walkthrough designed for your specific business needs.
                  </p>
                </div>
              </AnimateIn>

              <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
                {/* Left Column - Benefits */}
                <AnimateIn>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-center sm:text-left">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0382ff]/10 text-lg font-semibold text-[#0382ff] mx-auto sm:mx-0 sm:h-12 sm:w-12 sm:text-xl">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black sm:text-xl">
                          Personalized to your stack
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-black/70 sm:mt-2 sm:text-base sm:leading-7">
                          See integrations with your existing tools
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-center sm:text-left">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0382ff]/10 text-lg font-semibold text-[#0382ff] mx-auto sm:mx-0 sm:h-12 sm:w-12 sm:text-xl">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black sm:text-xl">
                          Use case focused
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-black/70 sm:mt-2 sm:text-base sm:leading-7">
                          Deep dive into your specific challenges
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-center sm:text-left">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0382ff]/10 text-lg font-semibold text-[#0382ff] mx-auto sm:mx-0 sm:h-12 sm:w-12 sm:text-xl">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black sm:text-xl">
                          ROI projection
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-black/70 sm:mt-2 sm:text-base sm:leading-7">
                          Get a custom growth forecast
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>

                {/* Right Column - Form */}
                <AnimateIn delayMs={80}>
                  <div className="rounded-sm border border-black/10 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-semibold text-black mb-2"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black placeholder:text-black/40 outline-none transition focus:ring-2 focus:ring-[#0382ff]/40 focus:border-[#0382ff]"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="workEmail"
                          className="block text-sm font-semibold text-black mb-2"
                        >
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={(e) =>
                            setFormData({ ...formData, workEmail: e.target.value })
                          }
                          className="w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black placeholder:text-black/40 outline-none transition focus:ring-2 focus:ring-[#0382ff]/40 focus:border-[#0382ff]"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-semibold text-black mb-2"
                        >
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          required
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          className="w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black placeholder:text-black/40 outline-none transition focus:ring-2 focus:ring-[#0382ff]/40 focus:border-[#0382ff]"
                          placeholder="Acme Inc"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="companySize"
                          className="block text-sm font-semibold text-black mb-2"
                        >
                          Company Size <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="companySize"
                          required
                          value={formData.companySize}
                          onChange={(e) =>
                            setFormData({ ...formData, companySize: e.target.value })
                          }
                          className="w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black outline-none transition focus:ring-2 focus:ring-[#0382ff]/40 focus:border-[#0382ff]"
                        >
                          <option value="">Select size</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501-1000">501-1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="useCaseInterest"
                          className="block text-sm font-semibold text-black mb-2"
                        >
                          Primary Use Case Interest
                        </label>
                        <select
                          id="useCaseInterest"
                          value={formData.useCaseInterest}
                          onChange={(e) =>
                            setFormData({ ...formData, useCaseInterest: e.target.value })
                          }
                          className="w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black outline-none transition focus:ring-2 focus:ring-[#0382ff]/40 focus:border-[#0382ff]"
                        >
                          <option value="">Select a use case</option>
                          {useCases.map((useCase) => (
                            <option key={useCase.id} value={useCase.id}>
                              {useCase.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="additionalNotes"
                          className="block text-sm font-semibold text-black mb-2"
                        >
                          Additional Notes <span className="text-black/50 font-normal">(Optional)</span>
                        </label>
                        <textarea
                          id="additionalNotes"
                          rows={4}
                          value={formData.additionalNotes}
                          onChange={(e) =>
                            setFormData({ ...formData, additionalNotes: e.target.value })
                          }
                          className="w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black placeholder:text-black/40 outline-none transition focus:ring-2 focus:ring-[#0382ff]/40 focus:border-[#0382ff] resize-none"
                          placeholder="Tell us about your specific challenges or goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-sm bg-[#0382ff] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0273e6] focus:outline-none focus:ring-2 focus:ring-[#0382ff]/40 focus:ring-offset-2"
                      >
                        Request Your Demo
                      </button>

                      <p className="text-xs font-normal text-black/60 text-center">
                        By submitting, you agree to our{" "}
                        <a
                          href="/privacy"
                          className="text-[#0382ff] hover:underline font-semibold"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer
        brand={siteContent.brand}
        contact={siteContent.footer.contact}
        columns={siteContent.footer.columns}
      />
    </div>
  );
}
