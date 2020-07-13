# Line Copy Protocol (LCP)

![LCP](https://github.com/paulmj7/linecopyprotocol/workflows/LCP/badge.svg)

Easily copy and paste lines of data from one file to another. Built on top of Deno.

## Installation

Build from source
```bash
chmod +x LCP.ts
```

Run
```bash
./LCP.ts file1 1:2 file2 2:4
```

Import into your project with
```deno
import { lineCopyProtocol } from "https://github.com/paulmj7/linecopyprotocol/blob/master/src/lineCopyProtocol.ts"
```
