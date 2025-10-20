import React from "react";

export default function Title(props: { title: string }) {
  return (
    <div
      className="text-[var(--color-text-primary)]  font-[var(--font-weight-extrabold)] tracking-tight text-balance break-words leading-[1.5] text-3xl md:text-6xl "
      // className="font-heading  tracking-tight text-balance break-words  text-[var(--font-size-xl)] md:text-[var(--font-size-5xl)] text-left"
      // style={{ color: "var(--color-text-primary)" }}
    >
      {props.title}
    </div>
  );
}
