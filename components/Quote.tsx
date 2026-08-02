import FadeUp from "./FadeUp";

export default function Quote() {
  return (
    <div className="bg-sage py-[100px] px-6 md:px-12 text-center">
      <FadeUp>
        <p className="font-cormorant text-[clamp(26px,3.5vw,44px)] font-normal italic leading-[1.45] text-white max-w-[780px] mx-auto mb-6">
          „Člověk není na světě, aby páchal zlo, nýbrž aby žil dobru, a tak
          naplnil věčný zákon Boží, vládnoucí vesmírem.“
        </p>
      </FadeUp>
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
        Karel Farský · Postila (kázání), 1922
      </p>
    </div>
  );
}
