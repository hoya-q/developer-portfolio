"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    // AOS 초기화 - 한 번만 실행
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
      once: false,
      offset: 30,
      delay: 0,
    });
  }, []);

  return children;
}
