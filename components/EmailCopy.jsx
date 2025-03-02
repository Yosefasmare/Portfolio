"use client";
import { useState } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Copy, CopyCheck } from "lucide-react";

export default function EmailCopy() {
  const email = "yosidev8@gmail.com"; // Replace with your email
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset after 2 seconds
  };

  return (
    <HoverBorderGradient
      onClick={copyToClipboard}
      className="flex cursor-pointer py-3 px-7 font-bold capitalize gap-3 items-center transition-all duration-300"
    >
      {copied ? "Email Copied" : "Copy My Email"}
      {copied ? <CopyCheck className="text-green-400" /> : <Copy />}
    </HoverBorderGradient>
  );
}
