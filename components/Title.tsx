import React from "react";

export default function Title(props: { title: string }) {
  return (
    <h2
      className=" font-[var(--font-weight-semibold)] tracking-tight text-balance break-words  text-[var(--font-size-xl)] md:text-[var(--font-size-5xl)] text-left"
      style={{ color: "var(--color-text-primary)" }}
    >
      {props.title}
    </h2>
  );
}
