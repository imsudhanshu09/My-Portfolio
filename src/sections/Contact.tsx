"use client";
import React, { useState } from "react";
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden isolate z-10">
          <div
            className="absolute inset-0 opacity-5 z-0 pointer-events-none"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-between relative z-10">
            {/* Left content (text) */}
            <div className="flex-1 text-left mt-10">
              <h2 className="font-serif text-2xl md:text-3xl mb-2">
                Let&apos;s Connect!
              </h2>
              <p className="text-sm md:text-base mb-4">
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* Right content (form or success) */}
            <div className="flex-1 w-full">
              {emailSubmitted ? (
                <div className="flex justify-center items-center h-full min-h-[250px]">
                  <p className="text-cyan-900 font-semibold text-lg text-center">
                    ✅ Email sent successfully!
                  </p>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID" // replace with your Formspree form ID
                  method="POST"
                  onSubmit={() => setEmailSubmitted(true)}
                  className="flex flex-col gap-4 z-10"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="px-4 py-2 rounded-lg border border-white/20 bg-white/30 text-black placeholder-gray/80 w-full"
                  />
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="px-4 py-2 rounded-lg border border-white/20 bg-white/30 text-black placeholder-gray/80 w-full"
                  />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    required
                    className="px-4 py-2 rounded-lg border border-white/20 bg-white/30 text-black placeholder-gray/80 w-full"
                    rows={4}
                  />
                  <button
                    type="submit"
                    className="text-white bg-gray-600 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full mx-auto block md:w-max border border-gray-900 hover:bg-gray-800"
                  >
                    <span className="font-semibold">Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
