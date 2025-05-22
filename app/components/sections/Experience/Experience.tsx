import { BorderBeam } from "@/components/magicui/border-beam";
import { caveat, poppins } from "@/lib/font";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Experience = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full min-h-screen">
      <h1 className="text-4xl font-bold">Experience</h1>
      <div className="flex gap-4 justify-evenly">
        {/* Card */}
        <div
          className={`${poppins.className} relative flex flex-col items-center p-4 gap-2 w-[250px] h-[130px] bg-white border rounded-md shadow rotate-2`}
        >
          <span className="text-sm font-bold">Years of Experience</span>
          <span className="text-[50px] font-bold">5+</span>
          <BorderBeam
            duration={8}
            size={150}
            className="from-transparent via-blue-500 to-transparent"
          />
        </div>
      </div>

      {/* Experience Journey */}
      <div className="relative flex items-center w-[800px] h-[500px] border">
        <div className="flex flex-col items-center gap-4">
          <HoverCard>
            {/* className="flex items-center justify-center w-[150px] h-10 p-4  border bg-white rounded-md" */}
            <HoverCardTrigger>
              <HoverBorderGradient
                containerClassName="rounded"
                as="button"
                className={`${caveat.className} flex items-center justify-center font-bold text-xl w-[150px] dark:bg-black bg-white text-black dark:text-white space-x-2`}
              >
                2018
              </HoverBorderGradient>
            </HoverCardTrigger>
            <HoverCardContent>
              <span className={`${caveat.className} text-xl font-bold`}>
                Binary Team
              </span>

              <ul
                className={`${poppins.className} list-disc text-xs font-light ml-4`}
              >
                <li>Discuss with the team about requirements and mockup.</li>
                <li>
                  Develop web applications using PHP, Laravel, and Bootstrap.
                </li>
                <li>Collaborate with the team using Git.</li>
              </ul>
            </HoverCardContent>
          </HoverCard>
          {/* <div className="flex items-center justify-center w-[150px] h-10 p-4  border bg-white rounded-md mt-[100px] mr-10">
              2018
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
