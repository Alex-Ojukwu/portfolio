"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };
    const response = await fetch("/api/send", options);
    const resData = await response.json();
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="bg-white/[0.04] rounded-3xl p-8 sm:p-12 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              I&apos;m currently open to new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll always get back to you!
            </p>
            <div className="flex flex-row gap-3">
              <Link
                href="https://github.com/Alex-Ojukwu"
                aria-label="GitHub profile"
                className="w-11 h-11 flex items-center justify-center rounded-full liquid-glass hover:bg-white/10 transition-colors"
              >
                <Image src={GithubIcon} alt="" width={22} height={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alex-ojukwu-a17852365/"
                aria-label="LinkedIn profile"
                className="w-11 h-11 flex items-center justify-center rounded-full liquid-glass hover:bg-white/10 transition-colors"
              >
                <Image src={LinkedinIcon} alt="" width={22} height={22} />
              </Link>
            </div>
          </div>
          <div>
            {emailSubmitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Message sent!</p>
                  <p className="text-gray-400 text-sm mt-1">I&apos;ll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="text-gray-300 block mb-1.5 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-white/5 border border-white/15 placeholder-gray-500 text-white text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-gray-300 block mb-1.5 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-white/5 border border-white/15 placeholder-gray-500 text-white text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
                    placeholder="Just saying hi"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-gray-300 block mb-1.5 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="bg-white/5 border border-white/15 placeholder-gray-500 text-white text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition resize-none"
                    placeholder="Let&apos;s talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
