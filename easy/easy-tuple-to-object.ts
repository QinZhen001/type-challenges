// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}
