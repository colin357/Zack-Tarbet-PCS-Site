"use client";

import { CONFIG } from "@/data/vaClass";

const T = CONFIG.THEME;

/**
 * The hero "Save my spot" button. It smooth-scrolls to the sign-up form by
 * element id rather than being an <a href="#...">, so it never writes a hash
 * onto the URL. That's deliberate: a hash in the URL causes the browser to jump
 * straight to the form on later reloads, back-navigation, or shared links —
 * which we don't want on a landing page that should always open at the top.
 */
export default function SaveSpotButton({
  targetId,
  children,
}: {
  targetId: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: T.accent,
        color: T.accentInk,
        padding: "1rem 2.5rem",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: 700,
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
