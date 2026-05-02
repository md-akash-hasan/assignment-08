import CourseCard from "@/components/CourseCard";
import Image from "next/image";

export default async function Home() {
  let res = await fetch("https://assignment-08-one.vercel.app/course.json");
  let datas = await res.json();

  let li = (
    <>
      <div className="text-white text-center">
        <h1 className="text-4xl font-black mb-5 transition-transform duration-300 hover:scale-105">
          Upgrade Your Skills Today 🚀
        </h1>

        <p className="text-xl font-bold mb-8 transition-opacity duration-300 hover:opacity-80">
          Learn from Industry Experts
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="hero h-100 relative w-full group">
        <Image
          src="https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          fill
          className="object-cover brightness-50 transition-all duration-500 group-hover:brightness-40 group-hover:scale-101"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {li}
        </div>
      </div>
      <div>
        <h1 className="course my-5 text-2xl font-bold">🔥 Popular Courses</h1>
        <div className="grid grid-cols-3 gap-5 mb-5">
          {datas.slice(0, 3).map((data) => (
            <CourseCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
