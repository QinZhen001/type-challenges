//https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md

/* _____________ Your Code Here _____________ */

type AppendArgument<Fn,A> = Fn extends  (...args: infer Args) =>any 
?  (...args:[...Args,A]) => ReturnType<Fn>
: never 


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number
// (a,b,x) 相等于 (args_0,args_1,args_2)  => 叫什么名字并没有影响

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
]

