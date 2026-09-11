"use client";

import { useState } from "react";
import { Toggle, Top } from "./ui";

export default function Settings({
  visibility,
  setVisibility,
  approx,
  setApprox,
  silentDefault,
  setSilentDefault,
  silentUsed,
  blocked,
  setBlocked,
  onDelete,
  onBack,
}: {
  visibility: boolean;
  setVisibility: (v: boolean) => void;
  approx: boolean;
  setApprox: (v: boolean) => void;
  silentDefault: boolean;
  setSilentDefault: (v: boolean) => void;
  silentUsed: number;
  blocked: string[];
  setBlocked: (v: string[]) => void;
  onDelete: () => void;
  onBack: () => void;
}) {
  const [confirm, setConfirm] = useState(false);
  const names: Record<string, string> = { b: "Bella", k: "Kalle", m: "Maja" };
  return (
    <div className="flex h-full flex-col">
      <Top title="Inställningar" onBack={onBack} />
      <div className="flex-1 space-y-3 overflow-auto px-5 pb-8">
        <Toggle
          title="Synlighet"
          desc="Andra kan se din nål under promenad"
          on={visibility}
          set={setVisibility}
        />
        <Toggle
          title="Ungefärlig position"
          desc="50–80 m brus. Ingen hemadress."
          on={approx}
          set={setApprox}
        />
        <Toggle
          title="Tyst promenad som standard"
          desc={`${silentUsed}/3 använda idag`}
          on={silentDefault}
          set={setSilentDefault}
        />
        <div className="rounded-card bg-card p-4 ring-1 ring-black/5">
          <p className="font-extrabold">Blockerade</p>
          {blocked.length === 0 ? (
            <p className="mt-1 text-sm text-ink/50">Inga blockerade just nu.</p>
          ) : (
            blocked.map((id) => (
              <div key={id} className="mt-2 flex items-center justify-between text-sm">
                <span>{names[id] || id}</span>
                <button
                  onClick={() => setBlocked(blocked.filter((x) => x !== id))}
                  className="font-bold text-primary"
                >
                  Ta bort
                </button>
              </div>
            ))
          )}
        </div>
        {!confirm ? (
          <button
            onClick={() => setConfirm(true)}
            className="w-full pt-4 text-center text-sm font-extrabold text-calm"
          >
            Radera konto
          </button>
        ) : (
          <button
            onClick={onDelete}
            className="h-12 w-full rounded-card bg-calm font-extrabold text-white"
          >
            Bekräfta radering
          </button>
        )}
      </div>
    </div>
  );
}
