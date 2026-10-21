export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16 text-slate-900">
      <section aria-labelledby="welcome-title" className="w-full max-w-2xl">
        <p className="mb-4 text-sm font-semibold tracking-widest text-teal-700">
          MY HOMEPAGE
        </p>
        <h1
          id="welcome-title"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          ようこそ、ホームページへ
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          ここから、新しいホームページをつくっていきます。
        </p>
      </section>
    </main>
  );
}
