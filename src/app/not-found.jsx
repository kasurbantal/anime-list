"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={55} className="text-color-secondary" />
        <h2 className="text-color-secondary text-4xl font-bold">NOT FOUND</h2>
        <p className="text-color-primary">Could not find requested resource</p>
        <button
          onClick={() => router.back()}
          className="text-color-bright hover:text-color-secondary transition-all underline"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
