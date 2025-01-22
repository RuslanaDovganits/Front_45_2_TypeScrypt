export default function Lesson06() {

    // *  string 
  let username: string = "Umut";
  username = "Dmitrii";

  // *  number
  let number: number = 42
  number = 4.33

  // *  boolean
  let isAdmin: boolean = true
  isAdmin = 2 > 4

  // *  null (явное отсуствие значения)| undefined (не явное отсуствие значения)
let nothing: undefined = undefined
let empty: null = null

// * union type (обьеденение типов)
let value: number | string = 100
value = 1000
value = "my favorite number " + value

// * array
const colors: string[] = ['red', 'green', 'blue']
colors.push('magenta')

const numbers: number[] = [12, 122, 1222]
numbers.pop()

// * tuple (кортеж)  с readonly --> не изменяемый массив, т е станет картежем
const person: readonly [string, number ] = ['John', 35]

// * function
function sum(a:number, b:number) {
    return a + b
}
const result: number = sum(42, 100)
console.log(result)

const showMessage = (message: string | number): void => {
    console.log('result' + message)
}

const noReturn = showMessage(result)
// помним что функция без return возвращает underfind
console.log(noReturn)


// * any
// ленивый тип данных для тех, кто не хочет прописывать типы
// использовать не рекомендуется (или только в самых редких случаях)

// let someVar: any = "hello"
// someVar = 10

  return (
    <div>
      <h2>Typescript 🤓</h2>
      <p>
        Самое интересное на этом уроке происходит в теле функции компонента и в
        командной строке:{" "}
      </p>
    </div>
  );
}
