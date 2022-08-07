import axios from 'axios'


const url = "https://jsonplaceholder.typicode.com/todos/1"


interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(id, title, finished)

    function logTodo(id: number, title: string, completed: boolean) {
        console.log(`
        Todo ID: ${id}
        Todo title:${title}
        Is to finished:${completed}
    `)
    }
})


// Annatation

let x: number = JSON.parse('6')
let Ai: string = JSON.parse('Nur')

let isOdd: boolean

if (x % 2 == 0) {
    isOdd = true
} else {
    isOdd = false
}

type Score = string | number

let myScore: Score = 15


// Array   

// 1) lists

const arr = ['fork', 'work']

const arr1: string[] = ['word']

const arr2: Array<number> = [1, 2, 3]

const arr3: number[][] = []

arr3.push([4, 5, 6])

const arr4: (string | number)[] = []


// 2) tuple

const arr5: [string, number, boolean] = ['Ai', 15, true]

// 3) csv 

type SimpleCsv = [string, number, number]

const arr6: SimpleCsv[] = [['ai', 5, 8]]

type MyObj = {
    a: string;
    b: number;
    c: boolean;
}

interface MyObject {
    readonly a: string;
    b: number;
    c?: boolean;
}

const obj: MyObj = { a: 'white', b: 5, c: true }

const obj1: object = {}

const obj2: MyObject = {
    a: '5',
    b: 5,
    // c:true,
}


// interface

interface IPerson {
    name: string;
}

interface IPerson {
    age: number;
}

interface IAccount {
    login: string;
    email: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level?: string;
}

const user: IDeveloper = {
    name: '',
    age: 5,
    login: '',
    email: '',
    active: true,
    skills: ['js', 'ts']
}

// Type 


type Person = {
    name: string;
}

type MyAccount = {
    email: string;
    login: string;
}

type MyDeveloper = {
    skills: [];
    level: string;
}

type FrontendDeveloper = Person & MyAccount & MyDeveloper;

const dev: FrontendDeveloper[] = []