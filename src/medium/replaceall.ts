// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md

/* _____________ Your Code Here _____________ */


// tip: F 不需要ReplaceAll的操作了 只ReplaceAll一次
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer B}`
    ? `${F}${To}${ReplaceAll<B, From, To>}`
    : S;




/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
  Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];
