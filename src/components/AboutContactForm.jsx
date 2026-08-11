"use client";

import { useState } from "react";

/*
  ─── Google Sheets Integration ───
  This form POSTs data to a Google Apps Script Web App that
  writes each submission as a new row in a Google Sheet.

  HOW TO SET UP:
  1. Open Google Sheets → Extensions → Apps Script
  2. Paste this code:

     function doPost(e) {
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       var data = JSON.parse(e.postData.contents);
       sheet.appendRow([
         new Date(),
         data.name,
         data.email,  
         data.phone,
         data.institution,
         data.message
       ]);
       return ContentService
         .createTextOutput(JSON.stringify({ status: "success" }))
         .setMimeType(ContentService.MimeType.JSON);
     }

  3. Deploy → New Deployment → Web App → Anyone → Deploy
  4. Copy the URL and paste it below as GOOGLE_SCRIPT_URL
*/

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyn-LUgflp4b7KSpJPze5bpd586Qh6a7BPLO4nvmlwVod-5Zn5N4QOOfJKJ8-7U-CY7/exec";

export default function AboutContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        message: "",
      });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-xl bg-gray-100/80 border border-gray-200 text-charcoal font-body text-[0.88rem] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-300 transition-all duration-300";
  const labelClass =
    "block font-header font-semibold text-[0.75rem] text-charcoal mb-1 tracking-wide uppercase";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-[16px] rounded-[20px] border border-gray-200/80 shadow-xl p-6 space-y-3.5"
    >
      <div>
        <h3 className="font-header font-[800] text-charcoal text-[1.2rem] leading-tight mb-0.5">
          Get in Touch
        </h3>
        <p className="font-body text-gray-400 text-[0.82rem]">
          We&apos;d love to hear from you.
        </p>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="about-name" className={labelClass}>
          Full Name
        </label>
        <input
          id="about-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass}
          disabled={status === "sending"}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="about-email" className={labelClass}>
          Email
        </label>
        <input
          id="about-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClass}
          disabled={status === "sending"}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="about-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="about-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className={inputClass}
          disabled={status === "sending"}
        />
      </div>

      {/* Institution */}
      <div>
        <label htmlFor="about-institution" className={labelClass}>
          Institution / Organization
        </label>
        <input
          id="about-institution"
          name="institution"
          type="text"
          value={formData.institution}
          onChange={handleChange}
          placeholder="Your school, college, or company"
          className={inputClass}
          disabled={status === "sending"}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="about-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="about-message"
          name="message"
          rows="3"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help?"
          className={`${inputClass} resize-none`}
          disabled={status === "sending"}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`btn-shine relative overflow-hidden w-full py-3 rounded-xl font-header font-bold text-[0.9rem] tracking-wide shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${status === "success"
          ? "bg-green-600 hover:bg-green-700 text-white"
          : status === "error"
            ? "bg-red-500 hover:bg-red-600 text-white"
            : status === "sending"
              ? "bg-blue-400 text-white cursor-wait"
              : "bg-blue-600 hover:bg-blue-700 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] text-white"
          }`}
      >
        {status === "sending" && (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        )}
        {status === "success" && "✓ Message Sent Successfully!"}
        {status === "error" && "⚠ Failed — Please Try Again"}
        {status === "idle" && "Send Message"}
      </button>
    </form>
  );
}
