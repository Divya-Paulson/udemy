// let greetingText = 'Hi I'm Divya!!!!';

// alert(greetingText);
// alert(greetingText);
// greetingText = 'Hi, I am really Divya';
// alert(greetingText);
// alert(age);
// alert(age);


let userName = 'Divya' + 'Paulson';
let hobbies = ['Sports', 'Cooking', 'Reading'];

let job = {
    title: 'Developer',
    place: 'Ernakulam',
    salary: 50000
};

// alert(hobbies[0]);
// alert(hobbies[1]);
// alert(hobbies[2]);
// alert(hobbies);
// alert(job.place);
let totalAdultYears;
let age = 26;

function calculateAdultYears(userAge) {
    let result;
    result = userAge - 18;
    return result;
}
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);


let person = {
    name: 'Divya', //property
    greet() { //method
        console.log('Hello!!!');
    }
};

person.greet();