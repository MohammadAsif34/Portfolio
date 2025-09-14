import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Projects from "./Projects";

const Home1 = () => {
  return (
    <>
      <main className="mulish-1 relative ">
        <div className="absolute inset-0 bg-[url(./bg-main.svg)] bg-fixed bg-center opacity-5"></div>
        <HeroSection />
        <div className="px-[8%] relative z-10 scroll-mt-10">
          <AboutUs />
          <Projects />
          <ContactUs />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home1;
