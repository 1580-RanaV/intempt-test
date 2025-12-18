"use client";

import { useMemo, useState } from "react";
import Stepper, { Step } from "../components/Stepper";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { siteContent } from "../content/siteContent";

type RoleKey = "marketers" | "sales";

const TOOL_OPTIONS = [
  { name: "HubSpot", badge: "Source" },
  { name: "Shopify", badge: "Source" },
  { name: "Stripe", badge: "Source" },
  { name: "SendGrid", badge: "Destination" },
  { name: "Twilio", badge: "Destination" },
  { name: "Slack", badge: "Destination" },
  { name: "Gmail", badge: "Destination" },
  { name: "Android", badge: "Source" },
  { name: "iOS", badge: "Source" },
  { name: "Web", badge: "Source" },
  { name: "Node.js", badge: "Source" },
  { name: "API", badge: "Source" },
] as const;

const DEFAULT_TOOL_SELECTION = new Set(["HubSpot", "Shopify", "Slack", "API"]);

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [companySearch, setCompanySearch] = useState("");
  const [workspaceName, setWorkspaceName] = useState("Intempt Technologies");
  const [workspaceUrl, setWorkspaceUrl] = useState("");
  const [workspaceSlug, setWorkspaceSlug] = useState("intempt");
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [role, setRole] = useState<RoleKey | null>(null);
  const [selectedTools, setSelectedTools] = useState<Set<string>>(
    new Set(DEFAULT_TOOL_SELECTION)
  );
  const [finished, setFinished] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const selectedToolList = useMemo(() => Array.from(selectedTools), [selectedTools]);

  const emailInvalid = email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordInvalid = password.trim().length > 0 && password.trim().length < 8;
  const slugInvalid =
    workspaceSlug.trim().length > 0 && !/^[a-z0-9-]+$/i.test(workspaceSlug.trim());

  const errors = {
    fullName: !fullName.trim() ? "Full name is required" : "",
    email: !email.trim() ? "Work email is required" : emailInvalid ? "Enter a valid email" : "",
    password:
      !password.trim() ? "Password is required" : passwordInvalid ? "Min 8 characters" : "",
    companySearch: !companySearch.trim() ? "Search for a company" : "",
    workspaceName: !workspaceName.trim() ? "Workspace name is required" : "",
    workspaceSlug: !workspaceSlug.trim()
      ? "Workspace slug is required"
      : slugInvalid
        ? "Use letters, numbers, and dashes only"
        : "",
    role: !role ? "Select a path" : "",
    tools: selectedTools.size === 0 ? "Select at least one tool" : "",
  };

  const markTouched = (key: string) => setTouched((prev) => ({ ...prev, [key]: true }));

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={[
          siteContent.nav.actions[0],
          siteContent.nav.actions[1],
          { ...siteContent.nav.actions[2], href: "/onboarding" },
        ]}
      />

      <main className="pb-24">
        <div className="mx-auto max-w-6xl px-4 pt-12">
          <Stepper
            onFinalStepCompleted={() => setFinished(true)}
            onStepChange={(step) => setCurrentStep(step)}
            backButtonText="Previous"
            nextButtonText="Next"
            finalButtonText="Get started"
            disableStepIndicators={false}
            skipButtonText="Skip"
            className="relative"
            nextButtonProps={{
              onMouseDown: () => {
                if (currentStep === 1) {
                  markTouched("fullName");
                  markTouched("email");
                  markTouched("password");
                }
                if (currentStep === 2) {
                  markTouched("companySearch");
                }
                if (currentStep === 3) {
                  markTouched("workspaceName");
                  markTouched("workspaceSlug");
                }
                if (currentStep === 4) {
                  markTouched("role");
                }
                if (currentStep === 5) {
                  markTouched("tools");
                }
              },
            }}
            getNextButtonText={(step, isLast) => {
              if (isLast) return "Get started";
              if (step === 1) return "Sign up with Email";
              if (step === 2) return "Create workspace";
              if (step === 3) return "Create workspace";
              if (step === 4) return "Continue";
              if (step === 5) return "Next";
              return "Next";
            }}
            isNextDisabled={(step) => {
              if (step === 1) {
                return !!errors.fullName || !!errors.email || !!errors.password || !consent;
              }
              if (step === 2) {
                return !!errors.companySearch;
              }
              if (step === 3) {
                return !!errors.workspaceName || !!errors.workspaceSlug;
              }
              if (step === 4) {
                return !!errors.role;
              }
              if (step === 5) {
                return !!errors.tools;
              }
              return false;
            }}
          >
            <Step>
              <StepCard>
                <div className="text-center">
                  <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    Ready to supercharge your revenue?
                  </h1>
                  <p className="mt-3 text-base leading-7 text-black/70">
                    14 days free. No credit card. Just pure pipeline magic.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <GhostButton label="Sign up with Google" icon="G" />
                  <GhostButton label="Sign up with Outlook" icon="@" />
                </div>

                <div className="mt-3 text-center text-sm font-semibold text-[#0382ff]">
                  Single sign-on (SSO)
                </div>

                <Divider label="Or" />

                <div className="grid gap-4">
                  <Field
                    label="Full name"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(v) => {
                      setFullName(v);
                      markTouched("fullName");
                    }}
                    error={touched.fullName ? errors.fullName : ""}
                  />
                  <Field
                    label="Work email"
                    placeholder="name@work-email.com"
                    value={email}
                    onChange={(v) => {
                      setEmail(v);
                      markTouched("email");
                    }}
                    type="email"
                    error={touched.email ? errors.email : ""}
                  />
                  <div className="grid gap-3 sm:grid-cols-[140px_1fr] sm:items-end">
                    <Field label="Country code" placeholder="+1" value="+1" readOnly />
                    <Field
                      label="Phone number (optional)"
                      placeholder="(555) 123-4567"
                      value={phone}
                      onChange={(v) => setPhone(v)}
                    />
                  </div>
                  <Field
                    label="Password"
                    placeholder="8 characters or more"
                    value={password}
                    onChange={(v) => {
                      setPassword(v);
                      markTouched("password");
                    }}
                    type="password"
                    error={touched.password ? errors.password : ""}
                  />
                  <label className="flex items-start gap-3 text-sm font-semibold text-black/70">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-black/20 text-[#0382ff] focus:ring-[#0382ff]"
                    />
                    <span>I agree to Intempt’s Terms &amp; Conditions and Privacy Policy.</span>
                  </label>
                </div>
              </StepCard>
            </Step>

            <Step>
              <StepCard>
                <div className="space-y-3 text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.1em] text-black/60">
                    GrowthOS
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    Create your workspace
                  </h2>
                  <p className="text-base leading-7 text-black/65">
                    Search your company to auto-fill workspace details.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <Field
                    label="Find your company"
                    placeholder="Search company name…"
                    value={companySearch}
                    onChange={(v) => {
                      setCompanySearch(v);
                      markTouched("companySearch");
                    }}
                    error={touched.companySearch ? errors.companySearch : ""}
                  />
                  <button
                    type="button"
                    className={[
                      "w-full rounded-full px-5 py-3 text-sm font-semibold transition",
                      companySearch
                        ? "bg-[#0382ff] text-white hover:bg-[#0273e6]"
                        : "bg-black/5 text-black/40",
                    ].join(" ")}
                    disabled={!companySearch}
                  >
                    Create workspace
                  </button>
                </div>
              </StepCard>
            </Step>

            <Step>
              <StepCard>
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    Review and customize your workspace details.
                  </h2>
                </div>

                <div className="mt-6 grid gap-4">
                  <Field
                    label="Workspace name"
                    placeholder="Workspace name"
                    value={workspaceName}
                    onChange={(v) => {
                      setWorkspaceName(v);
                      markTouched("workspaceName");
                    }}
                    error={touched.workspaceName ? errors.workspaceName : ""}
                  />
                  <Field
                    label="Website URL"
                    placeholder="yourcompany.com"
                    value={workspaceUrl}
                    onChange={setWorkspaceUrl}
                    helper="We’ll analyze your website to pre-fill your brand information"
                  />
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-black">Workspace slug</label>
                    <div className="flex items-center rounded-2xl border border-black/15 bg-[#f5f5f5] px-3 py-2 text-sm font-semibold text-black/70 focus-within:ring-2 focus-within:ring-[#0382ff]/40">
                      <span className="text-black/40">app.intempt.com/</span>
                      <input
                        value={workspaceSlug}
                        onChange={(e) => {
                          setWorkspaceSlug(e.target.value);
                          markTouched("workspaceSlug");
                        }}
                        className="w-full bg-transparent outline-none"
                        aria-label="Workspace slug"
                      />
                    </div>
                    <p className="text-xs font-semibold text-black/45">
                      You can change this later in your workspace settings.
                    </p>
                    {touched.workspaceSlug && errors.workspaceSlug ? (
                      <p className="text-xs font-semibold text-red-600">{errors.workspaceSlug}</p>
                    ) : null}
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-black">Workspace logo</label>
                      <div className="flex items-center justify-between rounded-2xl border border-dashed border-black/15 bg-[#f5f5f5] px-4 py-3">
                        <div>
                          <div className="text-sm font-semibold text-black/70">Upload image</div>
                          <p className="text-xs font-semibold text-black/45">
                            Recommended size: 160×160px
                          </p>
                        </div>
                        <button className="rounded-sm bg-black/80 px-3 py-2 text-xs font-semibold text-white transition hover:bg-black">
                          Choose file
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-black">
                        Primary contact number (optional)
                      </label>
                      <div className="grid grid-cols-[110px_1fr] gap-2 rounded-2xl border border-black/15 bg-[#f5f5f5] px-3 py-2 text-sm font-semibold text-black/70 focus-within:ring-2 focus-within:ring-[#0382ff]/40">
                        <input
                          value="+1"
                          readOnly
                          className="bg-transparent outline-none"
                          aria-label="Country code"
                        />
                        <input
                          value={primaryNumber}
                          onChange={(e) => setPrimaryNumber(e.target.value)}
                          placeholder="(555) 987-6543"
                          className="bg-transparent outline-none"
                          aria-label="Primary contact number"
                        />
                      </div>
                      <p className="text-xs font-semibold text-black/45">
                        For account recovery and notifications
                      </p>
                    </div>
                  </div>
                </div>
              </StepCard>
            </Step>

            <Step>
              <StepCard>
                <div className="space-y-3 text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
                    GrowthOS
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    How do you want to grow?
                  </h2>
                  <p className="text-base leading-7 text-black/65">
                    Choose your path to unlock the right tools for your role.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <RoleCard
                    active={role === "marketers"}
                    onSelect={() => setRole("marketers")}
                    title="Growth OS for Marketers"
                    description="Full-stack marketing automation"
                    features={[
                      "Hyper-personalized customer journeys",
                      "A/B testing & CRO experiments",
                      "Product & web analytics",
                      "AI-powered content generation",
                    ]}
                  />
                  <RoleCard
                    active={role === "sales"}
                    onSelect={() => setRole("sales")}
                    title="Growth OS for Sales Reps"
                    description="Intelligent sales pipeline management"
                    features={[
                      "AI email drafting & inbox management",
                      "Calendar & meeting scheduling",
                      "Automated note-taking & transcription",
                      "Smart CRM & deal tracking",
                    ]}
                  />
                </div>
                {errors.role && (touched.role || currentStep === 4) ? (
                  <p className="text-sm font-semibold text-red-600">{errors.role}</p>
                ) : null}
              </StepCard>
            </Step>

            <Step>
              <StepCard>
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    Which tools would you like to integrate?
                  </h2>
                  <p className="text-base leading-7 text-black/65">
                    Select the tools you want to connect to power your marketing automation.
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-black/15 bg-[#f5f5f5] p-4">
                  <div className="flex items-center justify-between text-sm font-semibold text-black/65">
                    <span>Analyzing your website…</span>
                    <span>68%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-black/10">
                    <div className="h-2 w-[68%] rounded-full bg-[#0382ff]" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {TOOL_OPTIONS.map((tool) => {
                    const isSelected = selectedTools.has(tool.name);
                    return (
                      <button
                        key={tool.name}
                        type="button"
                        onClick={() => {
                          setSelectedTools((prev) => {
                            const next = new Set(prev);
                            if (next.has(tool.name)) {
                              next.delete(tool.name);
                            } else {
                              next.add(tool.name);
                            }
                            return next;
                          });
                        }}
                        className={[
                          "flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                          isSelected
                            ? "border-[#0382ff] bg-[#f5f5f5]"
                            : "border-black/15 bg-[#f5f5f5] hover:-translate-y-0.5 hover:shadow-sm",
                        ].join(" ")}
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-black">{tool.name}</div>
                          <span
                            className={[
                              "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold",
                              tool.badge === "Source"
                                ? "bg-[#0382ff]/10 text-[#0382ff]"
                                : "bg-black/10 text-black/70",
                            ].join(" ")}
                          >
                            {tool.badge}
                          </span>
                        </div>
                        <div
                          className={[
                            "grid h-8 w-8 place-items-center rounded-full border text-sm font-semibold transition",
                            isSelected
                              ? "border-[#0382ff] bg-[#0382ff] text-white"
                              : "border-black/10 text-black/40",
                          ].join(" ")}
                        >
                          {isSelected ? "✓" : ""}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.tools && (touched.tools || currentStep === 5) ? (
                  <p className="text-sm font-semibold text-red-600">{errors.tools}</p>
                ) : null}
              </StepCard>
            </Step>

            <Step>
              <StepCard>
                <div className="space-y-3 text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
                    GrowthOS
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    Connect your data to get started
                  </h2>
                  <p className="text-base leading-7 text-black/65">
                    Set up your integrations to start collecting and analyzing data.
                  </p>
                  <div className="inline-flex rounded-full bg-black/5 px-4 py-2 text-xs font-semibold text-black/60">
                    Step 1: Tools • Step 2: Connect (active)
                  </div>
                </div>

                <div className="mt-6 grid gap-3 lg:grid-cols-2">
                  {selectedToolList.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-black/15 bg-[#f5f5f5] px-4 py-6 text-center text-sm font-semibold text-black/60">
                      Select at least one tool to connect.
                    </div>
                  ) : (
                    selectedToolList.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-black/15 bg-[#f5f5f5] px-4 py-3"
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-black">
                            {tool} — {TOOL_OPTIONS.find((t) => t.name === tool)?.badge ?? "Source"}
                          </div>
                          <p className="text-sm leading-6 text-black/60">
                            Import data and push actions without leaving Intempt.
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="rounded-sm bg-[#0382ff]/10 px-3 py-2 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/30 transition hover:bg-[#0382ff]/15">
                            Ask teammate
                          </button>
                          <button className="rounded-sm bg-black px-3 py-2 text-xs font-semibold text-white transition hover:bg-black/80">
                            Connect
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-black/15 bg-[#f5f5f5] px-4 py-3">
                  <LockIcon />
                  <div className="text-sm font-semibold text-black/70">
                    Your data is encrypted and secure. We never share your credentials with third
                    parties.
                  </div>
                </div>
              </StepCard>
            </Step>
          </Stepper>

          {finished ? (
            <div className="mt-4 text-center text-sm font-semibold text-black/60">
              Thanks for completing onboarding. You can revisit any step using the indicators above.
            </div>
          ) : null}
        </div>
      </main>

      <Footer
        brand={siteContent.brand}
        contact={siteContent.footer.contact}
        columns={siteContent.footer.columns}
      />
    </div>
  );
}

function StepCard({ children }: { children: React.ReactNode }) {
  return <div className="relative grid gap-6 rounded-[12px] p-4 sm:p-6">{children}</div>;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  helper,
  readOnly = false,
  error = "",
}: {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  type?: string;
  helper?: string;
  readOnly?: boolean;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-black">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className={[
          "w-full rounded-sm border border-black/15 bg-[#f5f5f5] px-3 py-3 text-sm font-semibold text-black/80 outline-none transition focus:ring-2 focus:ring-[#0382ff]/40",
          readOnly ? "cursor-not-allowed text-black/40" : "",
          error ? "border-red-500 focus:ring-red-200" : "",
        ].join(" ")}
      />
      {helper ? <p className="text-xs font-semibold text-black/45">{helper}</p> : null}
      {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}

function GhostButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button className="flex items-center justify-center gap-3 rounded-sm border border-black/15 bg-[#f5f5f5] px-4 py-3 text-sm font-semibold text-black/80 transition hover:-translate-y-0.5 hover:shadow-sm">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-sm font-bold text-black/70">
        {icon}
      </span>
      {label}
    </button>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
      <span className="h-px flex-1 bg-black/10" />
      {label}
      <span className="h-px flex-1 bg-black/10" />
    </div>
  );
}

function RoleCard({
  active,
  onSelect,
  title,
  description,
  features,
}: {
  active: boolean;
  onSelect: () => void;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "flex h-full flex-col items-start gap-3 rounded-2xl border px-4 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        active
          ? "border-[#0382ff] bg-[#f5f5f5] shadow-sm"
          : "border-black/15 bg-[#f5f5f5] hover:-translate-y-0.5 hover:shadow-sm",
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0382ff] to-violet-600" />
        <div className="text-lg font-semibold text-black">{title}</div>
      </div>
      <div className="text-sm font-semibold text-black/65">{description}</div>
      <ul className="space-y-2 text-sm font-semibold text-black/70">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0382ff]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div
        className={[
          "ml-auto mt-auto inline-flex rounded-full px-3 py-1 text-[11px] font-semibold",
          active ? "bg-black text-white" : "bg-black/5 text-black/60",
        ].join(" ")}
      >
        {active ? "Selected" : "Select"}
      </div>
    </button>
  );
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m12 2-1.9 5.4L4.7 9.6l5.4 1.9L12 17l1.9-5.5 5.4-1.9-5.4-2.2L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-black/50">
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 10V8a4 4 0 1 1 8 0v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}
