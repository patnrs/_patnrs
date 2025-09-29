import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to patnrs.com</h1>
      <p className="mb-6">
        My personal website & portfolio — built with Next.js and deployed on Vercel.<br />
        Here I share my projects, coding experiments, and resources for students.
      </p>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>About me &amp; teaching background</li>
          <li>Portfolio of projects (AI, coding, dev tools)</li>
          <li>Blog / learning notes</li>
          <li>Contact &amp; links</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Vercel</li>
        </ul>
      </section>
      <a
        href="https://patnrs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:underline font-medium"
      >
        🔗 Live site: https://patnrs.com
      </a>
    </div>
  );
}
