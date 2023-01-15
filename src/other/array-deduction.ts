// https://juejin.cn/post/7182574672687398968
// 推断数组的具体值


type Zip<One extends unknown[], Others extends unknown[]> =
  One extends [infer OneFirst, ...infer Rest1] ?
  Others extends [infer OthersFirst, ...infer Rest2] ?
  [[OneFirst, OthersFirst], ...Zip<Rest1, Rest2>]
  : []
  : []



type Mutable<Obj> = {
  -readonly [Key in keyof Obj]: Obj[Key]
}



// 函数重载
function zip(target: unknown[], source: unknown[]): unknown[]
function zip<Target extends readonly unknown[], Source extends readonly unknown[]>(target: Target, source: Source): Zip<Mutable<Target>, Mutable<Source>>


function zip(target: unknown[], source: unknown[]) {
  if (!target.length || !source.length) {
    return []
  }
  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];

}





// as const 字面量类型
const target = [1, 2, 3]
const source = [4, "5", 6]


const res = zip(target, source)
console.log('res', res)




