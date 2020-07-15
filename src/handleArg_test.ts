import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { getLineMarkers, isValidLineMarker } from "./handleArg.ts";

Deno.test("getLineMarkers Line Range", () => {
  assertEquals(getLineMarkers("1:3"), [0, 3]);
});

Deno.test("getLineMarkers Only Start Line Specified", () => {
  assertEquals(getLineMarkers("1:"), [0, -1]);
});

Deno.test("getLineMarkers Only End Line Specified", () => {
  assertEquals(getLineMarkers(":2"), [0, 2]);
});

Deno.test("getLineMarkers Single Line", () => {
  assertEquals(getLineMarkers("1"), [0, 1]);
});

Deno.test("getLineMarkers String Input", () => {
  assertThrows((): void => {
    getLineMarkers("Hi");
  });
});

Deno.test("getLineMarkers String Input Range", () => {
  assertThrows((): void => {
    getLineMarkers("Hello:World");
  });
});

Deno.test("isValidLineMarker Single Line", () => {
  assertEquals(isValidLineMarker("1"), true);
});

Deno.test("isValidLineMarker Line Range", () => {
  assertEquals(isValidLineMarker("1:2"), true);
});

Deno.test("isValidLineMarker Only Start Line Specified", () => {
  assertEquals(isValidLineMarker("1:"), true);
});

Deno.test("isValidLineMarker Only End Line Specified", () => {
  assertEquals(isValidLineMarker(":1"), true);
});

Deno.test("isValidLineMarker Large Line Range", () => {
  assertEquals(isValidLineMarker("10:20"), true);
});

Deno.test("isValidLineMarker Negative Start Line", () => {
  assertEquals(isValidLineMarker("-1:1"), false);
});

Deno.test("isValidLineMarker Negative End Line", () => {
  assertEquals(isValidLineMarker("1:-2"), false);
});

Deno.test("isValidLineMarker Negative Line Range", () => {
  assertEquals(isValidLineMarker("-20:-10"), false);
});

Deno.test("isValidLineMarker String Input", () => {
  assertEquals(isValidLineMarker("Hello"), false);
});

Deno.test("isValidLineMarker String Input w/ Range", () => {
  assertEquals(isValidLineMarker("Hello:World"), false);
});
