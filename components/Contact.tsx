"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const toastId = toast.loading("Sending your message...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: formData.subject,
          from_email: formData.email,
          message: formData.message,
          to_email: process.env.NEXT_PUBLIC_EMAIL!,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      toast.success("Message sent successfully! 🎉", { id: toastId });
      setFormData({ subject: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("Oops! Something went wrong. Please try again.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-[var(--space-16)]  min-h-[calc(100vh-10rem)]">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-8)] lg:gap-[var(--space-12)]">
        <div className="flex justify-center items-center">
          {/* <Image
            width={800}
            height={800}
            src="/form.png"
            alt="form"
            className="w-auto"
            style={{ zIndex: "var(--z-background)" }}
          /> */}
          <div className="text-[var(--color-text-primary)] font-[var(--font-weight-extrabold)] tracking-tight text-balance break-words leading-[1.5] text-3xl md:text-6xl  relative">
            Let's build something AWESOME!
          </div>
        </div>

        <div className="mt-[var(--space-8)] max-w-2xl" id="contact">
          <p className="text-[var(--color-text-secondary)] mb-[var(--space-8)] leading-[var(--line-height-relaxed)]">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Send me a message and I'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-[var(--space-6)]">
            <div>
              <label
                htmlFor="subject"
                className="block text-[var(--font-size-sm)] font-[var(--font-weight-medium)] mb-[var(--space-2)]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-[var(--space-4)] py-[var(--space-3)] bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--radius-lg)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-[var(--transition-base)]"
                placeholder="Looking for a React developer"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[var(--font-size-sm)] font-[var(--font-weight-medium)] mb-[var(--space-2)]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-[var(--space-4)] py-[var(--space-3)] bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--radius-lg)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-[var(--transition-base)]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[var(--font-size-sm)] font-[var(--font-weight-medium)] mb-[var(--space-2)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-[var(--space-4)] py-[var(--space-3)] bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--radius-lg)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-[var(--transition-base)] resize-vertical"
                placeholder="Hi Stanley, let's work together!"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="border-1 var(--color-primary) px-[var(--space-4)] py-[var(--space-2)] rounded text-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
