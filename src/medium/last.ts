// https:// github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md

/* _____________ Your Code Here _____________ */

type Last<T extends any[]> = T extends [...any, infer U] ? U : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
]
