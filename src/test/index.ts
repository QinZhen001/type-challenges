type something = "abc" | "bcd" | "cde" | "def";

// type mappedTypeWithOmit = {
//     [k in Omit<something, "def">]: string;
// }

// type mappedTypeWithExclude = {
//   [k in Exclude<something, "def">]: string;
// };

// type aaa = ['aaa']

// type bbb = keyof aaa

// let ads:bbb = 'aaa'

// type DeepReadonly<T> = {
//   readonly [K in keyof T]: keyof T[K] extends never ? "true" : 'false'
// };

// type ddd = DeepReadonly<aaa>;

// type Mapish = { [k: string]: boolean };
// type M = keyof Mapish;

// const obj = {one: 1, two: 2}
// type dd  = typeof obj
// type Prop = {
//   [k in keyof typeof obj]?: string;
// }

class A {
  constructor() {
    console.log("constructor aaaa");
  }

  aaa() {
    console.log("aaa");
  }
}

class B extends A {
  constructor() {
    console.log("constructor bbb");
    super();
  }

  aaa() {
    console.log("bbb");
  }
}

let b = new B();
