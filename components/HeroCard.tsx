import { Flame, BookOpen } from "lucide-react";

export default function HeroCard({
  totalCourses,
}: {
  totalCourses: number;
}) {
  return (
    <section className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-lg mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-zinc-400">
            Continue your learning journey today.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-zinc-800 px-4 py-3 rounded-xl border border-zinc-700">
            <div className="flex items-center gap-2">
              <Flame className="text-orange-400" size={20} />
              <span className="font-semibold">
                12 Day Streak
              </span>
            </div>
          </div>

          <div className="bg-zinc-800 px-4 py-3 rounded-xl border border-zinc-700">
            <div className="flex items-center gap-2">
              <BookOpen className="text-green-400" size={20} />
              <span className="font-semibold">
                {totalCourses} Courses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}