import React from "react";

const ComingCourse = () => {
  const tips = [
    {
      title: "1. Spoken English Mastery Course",
      desc: "ভয় ছাড়াই ইংরেজিতে কথা বলুন! এই কোর্সে দৈনন্দিন জীবনের Conversation, Pronunciation এবং Confidence Building শেখানো হবে। চাকরির Interview থেকে শুরু করে বিদেশে যোগাযোগ — সব ক্ষেত্রে কাজে আসবে",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "2. IELTS Complete Preparation Course",
      desc: "IELTS এ ৭+ Band Score পেতে চান? এই কোর্সে Listening, Reading, Writing এবং Speaking — চারটি Module এর উপর বিস্তারিত প্রশিক্ষণ দেওয়া হবে। বিদেশে পড়াশোনা বা ক্যারিয়ারের জন্য নিজেকে প্রস্তুত করুন।",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "3. English Grammar Zero to Hero",
      desc: "একদম শূন্য থেকে English Grammar শিখুন সহজ বাংলায়। Tense, Parts of Speech, Sentence Making থেকে শুরু করে Advanced Grammar পর্যন্ত সব কিছু এই একটি কোর্সেই পাবেন।",
      color: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <div className="my-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
        Courses Coming Soon...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-px bg-transparent transition-all duration-500 hover:scale-[1.02]"
          >
            {/* New Hover: Glowing Border Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-20 group-hover:opacity-100 rounded-3xl blur-md group-hover:blur-xl transition-all duration-500`}
            />

            {/* Card Content */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-[1.8rem] h-full flex flex-col items-start overflow-hidden border border-gray-100 dark:border-gray-800">
              {/* Floating Badge/Number */}
              <div
                className={`w-14 h-14 mb-6 rounded-full bg-gradient-to-br ${tip.color} flex items-center justify-center text-white font-black text-2xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-blue-200 dark:shadow-none`}
              >
                {index + 1}
              </div>

              {/* Title with Slide-up effect */}
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {tip.title.split(". ")[1]}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-6">
                {tip.desc}
              </p>

              {/* Action Link: Reveals on Hover */}
              <div className="mt-auto pt-4 flex items-center text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-indigo-500 transition-all duration-300">
                <span>Stay Tuned</span>
                <svg
                  className="w-5 h-5 ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Subtle background light effect */}
              <div
                className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${tip.color} opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingCourse;
