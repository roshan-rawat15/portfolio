import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        © 2025 Roshan Kumar. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Components), TypeScript, Tailwind CSS,
        Framer Motion, Shadcn UI, Vercel hosting.
      </p>
    </footer>
  );
}