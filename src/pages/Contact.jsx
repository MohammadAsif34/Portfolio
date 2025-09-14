import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import React from "react";


export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-white">
      <SectionTitle title="Contact Me" />
      <ContactForm />
    </section>
  );
}
