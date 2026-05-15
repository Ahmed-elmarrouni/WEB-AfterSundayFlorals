"use client";

import { useState } from "react";
import Link from "next/link";
import SmoothAnchor from "./SmoothAnchor";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--ivory)]/80 backdrop-blur-md border-b border-[var(--charcoal)]/5 transition-all duration-300">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
          <div className="flex-1 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)] p-2 -ml-2"
            >
              Menu
            </button>
          </div>

          <div className="hidden md:flex flex-1 items-center gap-8 text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/80">
            <Link
              href="/"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Home
            </Link>
            <SmoothAnchor
              href="/#bouquets"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Bouquets
            </SmoothAnchor>
            <SmoothAnchor
              href="/#services"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Services
            </SmoothAnchor>
            <Link
              href="/about"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              About
            </Link>
            <SmoothAnchor
              href="/#appointment"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              Appointment
            </SmoothAnchor>
          </div>

          <Link
            href="/"
            className="text-xl md:text-2xl font-serif font-light text-[var(--charcoal)] text-center flex-1 md:flex-none whitespace-nowrap"
          >
            After Sunday Florals
          </Link>

          <div className="flex-1 flex justify-end items-center gap-8 text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/80 hidden md:flex">
            <a
              href="https://www.instagram.com/aftersundayflorals/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="After Sunday Florals on Instagram"
              className="inline-flex items-center gap-2 hover:text-[var(--charcoal)] transition-colors"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.75"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              <span>@aftersundayflorals</span>
            </a>
            <a
              href="tel:+212710452650"
              className="hover:text-[var(--charcoal)] transition-colors"
            >
              +212 710 452 650
            </a>
          </div>

          <div className="flex-1 md:hidden flex justify-end">
            <Link
              href="/inquire"
              className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)] p-2 -mr-2"
            >
              Inquire
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--ivory)] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex flex-col items-center gap-8 text-sm tracking-[0.3em] uppercase text-[var(--charcoal)]">
          <Link
            href="/"
            onClick={toggleMenu}
            className="hover:text-[var(--sage)] transition-colors"
          >
            Home
          </Link>
          <SmoothAnchor
            href="/#bouquets"
            onClick={toggleMenu}
            className="hover:text-[var(--sage)] transition-colors"
          >
            Bouquets
          </SmoothAnchor>
          <SmoothAnchor
            href="/#services"
            onClick={toggleMenu}
            className="hover:text-[var(--sage)] transition-colors"
          >
            Services
          </SmoothAnchor>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="hover:text-[var(--sage)] transition-colors"
          >
            About
          </Link>
          <SmoothAnchor
            href="/#appointment"
            onClick={toggleMenu}
            className="hover:text-[var(--sage)] transition-colors"
          >
            Appointment
          </SmoothAnchor>
          <Link
            href="/inquire"
            onClick={toggleMenu}
            className="hover:text-[var(--sage)] transition-colors text-[var(--sage)]"
          >
            Inquire
          </Link>
        </nav>

        <div className="mt-12 flex flex-col items-center gap-4 text-[10px] tracking-widest uppercase text-[var(--charcoal)]/60">
          <a href="#">@aftersundayflorals</a>
          <a href="tel:+212710452650">+212 710 452 650</a>
        </div>
      </div>
    </>
  );
}
