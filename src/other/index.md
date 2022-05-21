# 正文

## key-remapping-via-as

[https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)

In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an `as` clause in a mapped type:

```tsx
type MappedTypeWithNewProperties<Type> = {
  [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

```
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;

type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
```

## object

[interface object couldn't extends Record](https://stackoverflow.com/questions/64621451/interface-object-couldnt-extends-recordstring-unknown)

```tsx
type R = Record<string, any>
// type R = object  (这样做不好 没办法增加新的属性)

let obj: R = {
  ccc: 'asdad',
  ddd: ['hi'],
}
obj.ddd = 'ddd'
obj.cccc = [1, 32, 54]
```

## Indexed Access Types

[https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

```tsx
type Person = { age: number; name: string; alive: boolean }
type Age = Person['age']
```

```tsx
type I1 = Person['age' | 'name']
// type I1 = string | number

type I2 = Person[keyof Person]
// type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName]
// type I3 = string | boolean
```

```tsx
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
]

// [number] 针对的是一个const变量
type Person = typeof MyArray[number]
// type Person = {
//   name: string;
//   age: number;
// }
```

## Distributive Conditional Types

When conditional types act on a generic type, they become _distributive_ when given a union type. For example, take the following:

```ts
type ToArray<Type> = Type extends any ? Type[] : never
type StrArrOrNumArr = ToArray<string | number>
// type StrArrOrNumArr = string[] | number[]
```

Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the `extends` keyword with square brackets.

```tsx
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never
// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>
// type StrArrOrNumArr = (string | number)[]
```

# 感悟



##  extends 和 infer

利用 extends 和 infer

```tsx
type XXX<S> = S extends `${xxx}${infer U}` ? Other : AnOther
```





## 增加泛型

```tsx
type LengthOfString<S extends string> = any

// 单纯只有S我们很难去搞的时候 可以考虑增加多一个泛型
type LengthOfString<S extends string,A extends any[] = []>   
// 同时设置了默认值  
```

