import CardDetels from "@/components/CardDetels";
import React from "react";
// path to your Better Auth server instance
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const page = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  let user = session?.user;
  if (!user) {
    redirect("/pass/singin");
    return;
  }

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
