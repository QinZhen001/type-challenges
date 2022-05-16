// https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md

/* _____________ Your Code Here _____________ */

type LookUp<U, T extends string> = U extends { type: T } ? U : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [Expect<Equal<LookUp<Animal, "dog">, Dog>>, Expect<Equal<LookUp<Animal, "cat">, Cat>>];
