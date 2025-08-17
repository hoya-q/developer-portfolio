"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export default function TopButton() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showTopButton) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 cursor-pointer w-12 h-12 right-8 z-40 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/20"
      aria-label="맨 위로 이동"
    >
      <ArrowUp size={36} />
    </Button>
  );
}
