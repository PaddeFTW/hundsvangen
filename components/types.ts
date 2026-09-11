export type Mode = "lugn" | "oppen" | "lek";
export type Size = "S" | "M" | "L";
export type Gender = "tik" | "hane";
export type Screen =
  | "onboarding"
  | "home"
  | "mode"
  | "map"
  | "mydog"
  | "settings";

export type Dog = {
  name: string;
  photo: string;
  breed: string;
  size: Size;
  year: number;
  gender: Gender;
  defaultMode: Mode;
  note: string;
};

export type Walk = {
  mode: Mode;
  silent: boolean;
  duration: number;
  startedAt: number;
} | null;

export type OtherDog = {
  id: string;
  initial: string;
  name: string;
  breed: string;
  size: Size;
  mode: Mode;
  distance: string;
  note: string;
  x: number;
  y: number;
};
