// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T]: T[P];
} & {
  [key in keyof Omit<T, K>]: T[key];
};
/* _____________ Test Cases _____________ */
import type { Alike, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
