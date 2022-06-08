// https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md

/* _____________ Your Code Here _____________ */

type StringToUnion<T extends string> = T extends ''
  ? never
  : T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<
      StringToUnion<'coronavirus'>,
      'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
    >
  >
]
