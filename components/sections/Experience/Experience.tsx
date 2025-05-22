import { BorderBeam } from "@/components/magicui/border-beam";
import { poppins } from "@/lib/font";
import Card from "./card";
import { GridBackground } from "@/components/ui/grid-background";
import Image from "next/image";

const Experience = () => {
  const experience = [
    {
      id: 1,
      year: "2018",
      title: "Binary Team",
      subtitle: "Fullstack Developer",
      tasks: [
        "Discuss with the team about requirements and mockup.",
        "Develop web applications using PHP, Laravel, and Bootstrap.",
        "Collaborate with the team using Git.",
      ],
    },
    {
      id: 2,
      year: "2019",
      title: "PT. Gamma Solusi Karya Nusantara",
      subtitle: "Android Developer",
      // tasks: [
      //   "Discuss with the team about requirements and mockup.",
      //   "Develop web applications using PHP, Laravel, and Bootstrap.",
      //   "Collaborate with the team using Git.",
      // ],
    },
    {
      id: 3,
      year: "2020-2022",
      title: "PT. Hexacore Bina Sejahtera",
      subtitle: "Frontend Web Developer",
      // tasks: [
      //   "Discuss with the team about requirements and mockup.",
      //   "Develop web applications using PHP, Laravel, and Bootstrap.",
      //   "Collaborate with the team using Git.",
      // ],
    },
    {
      id: 4,
      year: "2022-Current",
      title: "PT. Smooets Teknologi Outsourcing",
      subtitle: "Frontend Web Developer",
      // tasks: [
      //   "Discuss with the team about requirements and mockup.",
      //   "Develop web applications using PHP, Laravel, and Bootstrap.",
      //   "Collaborate with the team using Git.",
      // ],
    },
    {
      id: 5,
      year: "Coming Soon?",
      title: "Open to work?",
      subtitle: "",
      tasks: [
        "I am looking for an opportunity to work in a better environment, so I can continue to develop and become a reliable developer.",
      ],
    },
  ];

  return (
    <GridBackground>
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
        <div className="relative flex items-center h-[500px]">
          <div className="flex justify-around w-full items-center gap-8">
            <Card items={experience} />
          </div>

          {/* Arrow Background */}
          <Image
            src={"/fun-arrow.svg"}
            alt="fun-arrow"
            width={50}
            height={10}
            className="absolute left-[180px]"
          />
          <Image
            src={"/arched-arrow.svg"}
            alt="arched-arrow"
            width={40}
            height={10}
            className="absolute top-[200px] left-[370px] rotate-[120deg]"
          />
          <Image
            src={"/arrow.svg"}
            alt="arrow"
            width={50}
            height={10}
            className="absolute top-[245px] right-[300px] rotate-[315deg] transform scale-y-[-1]"
          />
          <Image
            src={"/dashed-arrow.svg"}
            alt="dashed-arrow"
            width={40}
            height={10}
            className="absolute top-[225px] right-[150px] rotate-[90deg] "
          />
        </div>
      </div>
    </GridBackground>
  );
};

export default Experience;
