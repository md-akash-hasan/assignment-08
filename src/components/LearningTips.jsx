const LearningTips = () => {
  return (
    <div className="mb-5">
      <h1 className="text-2xl my-5 font-bold">Study techniques</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">1. Use Active Recall</h2>
          <p className="">
            Instead of passively rereading notes, test yourself by closing your
            materials and trying to recall key concepts from memory. This
            strengthens retention far more than reviewing alone.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            2. Apply the Pomodoro Technique
          </h2>
          <p className="">
            Study in focused 25-minute blocks followed by a 5-minute break.
            After four rounds, take a longer 15–30 minute break. This prevents
            burnout and keeps concentration sharp.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">3. Spaced Repetition</h2>
          <p className="">
            Review material at increasing intervals — revisit new content after
            1 day, then 3 days, then a week. This leverages how memory
            consolidates over time, making studying far more efficient.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            4. Eliminate Digital Distractions
          </h2>
          <p className="">
            Use apps like Freedom or website blockers during study sessions.
            Notifications and open tabs are the biggest enemies of deep focus in
            online learning environments.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">5. Take Structured Notes</h2>
          <p className="">
            Use a consistent method like the Cornell Note-Taking System or mind
            maps to organize information as you learn. Well-structured notes are
            much easier to review and connect ideas across topics.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            6. Set Clear, Measurable Goals
          </h2>
          <p className="">
            Before each session, write down exactly what you want to accomplish
            eg complete Chapter 3 and summarize key points. Vague goals lead to
            vague results — specific targets keep you accountable and give a
            sense of progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningTips;
