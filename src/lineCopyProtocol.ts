import {
  fileLineExtrSync,
  fileLineExtr,
  readFileLineSync,
  readFileLine,
} from "./readFileLine.ts";
import { getLineMarkers } from "./handleArg.ts";
import { writeFileLineSync, writeFileLine } from "./writeFileLine.ts";

export function lineCopyProtocolSync(
  file1: string,
  marker1: string,
  file2: string,
  marker2: string,
): void {
  const m1 = getLineMarkers(marker1);
  const m2 = getLineMarkers(marker2);
  const f1 = fileLineExtrSync(file1, m1[0], m1[1]);
  const f2 = readFileLineSync(file2);
  // Assume m2 is singular ex "1" instead of "1:2"
  let del = 0;
  if ((m2[0] + 1) !== m2[1]) {
    del = m2[1] - m2[0];
  }
  f2.splice(m2[0], del, ...f1);
  writeFileLineSync(file2, f2);
}

export async function lineCopyProtocol(
  file1: string,
  marker1: string,
  file2: string,
  marker2: string,
): Promise<void> {
  const m1 = getLineMarkers(marker1);
  const m2 = getLineMarkers(marker2);
  const f1 = await fileLineExtr(file1, m1[0], m1[1]);
  const f2 = await readFileLine(file2);
  let del = 0;
  if ((m2[0] + 1) !== m2[1]) {
    del = m2[1] - m2[0];
  }
  f2.splice(m2[0], del, ...f1);
  writeFileLine(file2, f2);
}
