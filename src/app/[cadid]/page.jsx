import CardDetels from "@/components/CardDetels";
import React from "react";

const page = async ({ params }) => {
  let { cadid } = await params;
  let res = await fetch("https://assignment-08-one.vercel.app/course.json");
  let datas = await res.json();

  let data = datas.find((data) => data.id == parseInt(cadid));

  return (
    <div>
      <CardDetels data={data}></CardDetels>
    </div>
  );
};

export default page;
