import { CircleDollar } from "@gravity-ui/icons";
import { Button, Card, Link } from "@heroui/react";
import Image from "next/image";

const CardDetels = ({ data }) => {
  return (
    <div className="my-10 flex justify-center px-4">
      <Card
        isPressable
        isHoverable
        className="max-w-[400px] w-full transition-transform duration-300 hover:scale-[1.02] group"
      >
        {/* Image Container - Height adjusted to be more natural */}
        <div className="relative w-full h-[240px] overflow-hidden">
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            className="rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <h1 className="absolute top-3 right-3 text-white z-10 bg-sky-400 px-3 py-1 text-xs font-bold rounded-full">
            {data?.level}
          </h1>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h2 className="text-lg font-bold line-clamp-1">{data?.title}</h2>

          <div className="flex justify-between items-center my-3">
            <h3 className="text-sm font-medium text-gray-500">
              {data?.instructor}
            </h3>
            <span className="text-sm font-bold text-yellow-500 bg-yellow-50 px-2 py-0.5 rounded-lg">
              ⭐ {data?.rating}
            </span>
          </div>

          <p className="text-gray-500 text-sm my-3 line-clamp-2 leading-relaxed">
            {data?.description}
          </p>

          <div className="flex items-center justify-between mt-5 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2 font-bold text-sky-600">
              <CircleDollar size={18} />
              <span className="text-sm">{data?.duration}</span>
            </div>
            <Button
              size="sm"
              color="primary"
              variant="flat"
              className="font-bold disabled:"
            >
              Category: <span className="font-semibold">{data?.category}</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardDetels;
