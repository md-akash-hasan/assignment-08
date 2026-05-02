import Image from "next/image";
import React from "react";

const Instructor = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold my-5">Top Instructor</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="shadow p-5 rounded-2xl">
          <div className="relative aspect-square">
            <Image
              src="https://www.linkedin.com/in/jhankar"
              alt="Jhankar Mahbub"
              fill
            />
          </div>
          <h1 className="text-xl font-bold">Dr. Jhankar Mahbub</h1>
          <h3>Senior E-Learning Instructor</h3>
          <h4 className="font-bold">Experience: 12 Years</h4>
          <p>
            Bio: Dr. Carter is a passionate educator dedicated to transforming
            online learning experiences. He has developed over 50 e-learning
            courses and specializes in creating engaging digital content for
            students worldwide.
          </p>
        </div>

        <div className="shadow p-5 rounded-2xl">
          <h1 className="text-xl font-bold"> Prof. Sophia Marie Bennett</h1>
          <h3> Lead Online Course Facilitator</h3>
          <h4 className="font-bold">Experience: 8 Years</h4>
          <p>
            Prof. Bennett is an expert in student success strategies and online
            engagement. She has helped thousands of learners develop effective
            study habits and excel in virtual learning environments.
          </p>
        </div>
        <div className="shadow p-5 rounded-2xl">
          <h1 className="text-xl font-bold">Mr. Daniel Ethan Brooks</h1>
          <h3> E-Learning Content Developer & Instructor</h3>
          <h4 className="font-bold">Experience: 5 Years</h4>
          <p>
            Mr. Brooks brings a fresh and practical approach to online
            education. He focuses on helping students master time management and
            productivity skills to succeed in self-paced learning environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
