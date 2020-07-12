import {
  fileLineExtrSync,
  fileLineExtr,
  readFileLineSync,
} from "./readFileLine.ts";
import { getLineMarkers } from "./handleArg.ts";

export function lineCopyProtocolSync(
  file1: string,
  marker1: string,
  file2: string,
  marker2: string,
) {
  const m1 = getLineMarkers(marker1);
  const m2 = getLineMarkers(marker2);
  const f1 = fileLineExtrSync(file1, m1[0], m1[1]);
  const f2 = readFileLineSync(file2);
  f2.splice(m2[0], 0, ...f1);
  console.log(f2);
}
