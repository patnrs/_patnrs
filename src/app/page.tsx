import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/avatar.png"
            alt="Pat - Computer Teacher"
            width={64}
            height={64}
            className="rounded-full border-2 border-indigo-500 shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Pat</h1>
            <p className="text-indigo-400">Computer Teacher @ Triampat, Bangkok</p>
          </div>
        </div>
        <p className="mb-6 text-lg">
          My personal website & portfolio — built with <span className="font-semibold text-indigo-400">Next.js</span> and deployed on <span className="font-semibold text-indigo-400">Vercel</span>.
          <br />
          Here I share my projects, coding experiments, and resources for students.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-indigo-300">Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>About me & teaching background</li>
            <li>Portfolio of projects (AI, coding, dev tools)</li>
            <li>Blog / learning notes</li>
            <li>Contact & links</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-indigo-300">Tech Stack</h2>
          <ul className="flex gap-4 flex-wrap text-gray-300">
            <li className="bg-indigo-800 px-3 py-1 rounded-full">Next.js</li>
            <li className="bg-indigo-800 px-3 py-1 rounded-full">Tailwind CSS</li>
            <li className="bg-indigo-800 px-3 py-1 rounded-full">Vercel</li>
          </ul>
        </div>
        <a
          href="https://patnrs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow transition"
        >
          🔗 Live site
        </a>
      </div>
    </div>
  );
}
