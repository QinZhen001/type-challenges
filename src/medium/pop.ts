// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md

/* _____________ Your Code Here _____________ */
type Pop<T extends any[]> = T extends [...infer P, any] ? P : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>
];
