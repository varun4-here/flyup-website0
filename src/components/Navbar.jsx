"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Labs", href: "/labs" },
  { label: "Academy", href: "/academy" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // On homepage: show navbar after scrolling past PreHero
  // On all other pages: always visible
  useEffect(() => {
    if (!isHome) {
      setActive(true);
      return;
    }

    function onScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setActive(scrollY > windowHeight * 0.6);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close mobile menu on route/link click
  function handleLinkClick() {
    setMobileOpen(false);
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        active
          ? "bg-gray-100/75 backdrop-blur-[16px] border-b border-black/5 shadow-nav pointer-events-auto opacity-100 translate-y-0"
          : "bg-transparent backdrop-blur-0 pointer-events-none opacity-0 -translate-y-5"
      }`}
      style={{ transition: "all 0.4s var(--ease-smooth)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/Logo0.svg"
            alt="FlyUP Foundation Logo"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`font-body font-medium text-[0.92rem] relative py-1 whitespace-nowrap nav-link-underline transition-colors duration-250 ${
                    isActive
                      ? "text-blue-600 nav-link-active"
                      : "text-charcoal hover:text-blue-600"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/about#contact-form"
              className="btn-shine relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] font-header font-semibold text-[0.88rem] tracking-[0.02em] bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.45)] transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-charcoal rounded-sm transition-all duration-300"
            style={{
              transform: mobileOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 bg-charcoal rounded-sm transition-all duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-charcoal rounded-sm transition-all duration-300"
            style={{
              transform: mobileOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-gray-100 flex flex-col p-6 gap-1 shadow-lg rounded-b-[20px]">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`font-body font-medium text-[0.92rem] py-3.5 px-5 rounded-xl w-full transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-charcoal hover:bg-off-white"
                }`}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/about#contact-form"
            className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-header font-semibold text-[0.88rem] bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] mt-2 cursor-pointer"
            onClick={handleLinkClick}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
