#!/usr/bin/env deno run --allow-read --allow-write --unstable
import { lineCopyProtocol } from "./src/lineCopyProtocol.ts";
import { checkLCPArgs } from "./src/handleArg.ts";

const version = "v1.0.1";

try {
  const args = Deno.args;
  if (args.length === 0) {
    console.log(`Line Copy Protocol -- ${version}`);
    console.log("`lcp help` for help");
    console.log("Happy hacking!");
  } else if (args.length === 1 && args[0] === "help") {
    console.log(`Line Copy Protocol -- ${version}`);
    console.log(
      "Usage: lcp    <filename>    <start:stop>    <filename>    <start:stop>",
    );
    console.log("Ex: lcp test1.txt 1:3 test2.txt 1");
    console.log(
      "Explanation: Copy lines 1 through 3 of test1.txt into test2.txt starting at line 1",
    );
    console.log(
      "For more information: https://github.com/paulmj7/linecopyprotocol",
    );
  } else if (!checkLCPArgs(args)) {
    console.log("Invalid usage: please refer to `lcp help`");
  } else {
    lineCopyProtocol(args[0], args[1], args[2], args[3]);
  }
} catch (err) {
  console.log(err);
}
