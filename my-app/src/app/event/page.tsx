"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ParticlesBackground from "../_componets/ParticlesBackground";
import { Trophy, BookOpen, Users, User, CheckCircle, Rocket, X } from "lucide-react";

export default function Event_Card() {
  const router = useRouter();

  const card_data = [
    {
      id: "paper-presentation",
      title: "Paper Presentation",
      sub_title: "Showcase your innovative ideas with research papers!",
      bg_image_url: "/robbot.jpg",
      prizes: ["₹10,000", "₹5,000", "₹2,000"],
      description:
        "Participants will present their research or innovative ideas to a panel of judges. Best papers will be published in our annual tech journal.",
      coordinators: ["Dr. K. Ramesh - 9876543210", "Ms. Priya - 9876501234"],
      eligibility: "Open to UG/PG students across all disciplines.",
    },
    {
      id: "coding-hackathon",
      title: "Coding Hackathon",
      sub_title: "Solve real-world problems in an intense coding battle.",
      bg_image_url: "/robbot.jpg",
      prizes: ["₹25,000", "₹15,000", "₹10,000"],
      description:
        "A 24-hour coding marathon where participants develop innovative solutions for given problem statements.",
      coordinators: ["Mr. Arjun - 9876123456", "Ms. Kavya - 9876987654"],
      eligibility: "Open for all UG/PG students with programming knowledge.",
    },
    {
      id: "robotics-challenge",
      title: "Robotics Challenge",
      sub_title: "Build and compete with your own robots",
      bg_image_url: "/robbot.jpg",
      prizes: ["₹15,000", "₹7,500", "₹5,000"],
      description:
        "Teams design and build robots to complete specific tasks within time constraints.",
      coordinators: ["Dr. Senthil - 9876012345", "Mr. Manoj - 9876098765"],
      eligibility: "Open to engineering and polytechnic students.",
    },
    {
      id: "quiz-competition",
      title: "Quiz Competition",
      sub_title: "Test your knowledge and win exciting prizes!",
      bg_image_url: "/robbot.jpg",
      prizes: ["₹5,000", "₹3,000", "₹1,000"],
      description:
        "A thrilling quiz covering science, tech, and general knowledge. Compete in teams of 2.",
      coordinators: ["Ms. Anitha - 9876345678"],
      eligibility: "Open to all students.",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "auto";
  }, [selectedEvent]);

  return (
    <div className="relative w-full">
      {card_data.map((item, index) => (
        <section
          key={index}
          id={item.id}
          className="relative w-full h-screen flex justify-center items-center text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.bg_image_url})` }}
          ></div>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              {item.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium">
              {item.sub_title}
            </p>
            <button
              onClick={() => setSelectedEvent(item)}
              className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </section>
      ))}

      {selectedEvent && (
        <div className="fixed inset-0 flex justify-center items-center z-50 overflow-x-hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
          <ParticlesBackground />

          <div className="relative bg-gray-950/90 border border-gray-700 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.7)] max-w-4xl w-[95%] p-8 md:p-10 overflow-y-auto max-h-[90vh] text-white z-10 animate-scaleUp">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="border-b border-gray-700 pb-4 mb-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {selectedEvent.title}
              </h2>
              <p className="text-gray-300 text-lg mt-2">
                {selectedEvent.sub_title}
              </p>
            </div>

            <div className="grid gap-6">
              {/* Prizes */}
              <div className="bg-gray-900/60 border border-yellow-400/30 rounded-xl p-6 shadow-md">
                <h3 className="flex items-center gap-2 text-2xl font-semibold text-yellow-400 mb-4">
                  <Trophy className="w-6 h-6" /> Prizes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedEvent.prizes?.map((prize: string, i: number) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 border border-yellow-400/50 rounded-xl shadow p-4 text-center"
                    >
                      <h4 className="text-lg font-bold text-yellow-300">
                        {i === 0
                          ? "1st Prize"
                          : i === 1
                          ? "2nd Prize"
                          : "3rd Prize"}
                      </h4>
                      <p className="mt-2 text-xl font-extrabold text-yellow-200">
                        {prize}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-900/60 border border-pink-400/30 rounded-xl p-6 shadow-md">
                <h3 className="flex items-center gap-2 text-2xl font-semibold text-pink-400 mb-3">
                  <BookOpen className="w-6 h-6" /> Description
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Coordinators */}
              <div className="bg-gray-900/60 border border-blue-400/30 rounded-xl p-6 shadow-md">
                <h3 className="flex items-center gap-2 text-2xl font-semibold text-blue-400 mb-3">
                  <Users className="w-6 h-6" /> Coordinators
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedEvent.coordinators?.map((c: string, i: number) => (
                    <div
                      key={i}
                      className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/40 rounded-lg p-3 shadow-sm flex items-center gap-2"
                    >
                      <User className="w-5 h-5 text-blue-300" />
                      <p className="text-lg font-semibold text-blue-300">
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-gray-900/60 border border-green-400/30 rounded-xl p-6 shadow-md">
                <h3 className="flex items-center gap-2 text-2xl font-semibold text-green-400 mb-3">
                  <CheckCircle className="w-6 h-6" /> Eligibility
                </h3>
                <p className="text-gray-300">{selectedEvent.eligibility}</p>
              </div>
            </div>

            {/* Register */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => router.push("/register")}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] transition-all duration-300"
              >
                <Rocket className="w-5 h-5" /> Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
