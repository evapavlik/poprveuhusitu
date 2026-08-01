import FadeUp from "./FadeUp";
import { FindCongregationLink } from "./FindCongregation";

const icons = {
  water: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  rings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </svg>
  ),
  dove: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 20s3-1 7-1 7 1 7 1" />
      <path d="M12 12c2-3 6-5 10-5-1 3-3 5-5 6l-2 1v4" />
      <path d="M9 12c-2-3-6-5-10-5 1 3 3 5 5 6l2 1v4" />
      <path d="M12 4v8" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

const events = [
  {
    icon: icons.water,
    title: "Křest",
    text: "Vstup do křesťanského společenství. Křtíme děti i dospělé — po přípravě a rozhovoru s farářem.",
  },
  {
    icon: icons.rings,
    title: "Svatba",
    text: "Církevní sňatek v CČSH je platný i občansky — nemusíte pak na radnici podruhé. Jen si předem vyzvednete na matrice osvědčení. Oddávat mohou i farářky.",
  },
  {
    icon: icons.dove,
    title: "Pohřeb",
    text: "Rozloučení s důstojností a nadějí. Provázíme pozůstalé v nejtěžších chvílích.",
  },
  {
    icon: icons.chat,
    title: "Rozhovor s farářem",
    text: "Potřebujete si promluvit? Faráři a farářky CČSH jsou tu pro osobní rozhovor — bez závazků.",
  },
];

export default function LifeEvents() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-sage-pale">
      <FadeUp>
        <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-sage before:rounded-sm">
          Životní události
        </div>
      </FadeUp>
      <FadeUp>
        <h2 className="font-lora text-[clamp(30px,3.5vw,46px)] font-bold leading-[1.2] mb-12 max-w-[560px]">
          Provázíme vás{" "}
          <em className="italic text-sage">důležitými chvílemi.</em>
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((event, i) => (
          <FadeUp key={event.title} delay={i * 70}>
            <div className="bg-white border border-border rounded-xl px-7 py-8 hover:shadow-[0_8px_30px_rgba(74,124,111,0.08)] hover:-translate-y-0.5 transition-all duration-[250ms]">
              <div className="w-11 h-11 rounded-[10px] bg-sage/10 flex items-center justify-center text-sage mb-5">
                {event.icon}
              </div>
              <h3 className="font-lora text-lg font-semibold mb-2">
                {event.title}
              </h3>
              <p className="text-sm font-light leading-[1.8] text-text-muted">
                {event.text}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <div className="mt-10 max-w-[560px]">
          <p className="text-sm font-light leading-[1.8] text-text-muted mb-3">
            Cokoliv z toho se dá domluvit napřímo. V seznamu sborů najdete svoje
            město — na stránce sboru je telefon na faráře nebo farářku.
          </p>
          <FindCongregationLink variant="sage">
            Najít sbor blízko vás
          </FindCongregationLink>
        </div>
      </FadeUp>
    </section>
  );
}
