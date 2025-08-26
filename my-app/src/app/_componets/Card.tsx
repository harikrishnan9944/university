import Image from "next/image";
import robbot from '../../../public/robbot.webp'
export default function Card() {
    return (
        <div className="h-screen w-full bg-black flex justify-center items-center">
            <div className="bg-gray-900 border border-gray-100 p-4 rounded-xl">
                <Image
                    src="robbot"
                    alt="Futuristic Robot"
                    width={500}
                    height={300}
                    unoptimized
                    className="rounded-lg object-cover"
                />


            </div>
        </div>
    );
}
