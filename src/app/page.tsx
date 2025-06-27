'use client';

import dynamic from "next/dynamic";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";

const Counter = dynamic(() => import("@/components/counter/counter"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground transition-colors">
      <h1 className="text-3xl font-bold underline">
        Welcome to Colabdevs boilerplate next 2025
      </h1>
      <p className="mt-4">
        This is a starter template for Next.js applications with Tailwind CSS and
        TypeScript,
      </p>
      <small>
        including technologies like authentication, shadcn/ui, React Query, and Axios.
      </small>
      <div className="mt-8">
      </div>
      <Counter />
      <ThemeSwitcher />
    </div>
  );
}
