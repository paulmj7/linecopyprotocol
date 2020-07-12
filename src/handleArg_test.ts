import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { getLineMarkers } from "./handleArg.ts";

Deno.test("getLineMarkers Test", () => {
  assertEquals(getLineMarkers("1:3"), [1, 3]);
  assertEquals(getLineMarkers("1:"), [1, -1]);
  assertEquals(getLineMarkers(":2"), [0, 2]);
  assertThrows((): void => {
    assertEquals(getLineMarkers("1"), "Error getting line marker: 1");
  });
});
