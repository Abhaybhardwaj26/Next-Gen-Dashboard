import { supabase } from "@/lib/supabase";
import CourseCard from "@/components/CourseCard";
import HeroCard from "@/components/HeroCard";
import Sidebar from "@/components/Sidebar";
import ActivityCard from "@/components/ActivityCard";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("progress", { ascending: false });

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold mb-8">
        Next Gen Dashboard
      </h1>

      <HeroCard totalCourses={courses?.length || 0} />

      {error && (
        <div className="text-red-500 mb-6">
          {error.message}
        </div>
      )}

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <ActivityCard />

          <div className="grid md:grid-cols-2 gap-4">
            {courses?.map((course: any) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}