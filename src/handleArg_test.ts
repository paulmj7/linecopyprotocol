import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { getLineMarkers } from "./handleArg.ts";

Deno.test("getLineMarkers Test", () => {
  assertEquals(getLineMarkers("1:3"), [1, 3]);
  assertEquals(getLineMarkers("1:"), [1, -1]);
  assertEquals(getLineMarkers(":2"), [1, 2]);
  assertEquals(getLineMarkers("1"), [1, 1]);
  assertThrows((): void => {
    assertEquals(getLineMarkers("Hi"), "Error getting line marker: 1");
  });
});
