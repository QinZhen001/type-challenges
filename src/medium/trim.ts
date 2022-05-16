// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md

/* _____________ Your Code Here _____________ */

// type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer U}` ? TrimLeft<U> : S;
// type TrimRight<S extends string> = S extends `${infer U}${" " | "\n" | "\t"}` ? TrimRight<U> : S;
// type Trim<S extends string> = TrimLeft<TrimRight<S>>;

type Space = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${Space}${infer U}` | `${infer U}${Space}` ? Trim<U> : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];
