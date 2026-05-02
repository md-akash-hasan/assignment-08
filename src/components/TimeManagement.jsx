import React from "react";

const TimeManagement = () => {
  return (
    <div className="my-5 mt-15">
      <h1 className="text-2xl my-5 font-bold">Time Management Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            1. Create a Weekly Study Schedule
          </h2>
          <p className="">
            Map out your week in advance and assign specific time blocks for
            each subject or task. Treat these slots like appointments —
            non-negotiable and protected from interruptions.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            2. Prioritize with the Eisenhower Matrix
          </h2>
          <p className="">
            Sort your tasks into four categories: urgent & important, important
            but not urgent, urgent but not important, and neither. Focus your
            energy on high-priority tasks first and delegate or drop the rest.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            3. Break Projects into Smaller Milestones
          </h2>
          <p className="">
            Large projects feel overwhelming and easy to procrastinate on. Break
            them into smaller, actionable steps with individual deadlines to
            maintain steady progress and momentum.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            4. Use a Digital or Physical Planner
          </h2>
          <p className="">
            Track all deadlines, assignments, and goals in one central place —
            whether thats Notion, Google Calendar, or a paper planner. A clear
            overview prevents missed deadlines and last-minute panic.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            5. Apply the Two-Minute Rule
          </h2>
          <p className="">
            If a task takes less than two minutes to complete, do it immediately
            rather than adding it to your to-do list. This keeps small tasks
            from piling up and cluttering your schedule.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h2 className="text-xl  font-semibold">
            6. Review and Reflect Weekly
          </h2>
          <p className="">
            Set aside 15–20 minutes at the end of each week to review what you
            accomplished, what you missed, and what needs adjusting. This habit
            helps you continuously improve your time management over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeManagement;
