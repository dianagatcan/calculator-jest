import { sumNrs, subNrs, multiplyNrs, divideNrs, powerNrs } from "./App";

describe("sumNrs", () => {
  test("should add two positive numbers properly", () => {
    expect(sumNrs(2, 3)).toBe(5);
    expect(sumNrs(3, 2)).toBe(5);
  });

  test("should add two decimal numbers properly", () => {
    expect(sumNrs(2.3, 2.3)).toBe(4.6);
  });

  test("should be able to add one decimal number to a whole number properly", () => {
    expect(sumNrs(2, 2.3)).toBe(4.3);
    expect(sumNrs(2.3, 2)).toBe(4.3);
  });

  test("should handle 0 properly", () => {
    expect(sumNrs(0, 2)).toBe(2);
    expect(sumNrs(2, 0)).toBe(2);
  });
});

describe("subNrs", () => {
  test("shuould subtract two whole numbers", () => {
    expect(subNrs(10, 3)).toBe(7);
    expect(subNrs(10, 30)).toBe(-20);
  });
  test("should subtract two decimal numbers", () => {
    expect(subNrs(10, 3.5)).toBe(6.5);
    expect(subNrs(10.5, 3)).toBe(7.5);
  });
  test("should handle 0 properly", () => {
    expect(subNrs(0, 2)).toBe(-2);
    expect(subNrs(2, 0)).toBe(2);
  });
});

describe("multiplyNrs", () => {
  test("shuould multiply two whole numbers", () => {
    expect(multiplyNrs(5, 3)).toBe(15);
  });
  test("should multiply two decimal numbers", () => {
    expect(multiplyNrs(5, 3.5)).toBe(17.5);
    expect(multiplyNrs(2.3, 8)).toBe(18.4);
  });
  test("should handle 0 properly", () => {
    expect(multiplyNrs(0, 2)).toBe(0);
    expect(multiplyNrs(8, 0)).toBe(0);
  });
});

describe("divideNrs", () => {
  test("shuould divide two whole numbers", () => {
    expect(divideNrs(9, 3)).toBe(3);
    expect(divideNrs(5, 2)).toBe(2.5);
  });
  test("should divide two decimal numbers", () => {
    expect(divideNrs(5.5, 2)).toBe(2.75);
  });
  test("should handle 0 properly", () => {
    expect(divideNrs(0, 2)).toBe(0);
    expect(divideNrs(8, 0)).toBe(Infinity);
  });
});

describe("powerNrs", () => {
  test("should exponentiate two whole numbers", () => {
    expect(powerNrs(8, 3)).toBe(512);
  });
  test("should exponentiate decimal numbers", () => {
    expect(powerNrs(2.1, 2)).toBe(4.41);
  });
  test("should handle 0 properly", () => {
    expect(powerNrs(5, 0)).toBe(1);
    expect(powerNrs(0, 5)).toBe(0);
  });
});
