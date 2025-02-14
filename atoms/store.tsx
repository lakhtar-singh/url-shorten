"use client"; 
import { atom } from "recoil";

export const Links = atom({
  key: "Links",
  default: [] as { short_link: string; original_link: string; click: number; status: string; date: string }[],
});