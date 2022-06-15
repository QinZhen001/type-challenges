// https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md

/* _____________ Your Code Here _____________ */

type Diff<O, O1> = {
  [P in keyof (O & O1) as P extends keyof (O | O1) ? never : P]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never;
};

// type Diff<O, O1> = keyof (O & O1); // 并集 （合成一整个）
// type Diff<O, O1> = keyof (O | O1); // 交集  (既属于也属于)

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
