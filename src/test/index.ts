type XXX<S> = S extends `${xxx}${infer U}` ? Other : AnOther;

let aaa = 'a'
aaa.toLocaleUpperCase()