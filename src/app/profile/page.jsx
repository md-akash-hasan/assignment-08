import EditModal from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Avatar, Button, Card, Link } from "@heroui/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfolePage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  let user = session?.user;
  console.log(user);
  if (!user) {
    redirect("/pass/singin");
    return;
  }
  return (
    <div className="flex justify-center items-center ">
      <Card className="w-[400px]">
        <Avatar className="w-30 h-30 m-auto">
          <Avatar.Image alt={user.name} src={user.image} />
          <Avatar.Fallback>{user.name}</Avatar.Fallback>
        </Avatar>
        <Card.Header>
          <Card.Title>{user.name}</Card.Title>
          <Card.Description>{user.email}</Card.Description>
        </Card.Header>
        <Card.Footer>
          <EditModal />
        </Card.Footer>
      </Card>
    </div>
  );
}
