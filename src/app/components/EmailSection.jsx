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
      <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8 sm:p-12 border border-indigo-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-600 mb-6 max-w-sm leading-relaxed">
              I&apos;m currently open to new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll always get back to you!
            </p>
            <div className="flex flex-row gap-3">
              <Link
                href="https://github.com/Alex-Ojukwu"
                className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <Image src={GithubIcon} alt="Github" width={24} height={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alex-ojukwu-a17852365/"
                className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div>
            {emailSubmitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-800 font-semibold text-lg">Message sent!</p>
                  <p className="text-slate-500 text-sm mt-1">I&apos;ll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="text-slate-700 block mb-1.5 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-white border border-slate-200 placeholder-slate-400 text-slate-800 text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-slate-700 block mb-1.5 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-white border border-slate-200 placeholder-slate-400 text-slate-800 text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    placeholder="Just saying hi"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-slate-700 block mb-1.5 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="bg-white border border-slate-200 placeholder-slate-400 text-slate-800 text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
                    placeholder="Let&apos;s talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
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
