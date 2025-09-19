import { timeline } from "@/data/timeline";
import React, { useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
import Title from "./Title";
import Image from "next/image";

// Set the app element for accessibility
if (typeof window !== "undefined") {
  try {
    Modal.setAppElement("#__next");
  } catch (error) {
    console.warn("Modal setAppElement failed:", error);
  }
}

export default function PortFolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<(typeof timeline)[0] | null>(
    null
  );

  const openModal = (item: (typeof timeline)[0]) => {
    console.log("Opening modal for:", item.company);
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <section
      className="mt-[var(--space-20)]  min-h-[calc(100vh-10rem)] z[1140]"
      id="portfolio"
    >
      <Title title="My Portfolio" />

      <div className="p-20">
        <div className="mt-[var(--space-4)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[var(--space-10)]">
          {timeline.map((item) => (
            <li key={item.id} className="list-none">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openModal(item);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(item);
                  }
                }}
                aria-label={`View details for ${item.company}`}
              >
                <div
                  className="group justify-center items-center  aspect-square border p-[var(--space-4)] rounded-full transition-[var(--transition-base)] flex flex-col hover:shadow-[var(--shadow-lg)] relative cursor-pointer"
                  style={{
                    borderColor: "var(--card-border)",
                    backgroundColor: "var(--card-bg)",
                  }}
                >
                  <Image
                    src={item.imageUrl}
                    alt="Background"
                    width={100}
                    height={100}
                    className="object-cover rounded-full"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-0">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backdropFilter: "blur(8px)",
                        background:
                          "linear-gradient(135deg, var(--color-surface-hover)/80 0%, var(--color-primary)/30 50%, var(--color-surface-hover)/80 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full opacity-30"
                      style={{
                        backdropFilter: "blur(12px)",
                        background:
                          "radial-gradient(circle at center, var(--color-primary)/50 0%, transparent 70%)",
                      }}
                    />
                    <span
                      className="relative z-10 text-center text-[var(--button-primary-text)] font-[var(--font-weight-semibold)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center rounded-full"
                      style={{
                        width: 166,
                        height: 166,
                        minWidth: 166,
                        minHeight: 166,
                        background:
                          "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary) 60%, transparent 100%)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        opacity: 0.95,
                        transition: "background 0.3s",
                      }}
                    >
                      More Details
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center h-full w-full">
                  <strong className="block mb-[var(--space-2)] break-words font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                    {item.company}
                  </strong>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            backgroundColor: "var(--background)",
            border: "none",
            padding: 0,
            inset: 0,
            position: "fixed",
            zIndex: 1100,
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1050,
          },
        }}
        closeTimeoutMS={200}
      >
        {selectedItem && (
          <div className="flex flex-col h-full mx-auto px-8 md:px-32 ">
            <div className="flex justify-between items-center border-b border-gray-800">
              <h2
                className="text-2xl font-bold text-[var(--color-primary)]"
                style={{ color: "var(--color-primary)" }}
              >
                {selectedItem.company}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pt-[var(--space-6)]">
              <div className="max-w-4xl  space-y-6">
                <div className="space-y-4">
                  <div className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line">
                    {selectedItem.description}
                  </div>
                </div>

                <div>
                  {selectedItem.isLeadership && (
                    <>
                      <strong className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                        Leadership:
                      </strong>
                      <div className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                        {selectedItem.leadership}
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <strong className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                    Full Stack Web and Mobile Developer:
                  </strong>
                  <div className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                    {selectedItem.developer}
                  </div>
                </div>
                <div>
                  <strong className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                    Tech Stack:
                  </strong>
                  <div className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                    {selectedItem.techStack.join(", ")}
                  </div>
                </div>
                <div>
                  <strong className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                    Project Outcome:
                  </strong>
                  <div className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line text-sm">
                    {selectedItem.projectOutcome}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
