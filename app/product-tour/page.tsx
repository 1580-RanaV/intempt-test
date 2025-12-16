"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { useState } from "react";

export default function ProductTourPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tours: [] as string[],
  });

  const productTours = [
    "Sales CRM",
    "Journeys",
    "Experiences",
    "Recommendations",
    "Analytics",
  ];

  const handleTourToggle = (tour: string) => {
    setFormData((prev) => ({
      ...prev,
      tours: prev.tours.includes(tour)
        ? prev.tours.filter((t) => t !== tour)
        : [...prev.tours, tour],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#fffff3] text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                  Product Tour
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Get a tour of GrowthOS
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Click below to start exploring GrowthOS in just a few clicks.
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Demo Request Form Section */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-2xl">
                <div className="rounded-3xl bg-gradient-to-br from-[#0382ff] to-blue-600 p-8 shadow-2xl sm:p-10">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Request a demo
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/90 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border-0 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:ring-2 focus:ring-white/50 focus:outline-none"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/90 mb-2"
                      >
                        Your Work Email <span className="text-white/70">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border-0 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:ring-2 focus:ring-white/50 focus:outline-none"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-4">
                        What product tour are you looking for?
                      </label>
                      <div className="space-y-3">
                        {productTours.map((tour) => (
                          <label
                            key={tour}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <div className="relative flex items-center justify-center">
                              <input
                                type="checkbox"
                                checked={formData.tours.includes(tour)}
                                onChange={() => handleTourToggle(tour)}
                                className="sr-only"
                              />
                              <div
                                className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-all ${
                                  formData.tours.includes(tour)
                                    ? "bg-white border-white"
                                    : "border-white/50 group-hover:border-white"
                                }`}
                              >
                                {formData.tours.includes(tour) && (
                                  <svg
                                    className="h-3 w-3 text-[#0382ff]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6L9 17l-5-5" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <span className="text-white font-medium">
                              {tour}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      Request a demo
                    </button>
                  </form>
                </div>
              </div>
            </AnimateIn>
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

