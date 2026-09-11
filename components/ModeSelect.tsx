"use client";

import { useState } from "react";
import { MODE_META } from "./data";
import type { Mode } from "./types";
import { PrimaryBtn, Top } from "./ui";

export default function ModeSelect({
  defaultMode,
  duration,
  setDuration,
  silent,
  setSilent,
  silentUsed,
  onBack,
  onStart,
}: {
  defaultMode: Mode;
  duration: number;
  setDuration: (n: number) => void;
  silent: boolean;
  setSilent: (v: boolean) => void;
  silentUsed: number;
  onBack: () => void;
  onStart: (m: Mode) => void;
}) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  return (
    <div className="flex h-full flex-col">
      <Top title="Ny promenad" onBack={onBack} />
      <div className="flex-1 space-y-3 overflow-auto px-5 pb-6">
        {(Object.keys(MODE_META) as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="w-full rounded-card p-4 text-left"
            style={{
              background: MODE_META[m].bg,
              outline: mode === m ? `2px solid ${MODE_META[m].color}` : "none",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-extrabold">{MODE_META[m].label}</span>
              <span
                className="rounded-full px-3 py-1 text-xs font-extrabold text-white"
                style={{ background: MODE_META[m].color }}
              >
                {m === "lugn" ? "avstånd" : m === "oppen" ? "hälsa" : "lek"}
              </span>
            </div>
            <p className="mt-1 text-sm text-ink/65">{MODE_META[m].hint}</p>
          </button>
        ))}
        <div className="rounded-card bg-card p-4 ring-1 ring-black/5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-extrabold">Synlig i</span>
            <span className="text-sm font-bold">{duration} min</span>
          </div>
          <input
            type="range"
            min={20}
            max={90}
            step={5}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full accent-[#E08A3C]"
          />
          <p className="mt-2 text-xs text-ink/50">20–90 minuter</p>
        </div>
        <button
          onClick={() => silentUsed < 3 && setSilent(!silent)}
          className="flex w-full items-center justify-between rounded-card bg-card p-4 ring-1 ring-black/5"
        >
          <div className="text-left">
            <p className="font-extrabold">Tyst promenad</p>
            <p className="text-xs text-ink/55">
              Du ser andra, de ser inte dig. {silentUsed}/3 idag
            </p>
          </div>
          <div
            className={`h-7 w-12 rounded-full p-1 ${
              silent ? "bg-primary" : "bg-[#E8DCCE]"
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full bg-white transition ${
                silent ? "translate-x-5" : ""
              }`}
            />
          </div>
        </button>
      </div>
      <div className="px-5 pb-8">
        <PrimaryBtn color={MODE_META[mode].color} onClick={() => onStart(mode)}>
          Starta {MODE_META[mode].label.toLowerCase()}
        </PrimaryBtn>
      </div>
    </div>
  );
}
