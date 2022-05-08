// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
// In TypeScript 4.1 and onwards, you can re-map keys in mapped types
//  with an as clause in a mapped type:
// type MappedTypeWithNewProperties<Type> = {
//     [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

//  ------------------------------------------------------
// Pick
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
// Exclude
type Exclude<T, U> = T extends U ? never : T;
// Omit
type MyOmit1<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// ------------------------------------------------------

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
