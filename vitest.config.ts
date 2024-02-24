import { UserConfig, defineConfig } from "vitest/config";
import Inspect from "vite-plugin-inspect";

const INSPECT = false;

export default defineConfig({
  // @ts-expect-error
  plugins: [
    INSPECT &&
      Inspect({
        build: true,
        outputDir: ".vite-inspect",
      }),
  ].filter(Boolean),

  test: {},
});
