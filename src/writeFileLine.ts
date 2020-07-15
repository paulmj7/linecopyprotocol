import {
  writeFileStrSync,
  writeFileStr,
} from "https://deno.land/std@0.61.0/fs/write_file_str.ts";

export function writeFileLineSync(filename: string, lines: string[]) {
  const content = concatNullTerminator(lines);
  return writeFileStrSync(filename, content.join(""));
}

export async function writeFileLine(filename: string, lines: string[]) {
  const content = concatNullTerminator(lines);
  return writeFileStr(filename, content.join(""));
}

function concatNullTerminator(lines: string[]) {
  for (let i = 0; i < lines.length - 1; i++) {
    lines[i] += "\n";
  }
  return lines;
}
