"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // trigger CSS stagger animations after mount
    const timeout = setTimeout(() => {
      const root = containerRef.current;
      if (!root) return;
      // add animate to all stagger parents inside this component
      root.classList.add("animate");
      const nodes = root.querySelectorAll<HTMLElement>(".stagger-parent");
      nodes.forEach((n) => n.classList.add("animate"));
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

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
    <>
      <section
        className="min-h-[calc(100vh-10rem)] mb-20 flex flex-col justify-center items-center mt-[100px]"
        id="contact"
      >
        <Toaster position="top-right" reverseOrder={false} />

        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row justify-center items-center gap-10"
        >
          <div className="heading text-[var(--color-text-primary)] text-center font-extrabold text-3xl md:text-7xl">
            <span className="animate-fade-up">
              Let's build something AWESOME!
            </span>
          </div>

          <div className="mt-8 max-w-md">
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed text-center animate-fade-up">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Send me a message and I'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 font-medium text-black"
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
                  className="w-full px-4 py-3 bg-background border border-[var(--card-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-primary)] placeholder-[var(--color-text-muted)]"
                  placeholder="Looking for a React developer"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-black"
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
                  className="w-full px-4 py-3 bg-background border border-[var(--card-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-primary)] placeholder-[var(--color-text-muted)]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-black"
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
                  className="w-full px-4 py-3 bg-background border border-[var(--card-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-primary)] placeholder-[var(--color-text-muted)] resize-vertical"
                  placeholder="Hi Stanley, let's work together!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-[var(--color-primary)] px-4 py-2 rounded text-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-primary)] hover:text-white text-center"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
