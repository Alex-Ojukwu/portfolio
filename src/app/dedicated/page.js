"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const features = [
  {
    title: "Dynamic Interview Question Generation",
    items: [
      "GPT-4 generates contextually relevant questions based on job role",
      "Adaptive questioning that builds on previous answers",
      "Configurable difficulty levels (easy, medium, hard)",
      "3–7 questions per session based on duration",
    ],
  },
  {
    title: "Talking AI Avatar",
    items: [
      "D-ID powered realistic avatar with lip-sync",
      "Natural facial movements and expressions",
      'Professional presenter (default: "Alice")',
      "Persists on screen after speaking for continuous engagement",
    ],
  },
  {
    title: "Real-time Emotion Detection",
    items: [
      "DeepFace + MediaPipe facial expression analysis",
      "7 emotion categories: happy, sad, angry, surprised, fearful, disgusted, neutral",
      "Analysis every 2 seconds during interview",
      "Confidence scores and emotion distribution tracking",
    ],
  },
  {
    title: "Speech-to-Text Transcription",
    items: [
      "OpenAI Whisper API for accurate audio transcription",
      "Supports multiple audio formats (MP3, WAV, WebM, OGG)",
      "Automatic answer submission after recording",
    ],
  },
  {
    title: "Live Webcam Feed",
    items: [
      "Real-time video capture and display",
      "Face detection indicator",
      "Privacy-focused local processing",
    ],
  },
  {
    title: "Intelligent Answer Evaluation",
    items: [
      "GPT-4 evaluates response quality",
      "Contextual feedback based on job role",
      "Scoring and improvement suggestions",
    ],
  },
  {
    title: "Comprehensive Interview Reports",
    items: [
      "Q&A pairs with evaluations",
      "Emotion timeline and distribution",
      "Engagement scores",
      "Overall performance summary",
      "Export-ready analytics",
    ],
  },
  {
    title: "Session Management",
    items: [
      "Unique session IDs",
      "Progress tracking (question X of Y)",
      "Time limits and question caps",
      "Graceful session termination",
    ],
  },
];

const techStacks = [
  {
    label: "Frontend",
    color: "indigo",
    items: [
      { name: "Next.js 14", desc: "React framework for SSR" },
      { name: "React 18", desc: "UI component library" },
      { name: "TypeScript", desc: "Type-safe JavaScript" },
      { name: "CSS3", desc: "Custom styling" },
      { name: "WebRTC APIs", desc: "Media capture" },
      { name: "Canvas API", desc: "Image processing" },
    ],
  },
  {
    label: "Backend",
    color: "violet",
    items: [
      { name: "FastAPI", desc: "Modern Python framework" },
      { name: "Uvicorn", desc: "ASGI server" },
      { name: "Python 3.10+", desc: "Core language" },
      { name: "Pydantic", desc: "Data validation" },
    ],
  },
  {
    label: "AI / ML",
    color: "purple",
    items: [
      { name: "OpenAI GPT-4", desc: "Question generation & evaluation" },
      { name: "Whisper API", desc: "Speech-to-text" },
      { name: "DeepFace", desc: "Facial expression analysis" },
      { name: "MediaPipe", desc: "Face landmark detection" },
      { name: "TensorFlow 2.20", desc: "Deep learning framework" },
      { name: "OpenCV", desc: "Computer vision" },
    ],
  },
  {
    label: "Cloud Services",
    color: "sky",
    items: [
      { name: "D-ID API", desc: "Talking avatar generation" },
      { name: "OpenAI API", desc: "GPT-4 and Whisper endpoints" },
    ],
  },
];

const learnings = [
  {
    title: "Full-Stack Integration",
    items: [
      "Building seamless communication between Next.js frontend and FastAPI backend",
      "Implementing WebSocket connections for real-time data streaming",
      "Managing CORS policies for local development",
      "Handling asynchronous operations across the stack",
    ],
  },
  {
    title: "AI/ML Model Integration",
    items: [
      "Working with multiple AI APIs (OpenAI, D-ID) in a single application",
      "Understanding DeepFace model initialization and TensorFlow compatibility issues",
      "Resolving dependency conflicts (tf-keras requirement for TensorFlow 2.20)",
      "Optimizing ML model performance for real-time applications",
      "Balancing local processing vs cloud APIs",
    ],
  },
  {
    title: "Real-time Media Processing",
    items: [
      "Capturing and processing webcam frames using Canvas API",
      "Implementing efficient base64 encoding for image transmission",
      "Managing audio recording with MediaRecorder API",
      "Handling browser media permissions and error states",
      "Optimizing frame analysis intervals for performance",
    ],
  },
  {
    title: "State Management",
    items: [
      "Managing complex React component state (idle, loading, speaking, completed)",
      "Coordinating multiple asynchronous operations",
      "Session lifecycle management with unique IDs",
      "Progress tracking across multi-step interviews",
    ],
  },
  {
    title: "API Design & Backend Architecture",
    items: [
      "Designing RESTful endpoints with FastAPI",
      "Implementing proper error handling and validation with Pydantic",
      "Structuring code with routers, services, and schemas",
      "Creating reusable service classes (FaceAnalyzer, InterviewFlow)",
      "Managing API rate limits and timeouts",
    ],
  },
  {
    title: "Problem-Solving",
    items: [
      "Debugging TensorFlow/DeepFace compatibility issues",
      "Implementing fallback mechanisms when services fail",
      "Handling asynchronous D-ID avatar generation (polling for completion)",
      "Managing file cleanup for temporary audio files",
    ],
  },
  {
    title: "User Experience Design",
    items: [
      "Creating smooth transitions between interview states",
      "Providing visual feedback (loading indicators, streaming status)",
      "Implementing retry logic for failed operations",
      "Designing intuitive error messages",
    ],
  },
  {
    title: "Development Best Practices",
    items: [
      "Environment variable management for API keys",
      "Writing modular, maintainable code",
      "Implementing proper logging for debugging",
      "Using TypeScript for type safety",
    ],
  },
  {
    title: "Cloud Service Integration",
    items: [
      "Understanding D-ID's asynchronous processing workflow",
      "Managing API authentication (Basic auth format quirks)",
      "Handling webhook alternatives (polling vs streaming)",
      "Cost optimization — when to use cloud vs local processing",
    ],
  },
  {
    title: "Performance Optimization",
    items: [
      "Lazy loading of heavy ML models",
      "Implementing analysis intervals to reduce API calls",
      "Optimizing image quality/size for transmission",
      "Managing memory with proper cleanup on component unmount",
    ],
  },
];

