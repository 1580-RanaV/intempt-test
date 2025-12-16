"use client";

import Image from "next/image";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import type { NavItem } from "../content/siteContent";
import { useEffect, useMemo, useRef, useState } from "react";

function NavIcon({ label }: { label: string }) {
  const key = label.toLowerCase();

  if (key.includes("pricing")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M7 7h10v3a3 3 0 0 1-3 3h-4a3 3 0 0 0 0 6h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3v2m0 14v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes("tour")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M11 9v6l5-3-5-3Z" fill="currentColor" />
      </svg>
    );
  }

  if (key.includes("resource") || key.includes("docs") || key.includes("learn")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2V4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M6 18h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes("partner")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M8 11a4 4 0 1 1 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 13a4 4 0 1 1-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 14 14 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes("solution")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M4 7h16M4 12h10M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M18 12 21 14l-3 2v-4Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeaderSection({
  brand,
  navItems,
  actions,
}: {
  brand: string;
  navItems: ReadonlyArray<NavItem>;
  actions: ReadonlyArray<NavItem>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [clickedNavItem, setClickedNavItem] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<Set<string>>(new Set());
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; width: number } | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navItemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const allLinks = useMemo(() => {
    return [
      ...navItems,
      { label: actions[0]?.label ?? "Log in", href: actions[0]?.href ?? "#login" },
    ].filter((x): x is NavItem => Boolean(x?.label && x?.href));
  }, [actions, navItems]);

  const filteredLinks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allLinks;
    return allLinks.filter((item) => item.label.toLowerCase().includes(q));
  }, [allLinks, query]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      // Reset expanded items when menu closes
      setExpandedMobileItems(new Set());
      return;
    }
    setQuery("");
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [isOpen]);

  // Handle dropdown positioning
  useEffect(() => {
    const activeNavItem = hoveredNavItem || clickedNavItem;
    if (!activeNavItem) {
      setDropdownPosition(null);
      return;
    }

    const navItemEl = navItemRefs.current.get(activeNavItem);
    if (!navItemEl) return;

    const rect = navItemEl.getBoundingClientRect();
    setDropdownPosition({
      left: rect.left,
      width: Math.max(rect.width, 240),
    });
  }, [hoveredNavItem, clickedNavItem]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const item = navItems.find((nav) => nav.label === itemLabel);
    if (item?.subItems && item.subItems.length > 0) {
      setHoveredNavItem(itemLabel);
    }
  };

  const handleMouseLeave = () => {
    // Only close on mouse leave if not clicked
    if (!clickedNavItem) {
      timeoutRef.current = setTimeout(() => {
        setHoveredNavItem(null);
      }, 150);
    }
  };

  const handleNavItemClick = (e: React.MouseEvent, itemLabel: string) => {
    const item = navItems.find((nav) => nav.label === itemLabel);
    if (item?.subItems && item.subItems.length > 0) {
      e.preventDefault();
      // Toggle clicked state
      if (clickedNavItem === itemLabel) {
        setClickedNavItem(null);
        setHoveredNavItem(null);
      } else {
        setClickedNavItem(itemLabel);
        setHoveredNavItem(itemLabel);
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-nav-dropdown]') && !target.closest('[data-nav-item]')) {
        setClickedNavItem(null);
        setHoveredNavItem(null);
      }
    };

    if (clickedNavItem) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [clickedNavItem]);

  const activeNavItem = hoveredNavItem || clickedNavItem;
  const activeItem = activeNavItem
    ? navItems.find((item) => item.label === activeNavItem)
    : null;

  const toggleMobileItem = (itemLabel: string) => {
    setExpandedMobileItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemLabel)) {
        newSet.delete(itemLabel);
      } else {
        newSet.add(itemLabel);
      }
      return newSet;
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fffff3]/70 backdrop-blur">
        <Container className="py-4">
          <nav className="flex items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Intempt logo"
                width={28}
                height={28}
                priority
                className="h-7 w-7 rounded-md"
              />
              <span className="text-sm font-semibold tracking-tight text-black">
                {brand}
              </span>
            </a>

            <div 
              className="hidden items-center gap-7 lg:flex relative"
              onMouseLeave={handleMouseLeave}
              data-nav-dropdown
            >
              {navItems.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isActive = activeNavItem === item.label;
                
                return (
                  <div
                    key={item.label}
                    ref={(el) => {
                      if (el) navItemRefs.current.set(item.label, el);
                    }}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    className="relative"
                    data-nav-item
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavItemClick(e, item.label)}
                      className={[
                        "text-sm font-medium transition-all duration-200 ease-out relative flex items-center gap-1.5",
                        isActive
                          ? "text-[#0382ff]"
                          : "text-black/60 hover:text-black",
                      ].join(" ")}
                    >
                      {item.label}
                      {hasSubItems && (
                        <svg
                          className={[
                            "h-3.5 w-3.5 transition-transform duration-200 ease-out",
                            isActive ? "rotate-180" : "",
                          ].join(" ")}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      )}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0382ff] rounded-full" />
                      )}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Dropdown menu */}
            {activeNavItem && activeItem?.subItems && dropdownPosition && (
              <div
                className="fixed z-40 rounded-2xl backdrop-blur-xl border border-black/10 shadow-xl overflow-hidden transition-all duration-300 ease-out"
                style={{
                  top: "73px",
                  left: `${dropdownPosition.left}px`,
                  width: `${dropdownPosition.width}px`,
                  backgroundColor: "#fffff3",
                  opacity: activeNavItem ? 1 : 0,
                  transform: activeNavItem ? "translateY(0)" : "translateY(-8px)",
                  pointerEvents: activeNavItem ? "auto" : "none",
                }}
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                }}
                onMouseLeave={handleMouseLeave}
                data-nav-dropdown
              >
                <div className="p-2">
                  {activeItem.subItems.map((subItem) => {
                    const isExternal = subItem.href.startsWith("http");
                    return (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => {
                          // Close dropdown when sub-item is clicked
                          setClickedNavItem(null);
                          setHoveredNavItem(null);
                        }}
                        className="block px-4 py-2.5 rounded-xl text-sm font-medium text-black/70 transition-all duration-200 ease-out hover:bg-[#0382ff]/10 hover:text-[#0382ff]"
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {subItem.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={actions[0]?.href}
                className="text-sm font-semibold text-black/60 transition-colors hover:text-black"
              >
                {actions[0]?.label}
              </a>
              <ButtonLink variant="secondary" href={actions[1]?.href}>
                {actions[1]?.label}
              </ButtonLink>
              <ButtonLink href={actions[2]?.href}>
                {actions[2]?.label}
              </ButtonLink>
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.03] text-black ring-1 ring-inset ring-black/10 transition-all duration-200 ease-out hover:bg-black/[0.05] hover:-translate-y-0.5 active:translate-y-0 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-4 w-5">
                <span
                  className={[
                    "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-black transition-all duration-300",
                    isOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-black transition-all duration-300",
                    isOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-black transition-all duration-300",
                    isOpen ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </div>
            </button>
          </nav>
        </Container>
      </header>

      <div
        className={[
          "fixed inset-0 z-[60] h-[100dvh] w-screen lg:hidden",
          "transition-all duration-300 ease-out",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={() => setIsOpen(false)}
          className={[
            "absolute inset-0 bg-black/25 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          className={[
            "absolute right-0 top-0 h-[100dvh] w-full max-w-md bg-[#fffff3]/85 backdrop-blur-xl",
            "transition-all duration-300 ease-out",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6",
          ].join(" ")}
        >
          <div className="relative h-[100dvh] overflow-y-auto overscroll-contain no-scrollbar">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_30%_0%,rgba(3,130,255,0.18)_0%,rgba(3,130,255,0)_60%),radial-gradient(55%_50%_at_100%_25%,rgba(124,58,237,0.12)_0%,rgba(124,58,237,0)_60%)]"
            />

            <Container className="relative py-6">
              <div className="flex items-center justify-between gap-4">
                <a
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    alt="Intempt logo"
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-md"
                  />
                  <span className="text-sm font-semibold tracking-tight text-black">
                    {brand}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.04] text-black transition-colors hover:bg-black/[0.06]"
                  aria-label="Close menu"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>

              <div className="mt-6 rounded-2xl bg-black/[0.03] p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 rounded-xl bg-[#fffff3]/75 px-3 py-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5 text-black/45"
                  >
                    <path
                      d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16.5 16.5 21 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    ref={searchRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search pages…"
                    className="w-full bg-transparent text-sm font-semibold text-black placeholder:text-black/40 focus:outline-none"
                  />
                  <div className="rounded-md bg-black/[0.04] px-2 py-1 text-[11px] font-semibold text-black/60">
                    Esc
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold tracking-wide text-black/50">
                  Jump to
                </div>
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {navItems.slice(0, 8).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="shrink-0 rounded-full bg-black/[0.03] px-4 py-2 text-xs font-semibold text-black/70 transition-colors hover:bg-black/[0.05]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <div className="text-xs font-semibold tracking-wide text-black/50">
                  Navigate
                </div>
                <div className="mt-3 grid gap-2">
                  {filteredLinks.map((item) => {
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const isExpanded = expandedMobileItems.has(item.label);
                    
                    if (hasSubItems) {
                      return (
                        <div key={item.label} className="rounded-2xl bg-[#fffff3]/75 shadow-[0_1px_0_rgba(0,0,0,0.04)] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => toggleMobileItem(item.label)}
                            className="w-full group flex items-center justify-between px-4 py-4 transition-all hover:bg-[#fffff3]"
                          >
                            <div className="flex items-center gap-3">
                              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#0382ff]/16 to-violet-500/10 text-[#0382ff]">
                                <NavIcon label={item.label} />
                              </div>
                              <div className="text-sm font-semibold text-black">
                                {item.label}
                              </div>
                            </div>
                            <svg
                              className={[
                                "h-4 w-4 text-black/35 transition-transform duration-200 ease-out",
                                isExpanded ? "rotate-180" : "",
                              ].join(" ")}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-2 space-y-1">
                              {item.subItems.map((subItem) => {
                                const isExternal = subItem.href.startsWith("http");
                                return (
                                  <a
                                    key={subItem.label}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2.5 rounded-xl text-sm font-medium text-black/70 transition-all duration-200 ease-out hover:bg-[#0382ff]/10 hover:text-[#0382ff]"
                                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                  >
                                    {subItem.label}
                                  </a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }
                    
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between rounded-2xl bg-[#fffff3]/75 px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:bg-[#fffff3]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#0382ff]/16 to-violet-500/10 text-[#0382ff]">
                            <NavIcon label={item.label} />
                          </div>
                          <div className="text-sm font-semibold text-black">
                            {item.label}
                          </div>
                        </div>
                        <div className="text-black/35 transition-transform group-hover:translate-x-0.5">
                          →
                        </div>
                      </a>
                    );
                  })}
                  {filteredLinks.length === 0 ? (
                    <div className="rounded-2xl bg-black/[0.03] px-4 py-4 text-sm font-semibold text-black/55">
                      No matches for "{query.trim()}".
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <ButtonLink
                  variant="secondary"
                  href={actions[1]?.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  {actions[1]?.label}
                </ButtonLink>
                <ButtonLink
                  href={actions[2]?.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  {actions[2]?.label}
                </ButtonLink>
              </div>

              <div className="mt-7 text-center text-sm font-semibold text-black/45">
                Tip: type to filter, press{" "}
                <span className="font-mono text-black/65">Esc</span> to close.
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
