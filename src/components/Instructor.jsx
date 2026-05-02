import Image from "next/image";
import React from "react";

const Instructor = () => {
  return (
    <div className="my-10 px-4">
      <h1 className="text-2xl font-bold my-5 border-l-4 border-primary pl-3">
        Top Instructor
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group shadow-md hover:shadow-xl p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 bg-white">
          <div className="relative aspect-square h-40 w-40 m-auto my-5 overflow-hidden rounded-full ring-0 group-hover:ring-4 ring-primary/20 transition-all duration-300">
            <Image
              src="https://i.ibb.co.com/3yWJrJBw/1677507599579.jpg"
              alt="Jhankar Mahbub"
              fill
              className="rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="text-xl font-bold group-hover:text-primary transition-colors">
            Dr. Jhankar Mahbub
          </h1>
          <h3 className="text-default-600 italic">
            Senior E-Learning Instructor
          </h3>
          <h4 className="font-bold text-sm mt-2">Experience: 12 Years</h4>
          <p className="text-sm text-default-500 mt-3 leading-relaxed">
            Bio: Dr. Carter is a passionate educator dedicated to transforming
            online learning experiences. He has developed over 50 e-learning
            courses.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group shadow-md hover:shadow-xl p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 bg-white">
          <div className="relative aspect-square h-40 w-40 m-auto my-5 overflow-hidden rounded-full ring-0 group-hover:ring-4 ring-primary/20 transition-all duration-300">
            <Image
              src="https://i.ibb.co.com/Z1hZjPHR/profile-picture.jpg"
              alt="Prof. Sophia Marie Bennett"
              fill
              className="rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="text-xl font-bold group-hover:text-primary transition-colors">
            Prof. Sophia Marie Bennett
          </h1>
          <h3 className="text-default-600 italic">
            Lead Online Course Facilitator
          </h3>
          <h4 className="font-bold text-sm mt-2">Experience: 8 Years</h4>
          <p className="text-sm text-default-500 mt-3 leading-relaxed">
            Prof. Bennett is an expert in student success strategies and online
            engagement. She has helped thousands of learners excel.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group shadow-md hover:shadow-xl p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 bg-white">
          <div className="relative aspect-square h-40 w-40 m-auto my-5 overflow-hidden rounded-full ring-0 group-hover:ring-4 ring-primary/20 transition-all duration-300">
            <Image
              src="https://i.ibb.co.com/qYr1nLd9/man-7796384-640.jpg"
              alt="Mr. Daniel Ethan Brooks"
              fill
              className="rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="text-xl font-bold group-hover:text-primary transition-colors">
            Mr. Daniel Ethan Brooks
          </h1>
          <h3 className="text-default-600 italic">
            Content Developer & Instructor
          </h3>
          <h4 className="font-bold text-sm mt-2">Experience: 5 Years</h4>
          <p className="text-sm text-default-500 mt-3 leading-relaxed">
            Mr. Brooks focuses on helping students master time management and
            productivity skills to succeed in self-paced learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
