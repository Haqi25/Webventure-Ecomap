"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "search", label: "Search" },
    { id: "testimoni", label: "Testimoni" },
    { id: "about", label: "About Us" },
  ];

  return (
    <nav className="flex justify-between items-center bg-green-50 rounded-full px-8 py-3 fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50">
      <div className="flex items-center gap-2">
        <span className="text-green-600 text-2xl">🌱</span>
        <span className="font-bold text-green-700 text-lg">Media UMKM</span>
      </div>

      <div className="flex gap-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-white text-green-600 font-semibold shadow"
                : "text-green-600 hover:text-green-700"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600">
          Login
        </button>
        <button className="text-green-600 font-semibold">Sign Up</button>
      </div>
    </nav>
  );
}
