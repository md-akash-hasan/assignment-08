import { CircleDollar } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ data }) => {
  return (
    <div className="group">
      <Card
        isPressable
        className="border-none bg-background/60 dark:bg-default-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      >
        {/* Image Section with Zoom Effect */}
        <div className="relative aspect-square w-full h-[35vh] overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover   rounded-2xl  transition-transform duration-500 group-hover:scale-110 "
          />
          {/* Level Badge with Hover Glow */}
          <div className="absolute top-3 right-3 text-white z-20 bg-sky-400/90 backdrop-blur-sm px-3 py-1 font-bold rounded-full text-xs group-hover:bg-sky-500 transition-colors">
            {data.level}
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
        </div>

        <div className="p-4 flex flex-col gap-2">
          {/* Title with Hover Color */}
          <h2 className="text-xl font-bold line-clamp-1 group-hover:text-sky-500 transition-colors duration-300">
            {data.title}
          </h2>

          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-default-600">
              {data.instructor}
            </span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-yellow-500">★</span>
              <span className="font-semibold text-default-500">
                {data.rating}
              </span>
            </div>
          </div>

          <div className="mt-3">
            <Link href={`/${data.id}`} className="w-full block">
              <Button
                color="primary"
                variant="primary"
                className="w-full font-bold transition-transform active:scale-95"
              >
                Show Details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseCard;
