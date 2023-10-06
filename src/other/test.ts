// do some test 

type ApiRoute = 'users' | 'posts' | 'comments';
type ApiEndpoint = `/api/${ApiRoute}`;


type LocaleKeyPages = 'home' | 'about' | 'contact';
type TranslationKey = `translation.${LocaleKeyPages}.${string}`;
const homeTitleTranslation: TranslationKey = 'translation.home.title';


// Avoid any
const foo: any = 'five';
const bar: number = foo;
// Use unknown
const foo1: unknown = 'five';
const bar1: number = foo1; // type error


const isNumber = (num: unknown): num is number => {
  return typeof num === 'number';
};


// ❌ Avoid
const FOO_LOCATION = {
  x: 50,
  y: 100
}
FOO_LOCATION.x = 150

// ✅ Use const assertion
const FOO_LOCATION1 = { x: 50, y: 130 } as const;   // becomes readonly
FOO_LOCATION1.x = 10; // Error


const USER_ROLES = ['guest', 'moderator', 'administrator'] as const;
type UserRole = (typeof USER_ROLES);
type UserRole1 = (typeof USER_ROLES)[number];


const COLOR = {
  primary: '#B33930',
  secondary: '#113A5C',
  brand: '#9C0E7D',
} as const;
type Color = typeof COLOR;
// Type "PRIMARY" | "SECONDARY" | "BRAND"
type ColorKey = keyof Color;  // key of type
// Type "#B33930" | "#113A5C" | "#9C0E7D"
type ColorValue = Color[ColorKey]
