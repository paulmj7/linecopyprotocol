#!/usr/bin/env deno run --allow-read --allow-write

import { lineCopyProtocolSync } from "./src/lineCopyProtocol.ts";
import { checkLCPArgs } from "./src/handleArg.ts";

const args = Deno.args;
if (!checkLCPArgs) throw new Error();

lineCopyProtocolSync(args[0], args[1], args[2], args[3]);
