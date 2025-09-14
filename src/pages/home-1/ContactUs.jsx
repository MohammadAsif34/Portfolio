import React from "react";
import { about } from "../../data/about";

const ContactUs = () => {
  return (
    <>
      <div id="contact" className=" pt-8 pb-20 scroll-mt-10">
        <h1 className="pb-10 text-4xl text-center font-bold text-gray-400">
          Contact Us
        </h1>
        <div className="flex gap-16 max-md:flex-col ">
          {/* <p className="flex-1"></p> */}
          <p className="flex-1 px-10 text-justify font-thin indent-5">
            {about}
            <div className="text-end">
              <button className="font-light text-blue-400 cursor-pointer hover:underline">
                Read more
              </button>
            </div>
          </p>
          <div className="flex-1 py-8 md:mx-20 bg-gray-900 rounded-2xl ">
            <h1 className="pb-4 text-center text-3xl capitalize ">
              get in touch
            </h1>
            <form action="" className=" px-8 text-gray-400">
              <label className="px-2">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="w-full h-10 px-4 rounded-full border mt-1 mb-2 outline-0 focus:border-purple-400 transition-all duration-300"
                placeholder="Fullname"
              />
              <label className="px-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full h-10 px-4 rounded-full border mt-1 mb-2 outline-0 focus:border-purple-400 transition-all duration-300"
                placeholder="Email"
              />
              {/* <label className="px-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full h-8 px-4 rounded-full border mt-1 mb-2"
                placeholder="Phone Number"
              /> */}
              <label className="px-2">Message</label>
              <textarea
                name="message"
                className="w-full min-h-20 p-4 rounded-3xl border mt-1 mb-4 outline-0 focus:border-purple-400 transition-all duration-300"
                placeholder="Type your messager here..."
              />
              <div className="text-end">
                <button
                  type="button"
                  className="px-6 py-2 ml-4 border rounded-full cursor-pointer hover:text-purple-400 transition-all duration-300"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 ml-4 text-white bg-purple-500 rounded-full cursor-pointer hover:bg-purple-600 transition-all duration-300"
                >
                  Send
                </button>
                {/* <button>Send</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
