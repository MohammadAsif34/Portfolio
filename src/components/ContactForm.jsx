import React from "react";

export default function ContactForm() {
  return (
    <form className="max-w-lg mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-[#ff00ff]/40 shadow-[0_0_15px_#ff00ff]">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 mb-4 rounded bg-black/40 border border-[#00f5d4]/40 text-white"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 mb-4 rounded bg-black/40 border border-[#00f5d4]/40 text-white"
      />
      <textarea
        placeholder="Your Message"
        rows="5"
        className="w-full p-3 mb-4 rounded bg-black/40 border border-[#00f5d4]/40 text-white"
      />
      <button
        type="submit"
        className="w-full py-3 rounded bg-gradient-to-r from-[#00f5d4] to-[#ff00ff] text-black font-bold hover:scale-105 transition"
      >
        Send Message
      </button>
    </form>
  );
}
