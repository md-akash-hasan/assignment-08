import React from "react";

const TimeManagement = () => {
  const tips = [
    {
      title: "1. Create a Weekly Study Schedule",
      desc: "Map out your week in advance and assign specific time blocks for each subject or task. Treat these slots like appointments — non-negotiable and protected.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "2. Prioritize with the Eisenhower Matrix",
      desc: "Sort your tasks into four categories: urgent & important, important but not urgent, urgent but not important, and neither. Focus on high-priority tasks first.",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "3. Break Projects into Smaller Milestones",
      desc: "Large projects feel overwhelming. Break them into smaller, actionable steps with individual deadlines to maintain steady progress and momentum.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      title: "4. Use a Digital or Physical Planner",
      desc: "Track all deadlines and goals in one central place — whether that's Notion, Google Calendar, or a paper planner. A clear overview prevents last-minute panic.",
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "5. Apply the Two-Minute Rule",
      desc: "If a task takes less than two minutes to complete, do it immediately rather than adding it to your to-do list. This keeps small tasks from piling up.",
      color: "from-red-500 to-rose-400",
    },
    {
      title: "6. Review and Reflect Weekly",
      desc: "Set aside 15–20 minutes at the end of each week to review what you accomplished. This habit helps you continuously improve your time management.",
      color: "from-indigo-500 to-blue-400",
    },
  ];

  return (
    <div className="my-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
        Time Management Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="group relative p-1 rounded-3xl transition-all duration-500 hover:scale-[1.03]"
          >
            {/* Hover-e gradient border dekha jabe */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}
            />

            {/* Card Content */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-[1.4rem] h-full shadow-md group-hover:shadow-2xl transition-all duration-500">
              <div
                className={`w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br ${tip.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}
              >
                {index + 1}
              </div>

              <h2 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 bg-none text-gray-800 dark:text-white group-hover:from-gray-800 group-hover:to-gray-500">
                {tip.title.split(". ")[1]}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {tip.desc}
              </p>

              {/* Bottom Decorative Element */}
              <div
                className={`absolute bottom-4 right-6 w-8 h-1 rounded-full bg-gradient-to-r ${tip.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeManagement;
