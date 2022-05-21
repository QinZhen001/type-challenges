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
type R = Record<string, any>;
// type R = object  (这样做不好 没办法增加新的属性)

let obj: R = {
  ccc: "asdad",
  ddd: ["hi"],
};
obj.ddd = "ddd";
obj.cccc = [1, 32, 54];
```





## Awaited

[The Awaited Type and Promise Improvements](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)

TypeScript 4.5 introduces a new utility type called the `Awaited` type. This type is meant to model operations like `await` in `async` functions, or the `.then()` method on `Promise`s - specifically, the way that they recursively unwrap `Promise`s.

```tsx
// A = string
type A = Awaited<Promise<string>>;
// B = number
type B = Awaited<Promise<Promise<number>>>;
// C = boolean | number
type C = Awaited<boolean | Promise<number>>;
```

实现

```tsx
/**
 * Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to `never`. This emulates the behavior of `await`.
 */
type Awaited<T> =
    T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
        T extends object & { then(onfulfilled: infer F): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
            F extends ((value: infer V, ...args: any) => any) ? // if the argument to `then` is callable, extracts the first argument
                Awaited<V> : // recursively unwrap the value
                never : // the argument to `then` was not callable
        T; // non-object or non-thenable
```





