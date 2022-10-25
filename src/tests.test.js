import { sumNrs } from "./App";

test("shuld add two positive numbers properly", () => {
  expect(sumNrs(2, 3)).toEqual(5);
  expect(sumNrs(3, 2)).toEqual(5);
});

test("should add two decimal numbers properly", () => {
  expect(sumNrs(2.3, 2.3).toEqual(4.6));
});

test("should be able to add one decimal number to a whole number properly", () => {
  expect(sumNrs(2, 2.3).toEqual(4.3));
  expect(sumNrs(2.3, 2).toEqual(4.3));
});

test("should handle 0 properly", () => {
  expect(sumNrs(0, 2).toEqual(2));
  expect(sumNrs(2, 0).toEqual(2));
});
