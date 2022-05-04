// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

type If<C extends boolean, T, F> = C extends true ? T : F

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
