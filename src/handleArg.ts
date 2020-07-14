import { ensureFileSync } from "https://deno.land/std@0.61.0/fs/mod.ts";

export function getLineMarkers(arg: string): number[] {
  // If arg: "1:3"
  if (arg[1] === ":" && arg.length === 3) {
    return [parseInt(arg[0]), parseInt(arg[2])];
  }
  // If arg: "1:"
  if (arg[1] === ":" && arg.length === 2) {
    return [parseInt(arg[0]), -1];
  }
  // If arg: ":1"
  if (arg[0] === ":" && arg.length === 2) {
    return [1, parseInt(arg[1])];
  }

  // If arg: "1"
  if (arg[0] !== ":" && arg.length === 1) {
    return [parseInt(arg[0]), parseInt(arg[0])];
  }

  throw new Error("Error getting line marker: " + arg);
}

export function checkLCPArgs(args: string[]): boolean {
  ensureFileSync(args[0]);
  ensureFileSync(args[2]);
  if (!args[1].includes(":")) return false;
  if (!args[3].includes(":")) return false;
  return true;
}
