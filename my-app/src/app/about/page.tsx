import Image from "next/image";
import { User } from "lucide-react";
import ParticlesBackground from "../_componets/ParticlesBackground";

export default function Page() {
  const teachers = [
    { name: "Rathi Priya", image_url: "/robbot.jpg" },
    { name: "Anitha Kumar", image_url: "/robbot.jpg" },
    { name: "K. Ramesh", image_url: "/robbot.jpg" },
    { name: "Priya Sharma", image_url: "/robbot.jpg" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-6 relative overflow-hidden">
      <ParticlesBackground />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent relative z-10">
        Our Staffs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-500 flex flex-col items-center text-center
              ${index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"}`}
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={teacher.image_url}
                alt={teacher.name}
                fill
                className="rounded-full object-cover border-4 border-purple-500 group-hover:border-pink-500 transition-colors duration-500"
              />
            </div>

            <h2 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
              {teacher.name}
            </h2>

            <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
              <User className="w-4 h-4 text-purple-400" />
              <span>Assistant Professor</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
