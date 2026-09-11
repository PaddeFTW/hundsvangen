import type { Dog, Mode, OtherDog } from "./types";

export const STORAGE = "hundsvangen-v1";
export const YEAR_NOW = 2026;

export const MODE_META: Record<
  Mode,
  { label: string; hint: string; color: string; bg: string }
> = {
  lugn: {
    label: "Lugn",
    hint: "Calm = keep distance.",
    color: "#C17B6B",
    bg: "#F6E4DF",
  },
  oppen: {
    label: "Öppen",
    hint: "Kan hälsa i lugn takt.",
    color: "#6B8F71",
    bg: "#E4EFE6",
  },
  lek: {
    label: "Lek",
    hint: "Glad och social just nu.",
    color: "#E0B04A",
    bg: "#F8EED4",
  },
};

export const OTHERS: OtherDog[] = [
  {
    id: "b",
    initial: "B",
    name: "Bella",
    breed: "Labrador",
    size: "L",
    mode: "lugn",
    distance: "ca 70 m",
    note: "Bäst med vuxna tikar.",
    x: 28,
    y: 38,
  },
  {
    id: "k",
    initial: "K",
    name: "Kalle",
    breed: "Cocker spaniel",
    size: "M",
    mode: "oppen",
    distance: "ca 120 m",
    note: "Gillar noshälsning.",
    x: 62,
    y: 46,
  },
  {
    id: "m",
    initial: "M",
    name: "Maja",
    breed: "Border collie",
    size: "M",
    mode: "oppen",
    distance: "ca 90 m",
    note: "Bäst med aktiva hundar.",
    x: 48,
    y: 68,
  },
];

export const emptyDog: Dog = {
  name: "",
  photo: "",
  breed: "",
  size: "M",
  year: 2022,
  gender: "tik",
  defaultMode: "lugn",
  note: "",
};

export function ageFromYear(year: number) {
  const a = Math.max(0, YEAR_NOW - year);
  if (a === 0) return "valp";
  return `${a} år`;
}
