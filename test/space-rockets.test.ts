import { test } from "vitest";
import { land } from "../src/space-rockets";

test("launch is successful", async () => {
  land(true);
});
