// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md

/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer U}` ? TrimLeft<U> : S;

type aaa = TrimLeft<" str">;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
