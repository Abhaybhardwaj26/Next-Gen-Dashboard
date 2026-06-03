export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white p-6 animate-pulse">
      <div className="h-14 w-96 bg-zinc-800 rounded-xl mb-8" />

      <div className="h-32 bg-zinc-900 rounded-2xl mb-8" />

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="h-64 bg-zinc-900 rounded-2xl" />

        <div className="lg:col-span-3 space-y-6">
          <div className="h-40 bg-zinc-900 rounded-2xl" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="h-48 bg-zinc-900 rounded-2xl" />
            <div className="h-48 bg-zinc-900 rounded-2xl" />
            <div className="h-48 bg-zinc-900 rounded-2xl" />
            <div className="h-48 bg-zinc-900 rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}