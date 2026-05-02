const LearningTips = () => {
  return (
    <div className="mb-10 px-4">
      <h1 className="text-2xl my-8 font-bold border-l-4 border-indigo-500 pl-4">
        Study Techniques
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "1. Use Active Recall",
            desc: "Instead of passively rereading notes, test yourself by closing your materials and trying to recall key concepts from memory. This strengthens retention far more than reviewing alone.",
          },
          {
            title: "2. Apply the Pomodoro Technique",
            desc: "Study in focused 25-minute blocks followed by a 5-minute break. After four rounds, take a longer 15–30 minute break. This prevents burnout and keeps concentration sharp.",
          },
          {
            title: "3. Spaced Repetition",
            desc: "Review material at increasing intervals — revisit new content after 1 day, then 3 days, then a week. This leverages how memory consolidates over time, making studying far more efficient.",
          },
          {
            title: "4. Eliminate Digital Distractions",
            desc: "Use apps like Freedom or website blockers during study sessions. Notifications and open tabs are the biggest enemies of deep focus in online learning environments.",
          },
          {
            title: "5. Take Structured Notes",
            desc: "Use a consistent method like the Cornell Note-Taking System or mind maps to organize information as you learn. Well-structured notes are much easier to review.",
          },
          {
            title: "6. Set Clear, Measurable Goals",
            desc: "Before each session, write down exactly what you want to accomplish eg complete Chapter 3 and summarize key points. Specific targets keep you accountable.",
          },
        ].map((tip, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-200 overflow-hidden"
          >
            {/* Hover-e ekti halka background color blob thakbe */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-50 rounded-full transition-transform duration-500 group-hover:scale-[10]" />

            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                {tip.title}
              </h2>
              <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                {tip.desc}
              </p>
            </div>

            {/* Bottom active line animation */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningTips;
