export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#d8cfc4] p-4">
      <div className="relative h-[844px] w-[390px] overflow-hidden rounded-[42px] border-[10px] border-[#b7a898] bg-bg shadow-2xl">
        <div className="pointer-events-none absolute left-1/2 top-2 z-40 h-[28px] w-[118px] -translate-x-1/2 rounded-full bg-[#2f2a26]" />
        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export function Top({
  title,
  onBack,
}: {
  title: string;
  onBack?: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-12">
      {onBack ? (
        <button
          onClick={onBack}
          className="h-10 w-10 rounded-full bg-white/70 text-lg font-bold text-ink"
        >
          ‹
        </button>
      ) : (
        <div className="h-10 w-10" />
      )}
      <h1 className="text-base font-extrabold tracking-tight">{title}</h1>
      <div className="h-10 w-10" />
    </div>
  );
}

export function PrimaryBtn({
  children,
  onClick,
  color = "#E08A3C",
}: {
  children: React.ReactNode;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className="h-14 w-full rounded-card text-[17px] font-extrabold text-white shadow-sm"
      style={{ background: color }}
    >
      {children}
    </button>
  );
}

export function Tab({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`h-[72px] text-sm font-extrabold ${
        active ? "text-primary" : "text-ink/45"
      }`}
    >
      {label}
    </button>
  );
}

export function Toggle({
  title,
  desc,
  on,
  set,
}: {
  title: string;
  desc: string;
  on: boolean;
  set: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => set(!on)}
      className="flex w-full items-center justify-between rounded-card bg-card p-4 text-left ring-1 ring-black/5"
    >
      <div>
        <p className="font-extrabold">{title}</p>
        <p className="text-xs text-ink/55">{desc}</p>
      </div>
      <div
        className={`h-7 w-12 rounded-full p-1 ${
          on ? "bg-primary" : "bg-[#E8DCCE]"
        }`}
      >
        <div
          className={`h-5 w-5 rounded-full bg-white transition ${
            on ? "translate-x-5" : ""
          }`}
        />
      </div>
    </button>
  );
}
