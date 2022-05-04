// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends [infer U, ...any] ? U : never
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
