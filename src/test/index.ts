type P<T> = T extends 'x' ? string : number
type A3 = P<'x' | 'y'> // ?
