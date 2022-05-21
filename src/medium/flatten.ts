// https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md

/* _____________ Your Code Here _____________ */

// 不借助额外泛型
type Flatten1<A extends any[]> = A extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flatten1<First>, ...Flatten1<Rest>]
    : [First, ...Flatten1<Rest>]
  : A

// 借助额外泛型
type Flatten<A extends any[], R extends any[] = []> = A extends [
  infer First,
  ...infer Rest
]
  ? First extends any[]
    ? Flatten<[...First, ...Rest], R>
    : Flatten<Rest, [...R, First]>
  : R

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >
]
