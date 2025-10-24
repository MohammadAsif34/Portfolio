import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const defaultForm = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  message: "",
};
export default function ContactForm() {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (form.phone.length != 10) console.error(form);
    console.error("Something went wrong!");
    alert("Error: Something went wrong!!");
    setForm(defaultForm);
  };

  return (
    <>
      <form
        className="flex-1 py-8 md:px-8 md:mx-0 bg-gray-900 rounded-2xl"
        onSubmit={sendForm}
      >
        <SectionTitle title={"Get in Touch"} />
        <div className=" px-4 md:px10 text-gray-400">
          <div className="grid md:grid-cols-2 gap-x-4">
            <div>
              <label className="px-2">First Name</label>

              <input
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                className="w-full h-10 px-4 rounded-lg border mt-1 mb-2 outline-0 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/70 transition-all duration-300"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="px-2">Last Name</label>
              <input
                type="text"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                className="w-full h-10 px-4 rounded-lg border mt-1 mb-2 outline-0 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/70 transition-all duration-300"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-4">
            <div>
              <label className="px-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-10 px-4 rounded-lg border mt-1 mb-2 outline-0 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/70 transition-all duration-300"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="px-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full h-10 px-4 rounded-lg border mt-1 mb-2 outline-0 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/70 transition-all duration-300"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <label className="px-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full min-h-20 p-4 rounded-xl border mt-1 mb-4 outline-0 focus:border-purple-500/0 focus:ring-2 focus:ring-purple-500/70 transition-all duration-300"
            placeholder="Type your messager here..."
            required
          />
          <div className="text-end">
            <button
              type="button"
              className="px-6 py-2 ml-4 border rounded-xl cursor-pointer hover:text-purple-400 transition-all duration-300"
            >
              cancel
            </button>
            <Button type={"submit"} title={"Send"} className=" ml-4" />
            {/* <button
                  type="submit"
                  className="px-6 py-2 ml-4 text-white bg-purple-500 rounded-full cursor-pointer hover:bg-purple-600 transition-all duration-300"
                >
                  Send
                </button> */}
          </div>
        </div>
      </form>
    </>
  );
}
