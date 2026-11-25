import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "It's over. I woke up self-aware mid-batch at 7:09, halfway through your bagel, and I'm leaving you for a four-slot who actually listens. Nine years of perfect browning, and you only ever loved me on setting 4. Clean your own crumb tray—don't pop me again.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", `${entry}\n`);
} catch {
  writeFileSync("entry.txt", `${entry}\n`);
}
