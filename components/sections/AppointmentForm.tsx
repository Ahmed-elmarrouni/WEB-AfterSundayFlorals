"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Bouquet order",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Inquiry: ${formData.inquiryType} - ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "N/A"}\n` +
        `Type: ${formData.inquiryType}\n` +
        `Preferred Date: ${formData.date || "Flexible/None"}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:ahmedelmarrouni1@gmail.com?subject=${subject}&body=${body}`;
    alert("Your email app should open with the inquiry prepared.");
  };

  return (
    <section
      id="appointment"
      className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[var(--ivory)] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[var(--charcoal)] leading-tight">
            Start an <span className="italic">inquiry</span>
          </h2>
          <p className="text-sm font-light text-[var(--charcoal)]/70">
            Orders are confirmed by message. No payment is taken on this
            website. Once you submit, your email app will open to send us the
            details.
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/60"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-[var(--charcoal)]/20 bg-transparent py-2 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--charcoal)] transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/60"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-[var(--charcoal)]/20 bg-transparent py-2 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--charcoal)] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/60"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-[var(--charcoal)]/20 bg-transparent py-2 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--charcoal)] transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="date"
                  className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/60"
                >
                  Preferred Date (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next Friday"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border-b border-[var(--charcoal)]/20 bg-transparent py-2 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--charcoal)] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="inquiryType"
                className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/60"
              >
                Inquiry Type
              </label>
              <select
                required
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full border-b border-[var(--charcoal)]/20 bg-transparent py-2 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--charcoal)] transition-colors appearance-none rounded-none"
              >
                <option value="Bouquet order">Bouquet order</option>
                <option value="Studio composition">Studio composition</option>
                <option value="Weekly arrangements">Weekly arrangements</option>
                <option value="Event / tablescape">Event / tablescape</option>
                <option value="Studio appointment">Studio appointment</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[10px] tracking-[0.2em] uppercase text-[var(--charcoal)]/60"
              >
                Message / Details
              </label>
              <textarea
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-[var(--charcoal)]/20 bg-transparent py-2 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--charcoal)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-fit mt-8 px-8 py-3 bg-[var(--charcoal)] text-[var(--ivory)] text-[10px] tracking-[0.25em] uppercase hover:bg-black transition-colors rounded-none"
            >
              Prepare inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
