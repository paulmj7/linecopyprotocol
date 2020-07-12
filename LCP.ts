import { lineCopyProtocolSync } from "./src/lineCopyProtocol.ts";
import { checkLCPArgs } from "./src/handleArg.ts";

const args = Deno.args;
console.log(args)
if (!checkLCPArgs) throw new Error;

lineCopyProtocolSync(args[0], args[1], args[2], args[3])