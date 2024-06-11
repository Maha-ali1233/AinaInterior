import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Welcome to Aina Renovation & Interior Designing
          </h1>
          <p className="text-gray-500">Transforming Spaces, Creating Dreams</p>
          <p className="mt-3">Our Services:</p>
          <ul className="leading-9">
            <li>🏠 Interior Designing</li>
            <li>🔨 Renovation & Remodeling</li>
            <li>🎨 Custom Furniture Design</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Explore Our Expertise
          </h1>
          <p className="text-gray-500">Experience the Art of Living</p>
          <p className="mt-3">
            <b>Design Styles 🌟</b>
          </p>
          <ul className="leading-9">
            <li>Modern</li>
            <li>Contemporary</li>
            <li>Traditional</li>
            <li>Eclectic</li>
          </ul>
          <p className="mt-3">
            <b>Portfolio 🖼️</b>
          </p>
          <ul className="leading-9">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Hospitality</li>
            <li>Office Spaces</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Contact Us Today
          </h1>
          <p className="text-gray-500">
            Let's Create Your Dream Space Together
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+92) 335 220 5375</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
