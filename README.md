# Line Copy Protocol (LCP)

![LCP](https://github.com/paulmj7/linecopyprotocol/workflows/LCP/badge.svg)

Easily copy and paste lines of data from one file to another. Built on top of Deno.

## Usage

```bash
# Syntax: lcp <filename> <lines> <filename> <lines>

lcp test1.txt 1:3 test2.txt 1:3
# Explaination: Copy lines 1 to 3 of test1.txt into lines 1 to 3 of test2.txt.
# Note: Lines 1 to 3 and any that follow of test2.txt will be appended after the insert.

lcp test1.txt 2 test2.txt 3
# Explaination: Copy line 2 of test1.txt into line 3 of test2.txt.
# Note: Line 3 any any lines that follow of test2.txt will be appended after the insert.

lcp test1.txt 1:2 test2.txt 1:4
# Explaination: Replace lines 1:2 of test2.txt with lines 1:2 of test1.txt
# Note: In general, if the number of lines of the second line marker is greater than the first
# (1:4 is greater than 1:2), the additional lines specified will be deleted
```

## Installation

Install with deno
```bash
deno install --unstable --allow-read --allow-write -n lcp http://deno.land/x/linecopyprotocol/LCP.ts
```

Or build from source
```bash
chmod +x LCP.ts
```

Run
```bash
./LCP.ts file1 1:2 file2 2:4
# or deno run --unstable --allow-read --allow-write LCP.ts file1 1:2 file2 2:4
```

Import into your project with
```deno
import { lineCopyProtocol } from "https://deno.land/x/linecopyprotocol/src/lineCopyProtocol.ts"
```