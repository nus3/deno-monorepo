import { add } from "@nus3/add";

export function subtract(a: number, b: number): number {
  return add(a, b * -1);
}
