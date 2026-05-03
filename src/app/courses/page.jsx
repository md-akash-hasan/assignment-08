"use client";
import CourseCard from "@/components/CourseCard";
import NoCourse from "@/components/NoCourse";
import { useEffect, useState } from "react";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://assignment-08-one.vercel.app/course.json", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSearch = () => {
    setQuery(search);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase()),
  );
  console.log(filteredCourses);

  return (
    <div>
      <div>
        <div className="bg-gradient-to-r mt-5 from-gray-100 to-gray-200 py-5 px-4 rounded-2xl mb-10 shadow-inner">
          <div className="max-w-md mx-auto relative flex items-center">
            {/* Search Icon inside Input */}
            <div className="absolute left-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="পছন্দের কোর্সটি খুঁজুন..."
              className="w-full pl-12 pr-32 py-4 bg-white border-none rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 transition-all duration-300 italic"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="absolute right-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-200 active:scale-95 shadow-md"
            >
              Search
            </button>
          </div>
        </div>
        <h1 className="course my-5 text-2xl font-bold">🔥 All Courses</h1>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {filteredCourses.map((data) => (
              <CourseCard key={data.id} data={data} />
            ))}
          </div>
        ) : (
          <NoCourse />
        )}
      </div>
    </div>
  );
}
