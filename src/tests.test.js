import { sumNrs, subNrs } from "./App";

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
