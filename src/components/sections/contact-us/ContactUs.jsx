import React from "react";
import SectionTitle from "../../component/SectionTitle";
import Button from "../../component/Button";
import ContactForm from "../../component/ContactForm";

const ContactUs = () => {
  return (
    <>
      <section id="contact" className="py-14 scroll-mt-10 ">
        <div className="flex gap-5 max-md:flex-col  ">
          <ContactBanner />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
const ContactBanner = () => {
  return (
    <>
      <section
        id="about"
        className="relative flex-1  scroll-mt-20 bg-gradient-to-br rounded-2xl from-gray-900 via-gray-800 to-black text-white"
      >
        <div className="flex- f lex justify-center items-center">
          <img
            src="/img-2.png"
            className="w-80% h-f ull object-cover scale-x-[-1]"
            alt=""
          />
        </div>
        {/* Decorative Gradient Glow */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-600/20 blur-3xl rounded-full"></div>
      </section>
    </>
  );
};
