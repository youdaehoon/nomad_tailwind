import Image from "next/image";
import { Inter, Noto_Sans, Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({ subsets: ["latin"] });
const text = "대훈\n\ntest";
const modi = JSON.parse(JSON.stringify(text));

export default function Home() {
  const day = ["mon", "tue", "wed", "thu", "fri", "sat"];
  return (
    <div className="bg-orange-400 h-screen flex items-center justify-center overflow-y-auto">
      <div className="pt-8 bg-white px-5 rounded-3xl">
        <div className=" border-b-gray-500 border-b-2">
          <span>March 2021 🔽</span>
        </div>
        <div className="text-center mt-5 font-semibold text-lg">
          <span>Hello, Bruno!</span>
          <br />
          <span>Your medicines for today</span>
        </div>
        <ul className="grid grid-cols-6   mt-10">
          {[16, 17, 18, 19, 20, 21].map((el, i) => (
            <li
              key={el}
              className="rounded-2xl gap-6 hover:bg-blue-300 w-20 flex flex-col text-center"
            >
              <span className="text-4xl font-semibold">{el}</span>
              <span className="text-2xl">{day[i]}</span>
            </li>
          ))}
        </ul>

        <div className="relative mt-32">
          <div className="relative rounded-3xl w-5/6 z-10 bg-yellow-300 p-5 h-80 flex flex-col justify-between text-lg font-semibold">
            <div>
              <span className="text-3xl">Nora-BE</span>
              <br />
              <span>Norenthindrone-0.35mg</span>
            </div>
            <div>7h30AM</div>
          </div>
          <div className="w-5/6 absolute top-0 right-1 z-0 rounded-3xl bg-blue-300 p-5 h-80  flex justify-between items-center text-lg font-semibold">
            <div>
              <div>
                <span className="text-3xl">Nora-BE</span>
                <br />
                <span>Norenthindrone-0.35mg</span>
              </div>
              <div>7h30AM</div>
            </div>
            <div className="text-2xl">✅</div>
          </div>
        </div>
        <div className="relative rounded-3xl mt-5 z-10 bg-teal-300 p-5 h-80 flex flex-col justify-between text-lg font-semibold">
          <div>
            <span className="text-3xl">Feosol</span>
            <br />
            <span>Ferrous SulFate-600mg</span>
          </div>
          <div>7h30AM</div>
        </div>
      </div>
    </div>
  );
}
