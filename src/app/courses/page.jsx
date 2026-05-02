import CourseCard from "@/components/CourseCard";
import React from "react";

export default async function CoursePage() {
  let res = await fetch("https://assignment-08-one.vercel.app/course.json");
  let datas = await res.json();

  return (
    <div>
      <div>
        <h1 className="course my-5 text-2xl font-bold">🔥 All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {datas.map((data) => (
            <CourseCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
