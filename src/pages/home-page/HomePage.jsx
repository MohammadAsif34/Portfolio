import React from "react";
import HeroSection from "../../components/sections/hero/HeroSection";
import AboutUs from "../../components/sections/about/AboutUs";
import Experience from "../../components/sections/expreience/Experience";
import Projects from "../../components/sections/projects/Projects";
import Certificate from "../../components/sections/certificate/Certificate";
import Skills from "../../components/sections/skills/Skills";
import ContactUs from "../../components/sections/contact-us/ContactUs";
import Footer from "../../components/sections/footer/Footer";

const HomePage = () => {
  return (
    <>
      <main className="mulish-1 relative  ">
        <div className="absolute  inset-0 bg-[url(./bg-main.svg)] bg-fixed bg-center opacity-15"></div>
        <HeroSection />
        <div className=" padding relative  scroll-mt-10 ">
          <AboutUs />
          <Experience />
          <Projects />
          <Certificate />
          <Skills />
          <ContactUs />
        </div>
      </main>
    </>
  );
};

export default HomePage;
