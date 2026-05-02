import { CircleDollar } from "@gravity-ui/icons";
import { Button, Card, Link } from "@heroui/react";
import Image from "next/image";

const CardDetels = ({ data }) => {
  console.log(data.image);
  return (
    <div>
      <Card className="w-[60%] m-auto">
        <div className="  relative aspect-square  h-[40vh] ">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="rounded-2xl  object-cover"
          />
          <h1 className="absolute top-3  right-3 text-white z-10 bg-sky-400 px-3 py- font-bold rounded-2xl ">
            {data.level}
          </h1>
        </div>
        <Card.Header>
          <Card.Title>{data.title}</Card.Title>
          <div className="flex justify-between my-1">
            <h1 className="font-semibold ">{data.instructor}</h1>
            <h1 className="font-semibold ">{data.rating}</h1>
          </div>
        </Card.Header>
        <Card.Footer>{data.description}</Card.Footer>
        <h1>{data.duration}</h1>
      </Card>
    </div>
  );
};

export default CardDetels;
