import { Mic, FileText, Code, Utensils, Cpu, HelpCircle, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const schedule = [
        {
            time: "09:00 AM - 09:30 AM",
            title: "Inauguration & Welcome Speech",
            speaker: "Chief Guest: Dr. K. Ramesh",
            icon: <Mic className="w-6 h-6 text-pink-400" />,
        },
        {
            time: "09:30 AM - 11:00 AM",
            title: "Paper Presentation",
            speaker: "UG/PG Participants",
            icon: <FileText className="w-6 h-6 text-purple-400" />,
        },
        {
            time: "11:00 AM - 12:30 PM",
            title: "Coding Hackathon (Round 1)",
            speaker: "Tech Team",
            icon: <Code className="w-6 h-6 text-blue-400" />,
        },
        {
            time: "12:30 PM - 01:30 PM",
            title: "Lunch Break",
            speaker: "—",
            icon: <Utensils className="w-6 h-6 text-green-400" />,
        },
        {
            time: "01:30 PM - 03:00 PM",
            title: "Robotics Challenge",
            speaker: "Participants",
            icon: <Cpu className="w-6 h-6 text-yellow-400" />,
        },
        {
            time: "03:00 PM - 04:00 PM",
            title: "Quiz Competition",
            speaker: "Quiz Masters",
            icon: <HelpCircle className="w-6 h-6 text-indigo-400" />,
        },
        {
            time: "04:00 PM - 05:00 PM",
            title: "Valedictory & Prize Distribution",
            speaker: "Organizing Committee",
            icon: <Award className="w-6 h-6 text-pink-500" />,
        },
    ];

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
            <div className="w-full max-w-4xl bg-gray-900/80 border border-purple-500/40 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)] p-8 backdrop-blur-md">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Symposium Schedule
                </h1>

                <div className="space-y-6">
                    {schedule.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-800/60 border border-gray-700 rounded-xl p-5 shadow-md hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-900/80 rounded-lg border border-gray-700 shadow-md">
                                    {item.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-purple-400">
                                        {item.time}
                                    </h2>
                                    <p className="text-white font-semibold mt-1">{item.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mt-3 md:mt-0 italic">{item.speaker}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300">
                        <Link href='/register'>
                            Register now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
