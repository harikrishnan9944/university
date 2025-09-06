import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Box,
  Code,
  HelpCircle,
  Hammer,
  Image as ImageIcon,
} from "lucide-react"; // Lucide icons
import robbot from "../../../public/robbot.jpg";

const events = [
  {
    id: "paper-presentation",
    title: "Paper Presentation",
    description:
      "Students showcase research, innovative ideas, and technical knowledge through papers, judged for creativity and clarity.",
    image: robbot,
    link: "/event#paper-presentation",
    icon: FileText,
  },
  {
    id: "project-expo",
    title: "Project Expo",
    description:
      "Exhibit innovative projects and prototypes that solve real-world problems with creativity.",
    image: robbot,
    link: "/event#coding-hackathon",
    icon: Box,
  },
  {
    id: "coding-contest",
    title: "Coding Contest",
    description:
      "Competitive coding challenge testing problem-solving skills, logic, and speed.",
    image: robbot,
    link: "/event#robotics-challenge",
    icon: Code,
  },
  {
    id: "quiz-competition",
    title: "Quiz Competition",
    description:
      "Engaging quiz event testing technical knowledge and quick thinking.",
    image: robbot,
    link: "/event#quiz-competition",
    icon: HelpCircle,
  },
  {
    id: "workshop",
    title: "Workshop",
    description:
      "Interactive sessions where experts share practical knowledge and emerging tech.",
    image: robbot,
    link: "/event#workshop",
    icon: Hammer,
  },
  {
    id: "poster-presentation",
    title: "Poster Presentation",
    description:
      "Students visually represent innovative ideas and research using posters.",
    image: robbot,
    link: "/event#poster-presentation",
    icon: ImageIcon,
  },
];

export default function Events() {
  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-center py-10">
      <div>
        <h1 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Events
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl px-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Link
                key={index}
                href={event.link}
                className="group  hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-lg flex flex-col hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                  unoptimized
                  className="rounded-lg object-cover mb-3"
                />
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-pink-400 group-hover:text-purple-400 transition-colors" />
                  <h2 className="text-lg font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {event.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed text-justify">
                  {event.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
