// News-image entry for Friday 20 November 2026 (Node 22, standard library
// only): the image is the entry.png beside this file, drawn programmatically
// with PIL and DejaVu fonts, and this program copies it to /output/entry.png.
// The copy is deterministic: both runs of the program write the same bytes.
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
