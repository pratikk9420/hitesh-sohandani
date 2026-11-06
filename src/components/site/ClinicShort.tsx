import { useState } from "react";
import { Play } from "lucide-react";
import poster from "@/assets/clinic-room-short.jpg";

const EMBED_SRC = "https://www.youtube-nocookie.com/embed/HHVqwg58QoM?autoplay=1";

export function ClinicShort() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="aspect-[9/16] w-full max-w-sm overflow-hidden bg-black">
      {playing ? (
        <iframe
          src={EMBED_SRC}
          title="A look inside the Xkinovate treatment room in Juhu"
          className="size-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative size-full cursor-pointer"
          aria-label="Play a look inside the Xkinovate treatment room"
        >
          <img
            src={poster}
            alt=""
            width={1080}
            height={1920}
            className="size-full object-cover"
          />
          <span className="absolute inset-0 bg-ink/15 transition-colors group-hover:bg-ink/35" />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink-foreground/80 bg-ink/45 text-ink-foreground transition-transform group-hover:scale-105">
            <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
