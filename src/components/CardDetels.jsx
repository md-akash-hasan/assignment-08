import {
  CircleDollar,
  Clock,
  BookOpen,
  GraduationCap,
  Star,
} from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const CourseDetailsPage = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Course Info & Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Section */}
          <div className="space-y-4">
            <Chip
              color="primary"
              variant="flat"
              size="sm"
              className="font-bold"
            >
              {data?.category}
            </Chip>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {data?.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data?.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                  <GraduationCap className="text-sky-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Instructor</p>
                  <p className="text-sm font-bold">{data?.instructor}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Star className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Rating</p>
                  <p className="text-sm font-bold">{data?.rating} / 5.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Preview Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={data?.image}
              alt={data?.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Sticky Pricing/Enroll Card */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24 border-none shadow-2xl rounded-3xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-gray-900">
                  $99.99
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  20% OFF
                </span>
              </div>

              <div className="space-y-4">
                <Button
                  color="primary"
                  size="lg"
                  className="w-full font-bold text-lg shadow-lg shadow-sky-200"
                >
                  Enroll Now
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="w-full font-bold"
                >
                  Add to Cart
                </Button>
              </div>

              {/* <Divider className="my-4" /> */}
              <div className="divider">OR</div>

              {/* Course Features */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">
                  This course includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock size={18} className="text-sky-500" />
                    <span>
                      Duration: <strong>{data?.duration}</strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <BookOpen size={18} className="text-sky-500" />
                    <span>
                      Level: <strong>{data?.level}</strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <CircleDollar size={18} className="text-sky-500" />
                    <span>Full Lifetime Access</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
