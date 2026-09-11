"use client";

import { ageFromYear, MODE_META } from "./data";
import type { Dog } from "./types";
import { Top } from "./ui";

export default function MyDog({
  dog,
  setDog,
  onBack,
}: {
  dog: Dog;
  setDog: (d: Dog) => void;
  onBack: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <Top title="Min hund" onBack={onBack} />
      <div className="flex-1 overflow-auto px-5 pb-8">
        <div className="rounded-card bg-card p-5 text-center shadow-sm ring-1 ring-black/5">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#F4E6D4] text-5xl">
            {dog.photo || "🐶"}
          </div>
          <h2 className="mt-3 text-2xl font-extrabold">{dog.name}</h2>
          <p className="text-sm text-ink/60">
            {dog.breed} · {dog.size} · {dog.gender} · {ageFromYear(dog.year)}
          </p>
          <div
            className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-extrabold text-white"
            style={{ background: MODE_META[dog.defaultMode].color }}
          >
            Standard: {MODE_META[dog.defaultMode].label}
          </div>
        </div>
        <p className="mb-2 mt-5 text-sm font-extrabold">Bäst med…</p>
        <textarea
          value={dog.note}
          onChange={(e) => setDog({ ...dog, note: e.target.value })}
          rows={4}
          className="w-full resize-none rounded-card bg-card p-4 outline-none ring-1 ring-black/5"
        />
      </div>
    </div>
  );
}
