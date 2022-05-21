// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md

/* _____________ Your Code Here _____________ */

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: Awaited<T[K]>
}>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
]
