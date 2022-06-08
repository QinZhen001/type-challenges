enum A {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
}

// Error
type B = {
  length: number
  [aaa in A]: number
  [key: string]: number
}

type Person = {
  age: number
  // [k: string]: string | number
}
