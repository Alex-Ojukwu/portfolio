"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function DedicatedPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-[#33353F]">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-primary-500 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text">
            AI Virtual Interview Assistant
          </h1>
          <p className="text-xl text-gray-400">
            Intelligent Interview Simulation with Real-time Emotion Analysis
          </p>
        </div>

        {/* Screenshot */}
        <div className="mb-16 rounded-xl overflow-hidden border border-[#33353F] shadow-2xl">
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
          <h2 className="text-3xl font-bold mb-6 text-primary-400">
            Full Description
          </h2>
          <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-[#33353F] space-y-4">
            <p className="text-gray-300 leading-relaxed">
              The AI Virtual Interview Assistant is an intelligent, end-to-end interview simulation platform that provides candidates with a realistic, AI-powered practice environment. The system leverages OpenAI&apos;s GPT-4 to conduct dynamic, adaptive interviews while simultaneously analyzing the candidate&apos;s emotional state and engagement through real-time facial expression detection using DeepFace and MediaPipe.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The platform features a talking AI avatar (powered by D-ID) that asks questions with natural lip-sync and movements, creating an immersive multimodal experience. Candidates respond verbally, with their answers automatically transcribed using OpenAI&apos;s Whisper API. The system generates personalized interview questions based on job role and difficulty level, evaluates answers in real-time, and produces comprehensive performance reports including emotion analytics throughout the interview session.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This hybrid local-cloud architecture combines the responsiveness of local emotion detection with the sophistication of cloud-based AI services to deliver a seamless, professional interview practice experience.
            </p>
          </div>
        </section>

        {/* Problem I Solved */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary-400">
            Problem I Solved
          </h2>
          <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-[#33353F]">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Traditional interview preparation faces several critical challenges:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <span className="text-primary-500 font-bold flex-shrink-0">1.</span>
                <div>
                  <span className="font-semibold text-white">Limited Practice Opportunities:</span>
                  <span className="text-gray-300"> Candidates struggle to get realistic interview practice without access to human interviewers, leading to nervousness and poor performance in actual interviews.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-500 font-bold flex-shrink-0">2.</span>
                <div>
                  <span className="font-semibold text-white">Lack of Real-time Feedback:</span>
                  <span className="text-gray-300"> Most practice methods don&apos;t provide immediate insights into body language, emotional state, or engagement levels during responses.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-500 font-bold flex-shrink-0">3.</span>
                <div>
                  <span className="font-semibold text-white">Static Question Sets:</span>
                  <span className="text-gray-300"> Pre-recorded or scripted interview questions don&apos;t adapt to candidate responses, failing to simulate real interview dynamics.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-500 font-bold flex-shrink-0">4.</span>
                <div>
                  <span className="font-semibold text-white">No Emotional Intelligence Training:</span>
                  <span className="text-gray-300"> Candidates can&apos;t see how their facial expressions and emotional state might be perceived by interviewers.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-500 font-bold flex-shrink-0">5.</span>
                <div>
                  <span className="font-semibold text-white">Accessibility Barriers:</span>
                  <span className="text-gray-300"> Professional interview coaching is expensive and scheduling can be difficult.</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[#33353F] pt-6">
              <h3 className="font-semibold text-xl text-white mb-4">My Solution:</h3>
              <p className="text-gray-300 leading-relaxed">
                The AI Virtual Interview Assistant solves these problems by providing:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
                <li>24/7 accessible AI-powered interview practice</li>
                <li>Real-time emotion detection to help candidates understand their non-verbal communication</li>
                <li>Adaptive questioning that responds intelligently to candidate answers</li>
                <li>Comprehensive performance analytics and personalized feedback</li>
                <li>Cost-effective alternative to professional coaching</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary-400">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                1. Dynamic Interview Question Generation
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• GPT-4 generates contextually relevant questions based on job role</li>
                <li>• Adaptive questioning that builds on previous answers</li>
                <li>• Configurable difficulty levels (easy, medium, hard)</li>
                <li>• 3-7 questions per session based on duration</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                2. Talking AI Avatar
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• D-ID powered realistic avatar with lip-sync</li>
                <li>• Natural facial movements and expressions</li>
                <li>• Professional presenter (default: &quot;Alice&quot;)</li>
                <li>• Persists on screen after speaking for continuous engagement</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                3. Real-time Emotion Detection
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• DeepFace + MediaPipe facial expression analysis</li>
                <li>• 7 emotion categories: happy, sad, angry, surprised, fearful, disgusted, neutral</li>
                <li>• Analysis every 2 seconds during interview</li>
                <li>• Confidence scores and emotion distribution tracking</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                4. Speech-to-Text Transcription
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• OpenAI Whisper API for accurate audio transcription</li>
                <li>• Supports multiple audio formats (MP3, WAV, WebM, OGG)</li>
                <li>• Automatic answer submission after recording</li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                5. Live Webcam Feed
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Real-time video capture and display</li>
                <li>• Face detection indicator</li>
                <li>• Privacy-focused local processing</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                6. Intelligent Answer Evaluation
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• GPT-4 evaluates response quality</li>
                <li>• Contextual feedback based on job role</li>
                <li>• Scoring and improvement suggestions</li>
              </ul>
            </div>

            {/* Feature 7 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                7. Comprehensive Interview Reports
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Q&A pairs with evaluations</li>
                <li>• Emotion timeline and distribution</li>
                <li>• Engagement scores</li>
                <li>• Overall performance summary</li>
                <li>• Export-ready analytics</li>
              </ul>
            </div>

            {/* Feature 8 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F] hover:border-primary-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-white">
                8. Session Management
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Unique session IDs</li>
                <li>• Progress tracking (question X of Y)</li>
                <li>• Time limits and question caps</li>
                <li>• Graceful session termination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary-400">
            Technologies Used
          </h2>
          <div className="space-y-6">
            {/* Frontend Stack */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-xl font-semibold mb-4 text-secondary-400">Frontend Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">Next.js 14</span>
                  <p className="text-xs text-gray-400 mt-1">React framework for SSR</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">React 18</span>
                  <p className="text-xs text-gray-400 mt-1">UI component library</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">TypeScript</span>
                  <p className="text-xs text-gray-400 mt-1">Type-safe JavaScript</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">CSS3</span>
                  <p className="text-xs text-gray-400 mt-1">Custom styling</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">WebRTC APIs</span>
                  <p className="text-xs text-gray-400 mt-1">Media capture</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">Canvas API</span>
                  <p className="text-xs text-gray-400 mt-1">Image processing</p>
                </div>
              </div>
            </div>

            {/* Backend Stack */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-xl font-semibold mb-4 text-secondary-400">Backend Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">FastAPI</span>
                  <p className="text-xs text-gray-400 mt-1">Modern Python framework</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">Uvicorn</span>
                  <p className="text-xs text-gray-400 mt-1">ASGI server</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">Python 3.10+</span>
                  <p className="text-xs text-gray-400 mt-1">Core language</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">Pydantic</span>
                  <p className="text-xs text-gray-400 mt-1">Data validation</p>
                </div>
              </div>
            </div>

            {/* AI/ML Technologies */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-xl font-semibold mb-4 text-secondary-400">AI/ML Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">OpenAI GPT-4</span>
                  <p className="text-xs text-gray-400 mt-1">Question generation & evaluation</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">Whisper API</span>
                  <p className="text-xs text-gray-400 mt-1">Speech-to-text</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">DeepFace</span>
                  <p className="text-xs text-gray-400 mt-1">Facial expression analysis</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">MediaPipe</span>
                  <p className="text-xs text-gray-400 mt-1">Face landmark detection</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">TensorFlow 2.20</span>
                  <p className="text-xs text-gray-400 mt-1">Deep learning framework</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">OpenCV</span>
                  <p className="text-xs text-gray-400 mt-1">Computer vision</p>
                </div>
              </div>
            </div>

            {/* Cloud Services */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-xl font-semibold mb-4 text-secondary-400">Cloud Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">D-ID API</span>
                  <p className="text-xs text-gray-400 mt-1">Talking avatar generation</p>
                </div>
                <div className="bg-[#121212] px-4 py-2 rounded-lg border border-[#33353F]">
                  <span className="text-white font-medium">OpenAI API</span>
                  <p className="text-xs text-gray-400 mt-1">GPT-4 and Whisper endpoints</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary-400">
            What I Learned
          </h2>
          <div className="space-y-4">
            {/* Learning 1 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">1.</span>
                Full-Stack Integration
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Building seamless communication between Next.js frontend and FastAPI backend</li>
                <li>Implementing WebSocket connections for real-time data streaming</li>
                <li>Managing CORS policies for local development</li>
                <li>Handling asynchronous operations across the stack</li>
              </ul>
            </div>

            {/* Learning 2 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">2.</span>
                AI/ML Model Integration
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Working with multiple AI APIs (OpenAI, D-ID) in a single application</li>
                <li>Understanding DeepFace model initialization and TensorFlow compatibility issues</li>
                <li>Resolving dependency conflicts (tf-keras requirement for TensorFlow 2.20)</li>
                <li>Optimizing ML model performance for real-time applications</li>
                <li>Balancing local processing (emotion detection) vs cloud APIs (LLM, STT, avatar)</li>
              </ul>
            </div>

            {/* Learning 3 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">3.</span>
                Real-time Media Processing
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Capturing and processing webcam frames using Canvas API</li>
                <li>Implementing efficient base64 encoding for image transmission</li>
                <li>Managing audio recording with MediaRecorder API</li>
                <li>Handling browser media permissions and error states</li>
                <li>Optimizing frame analysis intervals (2-second intervals) for performance</li>
              </ul>
            </div>

            {/* Learning 4 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">4.</span>
                State Management
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Managing complex React component state (idle, loading, speaking, completed)</li>
                <li>Coordinating multiple asynchronous operations (avatar generation, emotion detection, transcription)</li>
                <li>Session lifecycle management with unique IDs</li>
                <li>Progress tracking across multi-step interviews</li>
              </ul>
            </div>

            {/* Learning 5 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">5.</span>
                API Design & Backend Architecture
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Designing RESTful endpoints with FastAPI</li>
                <li>Implementing proper error handling and validation with Pydantic</li>
                <li>Structuring code with routers, services, and schemas</li>
                <li>Creating reusable service classes (FaceAnalyzer, InterviewFlow)</li>
                <li>Managing API rate limits and timeouts</li>
              </ul>
            </div>

            {/* Learning 6 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">6.</span>
                Problem-Solving
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Debugging TensorFlow/DeepFace compatibility issues</li>
                <li>Implementing fallback mechanisms when services fail</li>
                <li>Handling asynchronous D-ID avatar generation (polling for completion)</li>
                <li>Managing file cleanup for temporary audio files</li>
                <li>Preserving UI state (keeping avatar visible after playback)</li>
              </ul>
            </div>

            {/* Learning 7 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">7.</span>
                User Experience Design
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Creating smooth transitions between interview states</li>
                <li>Providing visual feedback (loading indicators, streaming status)</li>
                <li>Implementing retry logic for failed operations</li>
                <li>Designing intuitive error messages</li>
                <li>Balancing feature richness with simplicity</li>
              </ul>
            </div>

            {/* Learning 8 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">8.</span>
                Development Best Practices
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Environment variable management for API keys</li>
                <li>Writing modular, maintainable code</li>
                <li>Implementing proper logging for debugging</li>
                <li>Using TypeScript for type safety</li>
                <li>Setting up hot-reload for efficient development</li>
              </ul>
            </div>

            {/* Learning 9 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">9.</span>
                Cloud Service Integration
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Understanding D-ID&apos;s asynchronous processing workflow</li>
                <li>Managing API authentication (Basic auth format quirks)</li>
                <li>Handling webhook alternatives (polling vs streaming)</li>
                <li>Cost optimization (when to use cloud vs local processing)</li>
              </ul>
            </div>

            {/* Learning 10 */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#33353F]">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="text-primary-500">10.</span>
                Performance Optimization
              </h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-6 list-disc">
                <li>Lazy loading of heavy ML models</li>
                <li>Implementing analysis intervals to reduce API calls</li>
                <li>Optimizing image quality/size for transmission</li>
                <li>Managing memory with proper cleanup on component unmount</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <div className="text-center pt-8 border-t border-[#33353F]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
