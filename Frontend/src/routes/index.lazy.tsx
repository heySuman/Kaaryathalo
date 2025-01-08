import { createLazyFileRoute } from "@tanstack/react-router";

import { CustomButton } from "@/components/custom/CustomButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Dashboard from "@/assets/Dashboard.png";
import Client from "@/assets/undraw_interview_yz52.svg";
import { PencilLine, Filter, Check } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const catergories = [
  "Design & Creative",
  "Sales & Marketing",
  "Finance & Accounting",
  "Engineering & Architecture",
  "Admin & Customer Support",
  "Writing & Translation",
  "Development & IT",
  "AI Services",
];

const jobPostingSteps = [
  {
    title: "Create job posting",
    description:
      "post a project and specify the requirements and skills to get the right talents.",
    image: PencilLine,
  },
  {
    title: "Filter the proposals",
    description:
      "select talents that matches best with your requirement and their proposals.",
    image: Filter,
  },
  {
    title: "Get it done!",
    description:
      "finalize your talent and discuss with talent to get it done within specified time and requirements.",
    image: Check,
  },
];

function Index() {
  return (
    <>
      <div className="sm:w-3/4 mx-auto sm:p-5 my-6 flex flex-col justify-center">
        <div className="p-3 sm:text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Connect with talents from Nepal
          </h1>
          <p className="sm:w-3/4 mx-auto text-gray-500 py-2">
            Explore skilled talents and professionals, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier collaboration and services.
          </p>
          <div className="w-full flex gap-2 my-6 sm:items-center sm:justify-center">
            <CustomButton>Browse talents</CustomButton>
            <Button variant={"outline"} className="text-center">
              Browse work
            </Button>
          </div>
        </div>
        <div className="border sm:rounded-md my-6 shadow-md overflow-hidden hidden sm:block">
          <img src={Dashboard} alt="dashboard picture" />
        </div>
      </div>

      <div className="sm:w-2/3 mx-auto p-5 my-5">
        <h2 className="font-bold text-2xl mb-6">Browse talents by category</h2>
        <div className="flex flex-wrap gap-4">
          {catergories.map((i) => (
            <div
              className="md:px-7 lg:max-w-[300px] p-3 border rounded-md hover:shadow cursor-pointer transition-all duration-300 ease-in-out w-full"
              key={i}
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <div className="sm:w-2/3 mx-auto my-6 flex gap-2 flex-col relative">
        <div className="py-7 p-5">
          <h2 className="font-semibold text-3xl mb-6 ">For Client</h2>
          <p className="my-6">
            Meet clients you're excited to work with and take your career or
            business to new heights.
          </p>
          <div className="flex gap-4 flex-wrap">
            {jobPostingSteps.map((i) => (
              <Card
                key={i.title}
                className="text-center lg:max-w-[300px] flex flex-col justify-center items-center p-2"
              >
                <CardContent className="flex flex-col justify-center items-center">
                  <div className="w-[75px] h-[75px] rounded-[50%] grid place-items-center bg-blue-200">
                    <i.image />
                  </div>
                  <h2 className="font-bold text-2xl my-3">{i.title}</h2>
                  <p>{i.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-2/3 mx-auto my-6 flex gap-2 flex-col md:flex-row items-center justify-center">
        <div className="p-3 w-2/3 md:w-3/4">
          <img src={Client} alt="client illustration" />
        </div>
        <div className="p-5">
          <h2 className="font-semibold text-3xl mb-6">For Freelancers</h2>
          <p className="my-6">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
          <CustomButton>Find work</CustomButton>
        </div>
      </div>
    </>
  );
}
