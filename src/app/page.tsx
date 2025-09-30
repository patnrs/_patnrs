export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-neutral-100 px-6">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-cyan-400">Pat</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-neutral-300">
          Computer Teacher @ Triamudomsuksapattanakarn School
        </p>

        <div className="mt-8">
          <p className="text-xl md:text-2xl font-semibold text-cyan-300">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>We&apos;re working on it — Coming soon! 🚀</p>
          </p>
        </div>

        <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
          This website will share about education, teacher Pat&apos;s projects,
          AI, and coding.
        </p>
      </div>
    </main>
  );
}
