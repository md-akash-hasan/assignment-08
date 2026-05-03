import React from "react";

export default function NoCourse() {
  return (
    <div className="flex justify-center flex-col items-center h-[40vh]">
      <h1 className="text-3xl font-bold mb-2 text-red-500 ">
        No courses found
      </h1>
      <p>
        তোমার search-এর সাথে কোনো course match করেনি। অন্য keyword বা topic try
        করে দেখো।
      </p>
    </div>
  );
}
