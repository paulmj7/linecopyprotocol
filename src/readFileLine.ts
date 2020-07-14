import {
  readFileStrSync,
  readFileStr,
} from "https://deno.land/std@0.61.0/fs/read_file_str.ts";

export function readFileLineSync(filename: string): string[] {
  return readFileStrSync(filename).split("\n");
}

export function fileLineExtrSync(
  filename: string,
  start: number,
  stop: number,
): string[] {
  return readFileLineSync(filename).slice(start - 1, stop);
}

export async function readFileLine(filename: string): Promise<string[]> {
  return readFileStr(filename).then((content) => content.split("\n"));
}

export async function fileLineExtr(
  filename: string,
  start: number,
  stop: number,
): Promise<string[]> {
  return readFileLine(filename).then((lines) => lines.slice(start - 1, stop));
}
