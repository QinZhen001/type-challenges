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



## 字母大小写

[https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

* Uppercase 大写
* Lowercase 小写
* Capitalize 首字母大写
* Uncapitalize 首字母小写



# 感悟



## 遍历type

```tsx
type Keys<F> = {
  [key in keyof F]: F[key]
}
```

使用：

```tsx
type Foo = {
  a: number
  b: string
}
type result = Keys<Foo>
```





## 数组类型也是索引类型

```tsx
type Mutable<Obj> = {
  -readonly [Key in keyof Obj]: Obj[Key]
}

type T = Mutable<{
  readonly a: 1,
  readonly b: 2
}>

type Aa = Mutable<readonly [1, 2, 3]>
```

索引类型是聚合多个元素的类型，所以对象、数组、class 都是。

（准确来说叫元组，元组是元素个数固定的数组）



## 增加泛型

```tsx
type LengthOfString<S extends string> = any

// 单纯只有S我们很难去搞的时候 可以考虑增加多一个泛型
type LengthOfString<S extends string,A extends any[] = []>   
// 同时设置了默认值  
```





## 拆分 string

我们可以利用infer 来实现拆分string

```tsx
type xxx<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | xxx<Rest>
  : never;
```



## 合并对象

```tsx
type Merge<F, S> = Omit<Omit<F, keyof S> & S, never>
```

**tip:  & 交叉类型出现相同字段会变成 never** 只要在交叉之前通过 Omit 去掉就行

```tsx
Omit<T,never>  // 重新整合成一个对象  
```



## & 和 |

```tsx
type Diff<O, O1> = keyof (O & O1); // 并集 （合成一整个）
type Diff<O, O1> = keyof (O | O1); // 交集  (既属于也属于)
```







## 控制联合类型的分布方式

假设我们有一个`ToArray`辅助类型，如果输入的类型不是数组，则返回一个数组类型。

```tsx
type ToArray<T> = T extends Array<unknown> ? T: T[];
type Foo = ToArray<string|number>;

// string[] | number[]。但这是有歧义的。为什么不是(string | number)[] 呢？
```

默认情况下，当typescript遇到一个联合类型（这里是`string | number`）的通用参数（这里是`T`）时，它会分配到每个组成元素，这就是为什么这里会得到`string[] | number[]`。这种行为可以通过使用特殊的语法和用一对`[]`来包装`T`来改变，比如。

```tsx
type ToArray<T> = [T] extends [Array<unknown>] ? T : T[];
type Foo = ToArray<string | number>;

// 现在，Foo 被推断为类型(string | number)[]
```







## 函数的返回类型

```tsx
type User = {
    age: number;
    gender: string;
    country: string;
    city: string
};
type Demographic = Pick<User, 'age'|'gender'>;
type Geo = Pick<User, 'country'|'city'>;
```

不是重复函数的返回类型

```tsx
function createCircle() {
    return {
        kind: 'circle' as const,
        radius: 1.0
    }
}

function transformCircle(circle: { kind: 'circle'; radius: number }) {
    ...
}

transformCircle(createCircle());

```

而是使用`ReturnType<T>`来提取它：

```tsx
function createCircle() {
    return {
        kind: 'circle' as const,
        radius: 1.0
    }
}

function transformCircle(circle: ReturnType<typeof createCircle>) {
    ...
}

transformCircle(createCircle());

```
