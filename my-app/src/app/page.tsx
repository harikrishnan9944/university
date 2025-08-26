import { Menu } from "./_componets/Menu";
import Timer from "./_componets/Timer";
import ParticlesBackground from "./_componets/ParticlesBackground";
import Card from "./_componets/Card";
import {HyperText} from '../components/magicui/hyper-text'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">

      <div className="sticky top-0  w-full z-50 pt-2">
        <Menu />
      </div>
      <div className="h-screen w-full flex justify-center items-center relative overflow-hidden">
        <ParticlesBackground />

        <div className="text-center space-y-4">
          <h1 className="text-white text-5xl font-semibold">

            <HyperText>Periyar University Symposium2k25</HyperText>
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
