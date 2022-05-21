// https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md

/* _____________ Your Code Here _____________ */

type Replace<S extends string, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer M}`
    ? `${F}${To}${M}`
    : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];