const stackBadgeColors = {
  indigo: "bg-indigo-50 border-indigo-100 text-indigo-700",
  violet: "bg-violet-50 border-violet-100 text-violet-700",
  purple: "bg-purple-50 border-purple-100 text-purple-700",
  sky: "bg-sky-50 border-sky-100 text-sky-700",
};

const stackHeadingColors = {
  indigo: "text-indigo-600",
  violet: "text-violet-600",
  purple: "text-purple-600",
  sky: "text-sky-600",
};

export default function DedicatedPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Alex-Ojukwu.
          </span>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-20 max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Featured Project
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            AI Virtual{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Interview Assistant
            </span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Intelligent interview simulation with real-time emotion analysis, a talking AI avatar, and comprehensive performance reports.
          </p>
        </div>

        {/* Screenshot */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
          <Image
            src="/images/ai-interviewer-screenshot.png"
            alt="AI Virtual Interview Assistant Screenshot"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Full Description */}
        <section className="mb-16">
          <SectionHeading label="Overview" title="Full Description" />
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
            <p className="text-slate-600 leading-relaxed">
              The AI Virtual Interview Assistant is an intelligent, end-to-end interview simulation platform that provides candidates with a realistic, AI-powered practice environment. The system leverages OpenAI&apos;s GPT-4 to conduct dynamic, adaptive interviews while simultaneously analyzing the candidate&apos;s emotional state through real-time facial expression detection using DeepFace and MediaPipe.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The platform features a talking AI avatar (powered by D-ID) that asks questions with natural lip-sync and movements, creating an immersive multimodal experience. Candidates respond verbally, with answers automatically transcribed using OpenAI&apos;s Whisper API. The system generates personalized interview questions based on job role and difficulty level, evaluates answers in real-time, and produces comprehensive performance reports including emotion analytics throughout the session.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This hybrid local-cloud architecture combines the responsiveness of local emotion detection with the sophistication of cloud-based AI services to deliver a seamless, professional interview practice experience.
            </p>
          </div>
        </section>

        {/* Problem I Solved */}
        <section className="mb-16">
          <SectionHeading label="Challenge" title="Problem I Solved" />
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <p className="text-slate-600 mb-6 leading-relaxed">
              Traditional interview preparation faces several critical challenges:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "Limited Practice Opportunities", body: "Candidates struggle to get realistic interview practice without access to human interviewers, leading to nervousness and poor performance in actual interviews." },
                { title: "Lack of Real-time Feedback", body: "Most practice methods don't provide immediate insights into body language, emotional state, or engagement levels during responses." },
                { title: "Static Question Sets", body: "Pre-recorded or scripted interview questions don't adapt to candidate responses, failing to simulate real interview dynamics." },
                { title: "No Emotional Intelligence Training", body: "Candidates can't see how their facial expressions and emotional state might be perceived by interviewers." },
                { title: "Accessibility Barriers", body: "Professional interview coaching is expensive and scheduling can be difficult." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-slate-800">{item.title}: </span>
                    <span className="text-slate-600 text-sm">{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 pt-6">
              <h3 className="font-bold text-slate-900 text-lg mb-3">My Solution</h3>
              <ul className="space-y-2">
                {[
                  "24/7 accessible AI-powered interview practice",
                  "Real-time emotion detection to help candidates understand their non-verbal communication",
                  "Adaptive questioning that responds intelligently to candidate answers",
                  "Comprehensive performance analytics and personalized feedback",
                  "Cost-effective alternative to professional coaching",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <SectionHeading label="Capabilities" title="Key Features" />
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-slate-900 font-bold text-sm leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-500 text-xs">
                      <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <SectionHeading label="Stack" title="Technologies Used" />
          <div className="space-y-5">
            {techStacks.map((stack) => (
              <div key={stack.label} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className={`text-base font-bold mb-4 ${stackHeadingColors[stack.color]}`}>
                  {stack.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {stack.items.map((item) => (
                    <div
                      key={item.name}
                      className={`px-3 py-2.5 rounded-xl border text-xs ${stackBadgeColors[stack.color]}`}
                    >
                      <span className="font-semibold block">{item.name}</span>
                      <span className="opacity-70 mt-0.5 block">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <SectionHeading label="Takeaways" title="What I Learned" />
          <div className="grid md:grid-cols-2 gap-5">
            {learnings.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-slate-900 font-bold text-sm">{item.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-slate-500 text-xs">
                      <span className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}

function SectionHeading({ label, title }) {
  return (
    <div className="mb-6">
      <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-1">{label}</p>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
    </div>
  );
}
