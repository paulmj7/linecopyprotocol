import { existsSync } from "https://deno.land/std@0.61.0/fs/mod.ts";

export function getLineMarkers(arg: string): number[] {
  if (arg[0] === "0" || arg[0] < "1") {
    throw new Error("Invalid line marker: cannot start with or be 0");
  }
  if (!Number(arg.replace(":", ""))) {
    throw new Error("Invalid line marker: must be a number or number range");
  }

  if (arg.includes(":")) {
    const markers = arg.split(":");
    let m1 = markers[0];
    let m2 = markers[1];

    if (m1 === "") m1 = "1";
    if (m2 === "") m2 = "-1";
    if (m1 > m2 && m2 !== "-1") {
      throw new Error("Invalid line marker: start cannot be greater than stop");
    }

    return [Number(m1) - 1, Number(m2)];
  } else if (!arg.includes(":")) {
    return [Number(arg[0]) - 1, Number(arg[0])];
  }

  throw new Error("Error getting line marker: " + arg);
}

export function checkLCPArgs(args: string[]): boolean {
  if (args.length != 4) {
    console.log("Cannot exceed 4 arguments");
    return false;
  }
  if (!existsSync(args[0])) {
    console.log("File does not exist: " + args[0]);
    return false;
  }
  if (!existsSync(args[2])) {
    console.log("File does not exist: " + args[2]);
    return false;
  }
  if (!isValidLineMarker(args[1])) {
    console.log("Invalid line marker: " + args[1]);
  }
  if (!isValidLineMarker(args[3])) {
    console.log("Invalid line marker: " + args[1]);
  }
  return true;
}

export function isValidLineMarker(arg: string): boolean {
  const argArray = arg.split("");
  for (let i = 0; i < argArray.length; i++) {
    if (
      !Number.isInteger(Number(argArray[i])) && argArray[i] !== ":"
    ) {
      return false;
    }
  }
  return true;
}
