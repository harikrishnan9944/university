import { Menu } from "./_componets/Menu";
import Timer from "./_componets/Timer";
import ParticlesBackground from "./_componets/ParticlesBackground";
import Card from "./_componets/Card";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full flex bg-black justify-center items-center relative overflow-hidden">

        <ParticlesBackground />


        <div className="absolute top-1 w-full flex justify-center">
          <Menu />
        </div>


        <div className="text-center space-y-4">
          <h1 className="text-white text-5xl font-semibold">
            Periyar University Symposium2k25
          </h1>
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            From Comz Department
          </h1>
          <Timer />
        </div>
      </div>


      <div>
        <Card />
      </div>
    </div>
  );
}
