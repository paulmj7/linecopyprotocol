# Line Copy Protocol (LCP)

![LCP](https://github.com/paulmj7/linecopyprotocol/workflows/LCP/badge.svg)

Easily copy and paste lines of data from one file to another. Built on top of Deno.

## Installation

Install with deno
```bash
deno install --allow-read --allow-write -n lcp http://deno.land/x/linecopyprotocol/src/lineCopyProtocol.ts
```

Or build from source
```bash
chmod +x LCP.ts
```

Run
```bash
./LCP.ts file1 1:2 file2 2:4
# or deno run --allow-read --allow-write LCP.ts file1 1:2 file2 2:4
```

Import into your project with
```deno
import { lineCopyProtocol } from "https://deno.land/x/linecopyprotocol/src/lineCopyProtocol.ts"
```
