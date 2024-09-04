"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const DashboardHeader = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div className="flex justify-between items-center mb-4">
      <button className="text-color-accent text-2xl" onClick={handleBack}>
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-color-secondary text-2xl font-bold">{title}</h3>
    </div>
  );
};

export default DashboardHeader;
