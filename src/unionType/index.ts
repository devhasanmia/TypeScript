// let age: number = 20;

// age Array union type
let ageArr: (string | number | boolean)[] = [20, 30, "Hasan", true];

console.log(ageArr);

// object union type

let user: {
    name: string;
    age: number;
    dateOfBirth: Date;
} = {
    name: "Hasan",
    age: 20,
    dateOfBirth: new Date()
}