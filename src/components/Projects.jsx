import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const sliderRef = useRef(null);

  const projects = [
    {
      title: "Movie Recommendation App",
      image: "assets/frontend.png",
      description:
        "An AI-powered movie recommendation app that suggests films based on user preferences with a conversational chat interface.",
      tech: ["Python", "Streamlit", "LangChain", "Prompt Engineering"],
      features: [
        "AI-driven movie suggestions",
        "Conversational chat interface",
        "Memory-based responses",
      ],
    },
    {
      title: "Portfolio Website",
      image: "assets/frontend.png",
      description:
        "A responsive portfolio built with React and Tailwind showcasing projects and skills.",
      tech: ["React", "Tailwind", "JavaScript"],
      features: ["Responsive design", "Project slider", "Dark mode ready"],
    },
  ];

  const [index, setIndex] = useState(1);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  useEffect(() => {
    if (!sliderRef.current) return;

    if (index === projects.length + 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(1);
        sliderRef.current.style.transform = `translateX(-100%)`;
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 0.5s";
        }, 20);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(projects.length);
        sliderRef.current.style.transform = `translateX(-${projects.length * 100}%)`;
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 0.5s";
        }, 20);
      }, 500);
    }
  }, [index, projects.length]);

  return (
    <section id="Projects" className="py-16 px-4 sm:px-8 scroll-mt-20">
      <h1 className="text-3xl font-bold text-center mb-10">My Work</h1>

      {/* Layout wrapper */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

        {/* PREV BUTTON */}
        <button
          onClick={prev}
          className="order-2 sm:order-1 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow"
        >
          ⬅️
        </button>

        {/* SLIDER */}
        <div className="order-1 sm:order-2 relative w-full max-w-md sm:max-w-xl lg:max-w-3xl overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {/* Clone last */}
            <div className="min-w-full flex justify-center">
              <ProjectCard {...projects[projects.length - 1]} />
            </div>

            {projects.map((p, i) => (
              <div key={i} className="min-w-full flex justify-center">
                <ProjectCard {...p} />
              </div>
            ))}

            {/* Clone first */}
            <div className="min-w-full flex justify-center">
              <ProjectCard {...projects[0]} />
            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={next}
          className="order-3 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow"
        >
          ➡️
        </button>
      </div>
    </section>
  );
}