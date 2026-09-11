"use client";

import { MODE_META } from "./data";
import type { Dog, Screen, Walk } from "./types";
import { PrimaryBtn, Tab } from "./ui";

export default function Home({
  dog,
  walk,
  remainLabel,
  counts,
  onStart,
  onMap,
  onStop,
  go,
}: {
  dog: Dog;
  walk: Walk;
  remainLabel: string;
  counts: { total: number; lugn: number; oppen: number; lek: number };
  onStart: () => void;
  onMap: () => void;
  onStop: () => void;
  go: (s: Screen) => void;
}) {
  const remainMin = walk ? Math.max(1, parseInt(remainLabel, 10) || walk.duration) : 0;
  return (
    <div className="flex h-full flex-col">
      <div className="px-6 pt-14">
        <p className="text-sm font-bold text-primary">Hundsvängen</p>
        <h2 className="text-[28px] font-extrabold leading-tight">
          Hej {dog.name || "du"}
        </h2>
        <p className="mt-1 text-sm text-ink/55">Kolla parken innan ni går.</p>
      </div>
      <div className="mx-6 mt-5 rounded-card bg-card p-5 shadow-sm ring-1 ring-black/5">
        <p className="text-lg font-extrabold">
          {counts.total} hundar ute vid dammen
        </p>
        <p className="mt-1 text-sm text-ink/60">
          {counts.lugn} lugn, {counts.oppen} öppen
          {counts.lek ? `, ${counts.lek} lek` : ""}
        </p>
        <button onClick={onMap} className="mt-3 text-sm font-extrabold text-primary">
          Visa karta →
        </button>
      </div>
      {walk ? (
        <div
          className="mx-6 mt-4 rounded-card p-5 text-white"
          style={{ background: MODE_META[walk.mode].color }}
        >
          <p className="text-sm font-bold opacity-90">
            {walk.silent ? "Tyst promenad" : "Synlig"} i {remainLabel}
          </p>
          <p className="text-xl font-extrabold">
            {MODE_META[walk.mode].label} · {walk.duration} min
          </p>
          <p className="mt-1 text-sm opacity-90">
            Visible for {remainMin} min now.
          </p>
          <button
            onClick={onStop}
            className="mt-4 h-12 w-full rounded-2xl bg-white/20 font-extrabold"
          >
            Avsluta promenad
          </button>
        </div>
      ) : (
        <div className="mx-6 mt-6">
          <PrimaryBtn onClick={onStart}>Starta promenad</PrimaryBtn>
          <p className="mt-3 text-center text-xs text-ink/50">
            Stop when you’re home.
          </p>
        </div>
      )}
      <div className="mt-auto grid grid-cols-3 border-t border-black/5 bg-card">
        <Tab active label="Hem" onClick={() => {}}
        />
        <Tab label="Min hund" onClick={() => go("mydog")} />
        <Tab label="Inställn." onClick={() => go("settings")} />
      </div>
    </div>
  );
}
