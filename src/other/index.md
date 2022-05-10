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





