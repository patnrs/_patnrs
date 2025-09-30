import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-neutral-100 px-4">
      <div className="max-w-2xl text-center space-y-6">
        {/* Intro */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Hi, I'm <span className="text-cyan-400">Pat</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-neutral-300">
          Computer Teacher @ Triamudomsuksapattanakarn School
        </p>

        {/* Coming soon */}
        <div className="mt-6">
          <p className="text-xl md:text-2xl font-medium">
            🚧 We’re working on it. Coming soon! 🚀
          </p>
        </div>

        {/* About website */}
        <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
          This website is about education, teacher Pat’s projects, AI, coding,
        </p>
      </div>
    </main>
  );
}
