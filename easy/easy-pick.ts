// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
