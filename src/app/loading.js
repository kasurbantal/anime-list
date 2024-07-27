"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center custom-loader"></div>;
    </div>
  );
}
