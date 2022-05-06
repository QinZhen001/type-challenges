type MyOmit<T, K extends keyof T> = {
  [key in keyof T]: T[key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type aaa = MyOmit<Todo, "titlascasce">;
