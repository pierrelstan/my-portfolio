"use client";

import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { X } from "lucide-react";
import Title from "./Title";
import { timeline } from "@/data/timeline";

// Accessibility fix (avoid SSR warnings)
if (typeof window !== "undefined") {
  try {
    Modal.setAppElement("#__next");
  } catch (error) {
    console.warn("Modal setAppElement failed:", error);
  }
}

export default function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<(typeof timeline)[0] | null>(
    null
  );
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("animate-pop", "opacity-100", "scale-100");
          } else {
            el.classList.remove("animate-pop", "opacity-100", "scale-100");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const image = hero.querySelector<HTMLElement>(".hero-image");
    const title = hero.querySelector<HTMLElement>(".hero-title");
    const para = hero.querySelector<HTMLElement>(".hero-para");
    const icons = hero.querySelector<HTMLElement>(".hero-icons");

    const restart = (node: Element | null, cls: string) => {
      if (!node) return;
      node.classList.remove(cls);
      void (node as HTMLElement).offsetWidth;
      node.classList.add(cls);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            restart(image, "animate-pop");
            restart(title, "animate-fade-up-slow");
            restart(para, "animate-fade-up-slow");
            restart(icons, "animate");
          } else {
            image?.classList.remove("animate-pop");
            title?.classList.remove("animate-fade-up-slow");
            para?.classList.remove("animate-fade-up-slow");
            icons?.classList.remove("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    const onFocus = () => {
      restart(image, "animate-pop");
      restart(title, "animate-fade-up-slow");
      restart(para, "animate-fade-up-slow");
      restart(icons, "animate");
    };

    hero.addEventListener("focus", onFocus, true);
    return () => {
      observer.disconnect();
      hero.removeEventListener("focus", onFocus, true);
    };
  }, []);

  const openModal = (item: (typeof timeline)[0]) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const handleImageError = (id: string) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="portfolio"
      ref={heroRef}
      className="mt-[var(--space-20)] min-h-[calc(100vh-10rem)] z-[1140] flex flex-col justify-center"
    >
      <div className="text-center mb-[var(--space-8)]">
        <Title title="Portfolio" />
      </div>

      <ul className=" stagger-parent mt-[var(--space-4)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-[var(--space-10)]">
        {timeline.map((item, idx) => (
          <li
            key={item.id}
            //@ts-ignore
            ref={(el) => (itemRefs.current[idx] = el)}
            className="portfolio-card  border p-4 border-[#333] rounded-[var(--radius-lg)] list-none opacity-0 transform scale-95 transition-all duration-500"
          >
            <div className="w-[200px] flex flex-col items-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openModal(item);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(item);
                  }
                }}
                aria-label={`View details for ${item.company}`}
                className=" group w-full aspect-square border-[#333] p-[var(--space-4)] transition-transform duration-300 flex flex-col items-center justify-center relative"
              >
                {/* Image with Fallback */}
                {imageError[item.id] ? (
                  <div className="w-[120px] h-[120px] bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500">Image Not Found</span>
                  </div>
                ) : (
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={100}
                    height={100}
                    priority
                    onError={() => handleImageError(item.id)}
                    className="rounded-full"
                  />
                )}
              </button>

              <div className="flex flex-col justify-center items-center text-center h-full w-full mt-3">
                <strong className="block mb-[var(--space-2)] break-words font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                  {item.company}
                </strong>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openModal(item);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(item);
                    }
                  }}
                  aria-label={`View details for ${item.company}`}
                  className="p-[var(--space-2)] text-sm font-[var(--font-weight-medium)] text-[var(--color-primary)] border border-[var(--color-primary)] rounded hover:bg-[var(--color-primary)] hover:text-[#fff] transition-colors duration-300 mt-2 flex items-center justify-center"
                >
                  More Details
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        style={{
          content: {
            backgroundColor: "#bfc7bf",
            border: "none",
            padding: 0,
            inset: 0,
            position: "fixed",
            zIndex: 1100,
          },
          overlay: {
            zIndex: 1050,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
        closeTimeoutMS={200}
      >
        {selectedItem && (
          <div className="flex flex-col h-full mx-auto px-8 md:px-32 py-8">
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
              <h2 className="text-2xl font-bold text-[var(--color-primary)]">
                {selectedItem.company}
              </h2>
              <button
                onClick={closeModal}
                className="text-black hover:text-gray-500 transition-colors duration-200 p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pt-6 space-y-6 text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line">
              <div className="flex justify-center items-center mb-[90px] mt-[90px]">
                <Image
                  src={selectedItem.projectImage}
                  alt={`${selectedItem.company} logo`}
                  width={800}
                  height={800}
                  priority
                />
              </div>
              <p>{selectedItem.description}</p>

              {selectedItem.isLeadership && (
                <div>
                  <strong>Leadership:</strong>
                  <p>{selectedItem.leadership}</p>
                </div>
              )}

              <div>
                <strong>Full Stack Web and Mobile Developer:</strong>
                <p>{selectedItem.developer}</p>
              </div>

              <div>
                <strong>Tech Stack:</strong>
                <p>{selectedItem.techStack.join(", ")}</p>
              </div>

              <div>
                <strong>Project Outcome:</strong>
                <p>{selectedItem.projectOutcome}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
