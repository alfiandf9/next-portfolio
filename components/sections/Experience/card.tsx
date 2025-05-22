import { BorderBeam } from "@/components/magicui/border-beam";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { caveat, jura, poppins } from "@/lib/font";
import { cn } from "@/lib/utils";

import React from "react";

const Card = ({
  items,
}: {
  items: {
    id: number;
    year: string;
    title: string;
    subtitle: string;
    tasks?: string[];
  }[];
}) => {
  return (
    <>
      {items.map((item, index) => (
        <HoverCard key={item.year}>
          <HoverCardTrigger
            className={cn(
              { "mt-30": index % 2 === 0 },
              { "-mt-30": index % 2 !== 0 }
            )}
          >
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className={cn(
                `${poppins.className} flex items-center justify-center font-bold text-nowrap w-[150px] dark:bg-black bg-white text-black dark:text-white`
              )}
            >
              {item.year}
            </HoverBorderGradient>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-[300px]"
            side={index % 2 === 0 ? "bottom" : "top"}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col text-nowrap">
                <span className={`${caveat.className} text-xl font-bold`}>
                  {item.title}
                </span>
                <span className={`${caveat.className} text-sm font-light`}>
                  {item.subtitle ? item.subtitle : ""}
                </span>
              </div>

              <ul
                className={`${poppins.className} ${
                  item?.tasks ?? [] ? "list-none ml-0" : "list-disc ml-4"
                } text-xs font-light`}
              >
                {item?.tasks?.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </>
  );
};

export default Card;
