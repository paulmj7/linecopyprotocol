# Line Copy Protocol (LCP)

![LCP](https://github.com/paulmj7/linecopyprotocol/workflows/LCP/badge.svg)

Easily copy, paste, and delete lines of data from one file to another. Built on top of Deno.

## Usage

```bash
# Syntax: lcp <filename> <lines> <filename> <line>
# Syntax: lcp <filename> <lines> <filename> <lines>

lcp test1.txt 1:3 test2.txt 1:3
# Explanation: Copy lines 1 to 3 of test1.txt into lines 1 to 3 of test2.txt.
# Note: Lines 1 to 3 and any that follow of test2.txt will be appended after the insert.

lcp test1.txt 2 test2.txt 3
# Explanation: Copy line 2 of test1.txt into line 3 of test2.txt.
# Note: Line 3 any any lines that follow of test2.txt will be appended after the insert.

lcp test1.txt 1:2 test2.txt 1:4
# Explanation: Replace lines 1:4 of test2.txt with lines 1:2 of test1.txt
# Note: The best way to explain this is with a anecdote of a visual text editor.
# You highlight lines 1:4 and copy them, then highlight lines 1:2 and paste lines 1:4
# in place of lines 1:2.
```

## Installation

Install with deno
```bash
deno install --unstable --allow-read --allow-write -n lcp http://deno.land/x/linecopyprotocol/LCP.ts
```

And lcp will be installed!
```bash
lcp
# Line Copy Protocol
# `lcp help` for help
# Happy hacking!
```

You may also build from source
```bash
chmod +x LCP.ts

./LCP.ts file1 1:2 file2 2:4
# or deno run --unstable --allow-read --allow-write LCP.ts file1 1:2 file2 2:4
```

The source code is MIT licensed and can imported into your project with:
```deno
import { lineCopyProtocol } from "https://deno.land/x/linecopyprotocol/src/lineCopyProtocol.ts"
```

## Disclaimer

This is a small tool I worked up while learning Deno. The technical specifications are open to contributions and ideas. For ideas and suggestions please open an issue. For pull requests please update tests as necessary.
