import { mergeProcessCovs } from "@bcoe/v8-coverage";
import { writeFileSync } from "node:fs";
import inspector from "node:inspector";

writeFileSync(
  "./source-file.js",
  `
export class Foo {
  static Baz = process.env["NODE_ENV"] === "test" ? "some" : "thing";

  // Remove this will not cause error
  static Bar = {};
}
`.trim(),
  "utf8"
);

const session = new inspector.Session();

session.connect();
session.post("Profiler.enable");
session.post("Profiler.startPreciseCoverage", {
  callCount: true,
  detailed: true,
});

await import("./source-file.js");

const coverage = await collectCoverage("source-file.js");
console.log(JSON.stringify(coverage, null, 2));

mergeProcessCovs([coverage]);

async function collectCoverage(filename) {
  return new Promise((resolve, reject) => {
    session.post("Profiler.takePreciseCoverage", async (error, coverage) => {
      if (error) return reject(error);

      const result = coverage.result.filter((entry) =>
        entry.url.includes(filename)
      );

      resolve({ result });
    });
  });
}
