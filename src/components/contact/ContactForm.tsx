"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactCategories } from "@/data/contact";
import type { ContactFormData } from "@/types";
import { EventButton } from "@/components/ui/EventButton";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  category: "general",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClasses =
    "w-full bg-surface border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-red/50 transition-colors";

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputClasses}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={inputClasses}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-zinc-400 mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm text-zinc-400 mb-2">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
          className={inputClasses}
        >
          {contactCategories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className={`${inputClasses} resize-none`}
          required
        />
      </div>

      <EventButton type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </EventButton>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-sm"
        >
          Placeholder — Message logged to console. Connect to your email service
          when ready.
        </motion.p>
      )}
    </motion.form>
  );
}
