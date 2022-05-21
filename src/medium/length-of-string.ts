// https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md

/* _____________ Your Code Here _____________ */

type LengthOfString<
  S extends string,
  A extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...A, First]>
  : A['length']

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]
