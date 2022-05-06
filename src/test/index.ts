// type something = "abc" | "bcd" | "cde" | "def";

// type mappedTypeWithOmit = {
//     [k in Omit<something, "def">]: string;
// }

// type mappedTypeWithExclude = {
//   [k in Exclude<something, "def">]: string;
// };

// type mappedType = {
//   abc: string;
//   bcd: string;
//   cde: string;
//   def: string;
// };

// type mappedTypeWithOmit = Omit<mappedType, "def">;

type something = 'abc' | 'bcd' | 'cde' | 'def';
type somethingWithExclude = Exclude<something, "def">