import { cloneDeep } from "@/utils/cloneDeep";
import { describe, test, expect } from "vitest";

describe("cloneDeep", () => {
  const obj1 = { a: 1, b: "2" };

  test("Копия равна по структуре и значению исходному объекту", () => {
    const obj2 = { a: 1, b: "2" };
    expect(cloneDeep(obj1)).toEqual(obj2);
  });

  test("Объект-копия не связан с исходным по ссылке", () => {
    const obj3 = cloneDeep(obj1);
    obj3.a = 2;
    expect(obj3).not.toEqual(obj1);
  });
});
