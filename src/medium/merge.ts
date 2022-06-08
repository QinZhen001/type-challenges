// https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md

/* _____________ Your Code Here _____________ */

// type Merge<F, S> = {
//   [key in keyof (F & S)]: key extends keyof S
//     ? S[key]
//     : key extends keyof F
//     ? F[key]
//     : never
// }

type Merge<F, S> = Omit<Omit<F, keyof S> & S, never>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]
